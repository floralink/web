<template>
  <div ref="printArea" class="reportview">
    <h2>Erfassungsdaten</h2>

    <ReportTableQueryInfo :reportID="reportID" />
    <ReportTableStatistics :reportID="reportID" />

    <details>
      <summary>Gesamtliste vorkommender Taxa (Samenpflanzen)</summary>
      <ReportTableTaxaList :reportID="reportID" :plugins="plugins" />
    </details>

    <details>
      <summary>
        Gesamtliste vorkommender Taxa (Nicht-Samenpflanzen, experimentelles
        Feature)
      </summary>
      <ReportTableTaxaListOther :reportID="reportID" :plugins="plugins" />
    </details>

    <div v-if="report.occurrenceStatistics.uniqueTaxaCount > 5">
      <h2>Taxonspezifische Daten</h2>

      <div class="tab-container">
        <div
          v-for="plugin in plugins"
          :key="plugin.info.name"
          class="tab-button"
          :class="{ active: isActive(plugin.info.name) }"
          @click.prevent="setActive(plugin.info.name)"
        >
          {{ plugin.info.title }}
        </div>
      </div>
      <div
        v-for="plugin in plugins"
        v-show="isActive(plugin.info.name)"
        :key="plugin.info.name"
      >
        <ReportMainPlugin
          :reportID="reportID"
          :plugin="plugin.info"
          :pluginStatistics="plugin.stats"
        />
      </div>
    </div>

    <!-- <h2>Export</h2> -->

    <!-- <div class="center">
      <a
        class="button"
        :href="`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(state)
        )}`"
        :download="`floralysis-report-${reportID}.json`"
        >Rohdaten als JSON</a
      > -->
    <!-- <p class="button" @click="printReport()">Bericht drucken</p> -->
    <!-- </div> -->
  </div>
</template>

<script>
// import plugins
import { ellenberg, rotelistemv, fukarekhenker } from "@floralink/plugins";
const pluginModules = [ellenberg, rotelistemv, fukarekhenker];

export default defineNuxtComponent({
  props: {
    reportID: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      toolTips: {
        linkToOneReport:
          "Dieser Link zeigt nur auf diesen Teil des Berichts. Wenn du auf alle Berichte verweisen möchtest, nutze den Link weiter unten.",
      },
      plugins: [],
      activePluginTab: "ellenberg",
      report: useReportStore().reports[this.reportID],
    };
  },
  created() {
    const taxa = useTaxonStore();

    pluginModules.forEach((pluginModule) => {
      this.plugins.push({
        info: pluginModule,
        data: taxa.taxonSpecific[pluginModule.name],
        stats: this.report.taxonSpecificStatistics[pluginModule.name],
      });
    });
  },
  methods: {
    dateToString: (date) => dateToString(date),
    printReport() {
      printHTML(this.$refs.printArea.innerHTML);
    },
    isActive(tabID) {
      return this.activePluginTab === tabID;
    },
    setActive(tabID) {
      this.activePluginTab = tabID;
    },
  },
});
</script>

<style scoped>
.reportview {
  flex: 20%;
  /* max-width: 1100px; */
  margin: 10px;
  margin-top: -30px;
  background-color: var(--grey2);
  overflow: none;
}

:deep(h2) {
  padding: 10px;
  background-color: var(--green1);
  border-bottom: 5px solid var(--grey1);
  font-size: 1.5em;
}

.tab-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.tab-button {
  background-color: var(--green2);
  padding: 10px;
  margin: 5px;
  transition: 0.2s;
  cursor: pointer;
  flex: 50%;
  text-align: center;
  font-size: 1.2em;
}

.tab-button:hover {
  background-color: var(--green1);
}

.tab-button.active {
  background-color: var(--grey1);
  cursor: unset;
}
</style>
