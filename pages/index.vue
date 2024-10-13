<script setup lang="ts">
// import Floralink and its plugins
// @ts-ignore
import * as floralink from "@floralink/core";
import {
  werbeo,
  germanslDB,
  ellenbergDB,
  rotelistemvDB,
  fukarekhenkerDB,
  // @ts-ignore
} from "@floralink/databases";

import hash from "object-hash";

const plugins = usePluginStore();
const reports = useReportStore();
const taxa = useTaxonStore();
const occurrences = useOccurrenceStore();

const taxonReferencePluginID = "germansl";

// initialize taxon specific databases
floralink.initializeDatabase(germanslDB);
floralink.initializeDatabase(ellenbergDB);
floralink.initializeDatabase(rotelistemvDB);
floralink.initializeDatabase(fukarekhenkerDB);
floralink.initializeDatabase(werbeo);

const statusMessages: Ref<string[]> = ref([]);
const activeReportID = ref("");
const activeReportIDs: Ref<string[]> = ref([]);
const queryCount = ref(0);
const pluginCount = ref(0);

const allStatusMessagesCount = computed(
  () => queryCount.value * (2 + pluginCount.value * 2) + 1
);

const getStatus = computed(() => {
  if (statusMessages.value.length === 0) {
    return "query";
  } else if (statusMessages.value.length === allStatusMessagesCount.value) {
    statusMessage(
      "Die Erfassungen und verknüpfte Daten wurden erfolgreich abgerufen!"
    );
    return "ready";
  } else if (statusMessages.value.length > allStatusMessagesCount.value) {
    return "ready";
  } else {
    return "loading";
  }
});

// Methods

function isActive(id: string) {
  return activeReportID.value === id;
}
function setActive(id: string) {
  activeReportID.value = id;
}

function statusMessage(msg: string) {
  console.log(msg);
  statusMessages.value.push(msg);
}

function getResults(queries: any[]) {
  queryCount.value = queries.length;
  pluginCount.value = Object.keys(plugins.taxonSpecificPlugins).length;
  statusMessages.value = [];

  // initialize / reset reportData store
  activeReportIDs.value = [];
  statusMessage("Abfrage wird an WerBeo gesendet...");

  // request data for each query
  queries.forEach(async (query, index) => {
    // skip query if already done earlier
    const { ["creationDate"]: creationDate, ...newQueryWithoutDate } = query;

    let queryJSON = JSON.stringify(newQueryWithoutDate);
    let uniqueQuery = Object.values(reports.reports).every((report) => {
      const { ["creationDate"]: creationDate, ...oldQueryWithoutDate } =
        report.occurrenceDataQuery;

      // this is not great for comparing objects
      if (JSON.stringify(oldQueryWithoutDate) === queryJSON) {
        activeReportIDs.value.push(report.id);
        if (index === 0) activeReportID.value = report.id;
        queryCount.value--;
        return false;
      } else {
        return true;
      }
    });

    if (!uniqueQuery) {
      return;
    }

    // generate reportID from query object with the object-hash library
    let reportID = hash(query);
    activeReportIDs.value.push(reportID);
    if (index === 0) activeReportID.value = reportID;

    // initialize report object
    reports.reports[reportID] = {
      id: reportID,
      occurrenceDataQuery: query,
      taxonOccurrenceData: {},
      occurrenceStatistics: {},
      taxonOccurrenceStatistics: {},
      taxonSpecificStatistics: {},
    };

    // get occurrence data from WerBeo through floralink server
    let resOccurrenceData = await floralink.getOccurrenceData(werbeo, query);

    const occurrenceData = resOccurrenceData.occurrences;
    occurrences.occurrences["werbeo"] = Object.assign(
      occurrences.occurrences["werbeo"] || {},
      occurrenceData
    );
    statusMessage(`Erfassungsdaten für Abfrage ${index + 1} empfangen`);

    // convert occurrenceData to taxonOccurrenceData for later analysis
    const taxonOccurrenceData =
      floralink.convertToTaxonOccurrenceData(occurrenceData);
    reports.reports[reportID].taxonOccurrenceData = taxonOccurrenceData;

    // calculate statistics with floralink
    reports.reports[reportID].occurrenceStatistics =
      floralink.getOccurrenceStatistics(occurrenceData);
    reports.reports[reportID].taxonOccurrenceStatistics =
      floralink.getTaxonOccurrenceStatistics(
        taxonOccurrenceData,
        occurrenceData
      );
    statusMessage(
      `Statistiken für Erfassungsdaten der Abfrage ${index + 1} berechnet`
    );

    let taxonIDs = Object.keys(resOccurrenceData.taxa);

    // request taxon reference data for occurring taxa
    let resTaxonReference = floralink.getTaxonDataByIDs(
      taxonIDs,
      taxonReferencePluginID
    );
    taxa.taxonReference[taxonReferencePluginID] = Object.assign(
      taxa.taxonReference[taxonReferencePluginID] || {},
      resTaxonReference.taxa
    );

    // initialize / reset taxonSpecificStatistics
    reports.reports[reportID].taxonSpecificStatistics = {};

    // request taxon specific data for occurring taxa
    Object.values(plugins.taxonSpecificPlugins).forEach(
      (taxonSpecificPlugin) => {
        let taxonSpecificQuery = {
          taxonIDs,
          taxonSpecificPluginID: taxonSpecificPlugin.name,
          taxonReferencePluginID,
        };

        let resTaxonSpecific = floralink.getTaxonDataByIDs(
          taxonSpecificQuery.taxonIDs,
          taxonSpecificQuery.taxonSpecificPluginID
        );
        taxa.taxonSpecific[taxonSpecificPlugin.name] = Object.assign(
          taxa.taxonSpecific[taxonSpecificPlugin.name] || {},
          resTaxonSpecific.taxa
        );
        statusMessage(
          `Taxonspezifische Daten (${
            taxonSpecificPlugin.name
          }) für Abfrage ${index + 1} empfangen`
        );

        // calculate statistics for taxon specific data
        reports.reports[reportID].taxonSpecificStatistics[
          taxonSpecificPlugin.name
        ] = floralink.getTaxonSpecificStatistics(
          taxonSpecificPlugin,
          resTaxonSpecific
        );

        statusMessage(
          `Statistiken für taxonspezifische Daten (${
            taxonSpecificPlugin.name
          }) der Abfrage ${index + 1} berechnet`
        );
      }
    );
  });
}
</script>

