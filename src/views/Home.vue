<template>
  <TheIntro />

  <TheQuery
    v-if="getStatus === 'query'"
    id="query"
    @performquery="getResults($event)"
  />

  <!-- STATUS MESSAGES WHILE PROCESSING QUERIES TO REPORTS -->
  <LayoutPanel v-if="getStatus === 'loading'" title="Abfrage">
    <InfoBox title="Statusmeldungen">
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

<script>
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
import state from "../state.js";

const taxonReferencePluginID = "germansl";

// import components
import LayoutPanel from "../components/LayoutPanel.vue";
import InfoBox from "../components/InfoBox.vue";
import TheIntro from "../components/TheIntro.vue";
import TheQuery from "../components/Query/TheQuery.vue";
import ReportView from "../components/Report/ReportView.vue";

// initialize taxon specific databases
floralink.initializeDatabase(germanslDB);
floralink.initializeDatabase(ellenbergDB);
floralink.initializeDatabase(rotelistemvDB);
floralink.initializeDatabase(fukarekhenkerDB);
floralink.initializeDatabase(werbeo);

export default {
  name: "Report",
  components: {
    LayoutPanel,
    InfoBox,
    TheIntro,
    TheQuery,
    ReportView,
  },
  data() {
    return {
      statusMessages: [],
      state: state,
      activeReportID: "",
      activeReportIDs: [],
    };
  },
  computed: {
    getStatus() {
      let allStatusMessagesCount =
        this.queryCount * (2 + this.pluginCount * 2) + 1;
      if (this.statusMessages.length === 0) {
        return "query";
      } else if (this.statusMessages.length >= allStatusMessagesCount) {
        this.statusMessage(
          "Die Erfassungen und verknüpfte Daten wurden erfolgreich abgerufen!"
        );
        return "ready";
      } else {
        return "loading";
      }
    },
  },
  methods: {
    isActive(id) {
      return this.activeReportID === id;
    },
    setActive(id) {
      this.activeReportID = id;
    },
    statusMessage(msg) {
      console.log(msg);
      this.statusMessages.push(msg);
    },
    getResults(queries) {
      this.queryCount = queries.length;
      this.pluginCount = Object.keys(state.taxonSpecificPlugins).length;
      this.statusMessages = [];

      // initialize / reset reportData store
      this.activeReportIDs = [];
      this.statusMessage("Abfrage wird an WerBeo gesendet...");

      // request data for each query
      queries.forEach(async (query, index) => {
        // skip query if already done earlier
        const { ["creationDate"]: creationDate, ...newQueryWithoutDate } =
          query;

        let queryJSON = JSON.stringify(newQueryWithoutDate);
        let uniqueQuery = Object.values(state.reportData).every((report) => {
          const { ["creationDate"]: creationDate, ...oldQueryWithoutDate } =
            report.occurrenceDataQuery;

          // this is not great for comparing objects
          if (JSON.stringify(oldQueryWithoutDate) === queryJSON) {
            this.activeReportIDs.push(report.id);
            if (index === 0) this.activeReportID = report.id;
            this.queryCount--;
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
        this.activeReportIDs.push(reportID);
        if (index === 0) this.activeReportID = reportID;

        // initialize report object
        state.reportData[reportID] = {
          id: reportID,
          occurrenceDataQuery: query,
          taxonOccurrenceData: {},
          occurrenceStatistics: {},
          taxonOccurrenceStatistics: {},
          taxonSpecificStatistics: {},
        };

        // get occurrence data from WerBeo through floralink server
        let resOccurrenceData = await floralink.getOccurrenceData(
          werbeo,
          query
        );

        const occurrenceData = resOccurrenceData.occurrences;
        state.occurrenceData["werbeo"] = Object.assign(
          state.occurrenceData["werbeo"] || {},
          occurrenceData
        );
        this.statusMessage(
          `Erfassungsdaten für Abfrage ${index + 1} empfangen`
        );

        // convert occurrenceData to taxonOccurrenceData for later analysis
        const taxonOccurrenceData =
          floralink.convertToTaxonOccurrenceData(occurrenceData);
        state.reportData[reportID].taxonOccurrenceData = taxonOccurrenceData;

        // calculate statistics with floralink
        state.reportData[reportID].occurrenceStatistics =
          floralink.getOccurrenceStatistics(occurrenceData);
        state.reportData[reportID].taxonOccurrenceStatistics =
          floralink.getTaxonOccurrenceStatistics(
            taxonOccurrenceData,
            occurrenceData
          );
        this.statusMessage(
          `Statistiken für Erfassungsdaten der Abfrage ${index + 1} berechnet`
        );

        let taxonIDs = Object.keys(resOccurrenceData.taxa);

        // request taxon reference data for occurring taxa
        let resTaxonReference = floralink.getTaxonDataByIDs(
          taxonIDs,
          taxonReferencePluginID
        );
        state.taxonReference[taxonReferencePluginID] = Object.assign(
          state.taxonReference[taxonReferencePluginID] || {},
          resTaxonReference.taxa
        );

        // initialize / reset taxonSpecificStatistics
        state.reportData[reportID].taxonSpecificStatistics = {};

        // request taxon specific data for occurring taxa
        Object.values(state.taxonSpecificPlugins).forEach(
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
            state.taxonSpecific[taxonSpecificPlugin.name] = Object.assign(
              state.taxonSpecific[taxonSpecificPlugin.name] || {},
              resTaxonSpecific.taxa
            );
            this.statusMessage(
              `Taxonspezifische Daten (${
                taxonSpecificPlugin.name
              }) für Abfrage ${index + 1} empfangen`
            );

            // calculate statistics for taxon specific data
            state.reportData[reportID].taxonSpecificStatistics[
              taxonSpecificPlugin.name
            ] = floralink.getTaxonSpecificStatistics(
              taxonSpecificPlugin,
              resTaxonSpecific
            );

            this.statusMessage(
              `Statistiken für taxonspezifische Daten (${
                taxonSpecificPlugin.name
              }) der Abfrage ${index + 1} berechnet`
            );
          }
        );
      });
    },
  },
};
</script>

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