<template>
  <!-- <TheIntro /> -->

  <QueryTheQuery
    v-if="getStatus === 'query'"
    id="query"
    @performquery="getResults($event)"
  />

  <!-- STATUS MESSAGES WHILE PROCESSING QUERIES TO REPORTS -->
  <LayoutPanel v-if="getStatus === 'loading'" title="Abfrage">
    <InfoBox title="Statusmeldungen">
      <!-- TODO: 500 error: InfoBox is not defined -->
      <template v-for="message in statusMessages" :key="message">
        {{ message }}<br />
      </template>
    </InfoBox>
  </LayoutPanel>

  <!-- CURRENTLY ONLY LOADS COMPONENTS WHEN ALL DATA IS LOADED, NO ERROR HANDLING DOWNWARDS IF EMPTY -->
  <template v-if="getStatus === 'ready'">
    <div class="center">
      <div class="button big" @click="statusMessages = []">
        Abfrage bearbeiten
      </div>
    </div>
    <LayoutPanel id="report" title="Bericht">
      <div class="tab-container">
        <div
          v-for="(reportID, index) in activeReportIDs"
          :key="reportID"
          class="tab-button"
          :class="{ active: isActive(reportID) }"
          @click.prevent="setActive(reportID)"
        >
          Bericht {{ index + 1 }}
        </div>
      </div>
      <div
        v-for="reportID in activeReportIDs"
        v-show="isActive(reportID)"
        :key="reportID"
      >
        <ReportView :reportID="reportID" />
      </div>

      <!-- <LayoutPanel flex="true"> -->

      <!-- </LayoutPanel> -->
    </LayoutPanel>
  </template>
</template>

<!-- generalize as component -->
<style>
.tab-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
}
.tab-button {
  background-color: var(--green2);
  padding: 10px;
  margin: 5px;
  transition: 0.2s;
  cursor: pointer;
  flex: 30%;
  text-align: center;
  font-size: 1.2em;
}

.tab-button:hover {
  background-color: var(--green1);
}

.tab-button.active {
  background-color: var(--grey1);
  cursor: unset;
  flex: 80%;
}
</style>
