<template>
  <TableBase
    title="Vorkommende Taxa"
    description="Liste aller im Zeitraum und Gebiet erfasster Taxa (Nicht-Samenpflanzen)"
    :filename="`report-${reportID}-taxalist-nospermatophytina`"
  >
    <tr>
      <th colspan="4">Taxon</th>
      <th colspan="3">Erfassungsstatistik</th>
    </tr>

    <tr>
      <th>Wissenschaftlicher Name</th>
      <th>Deutscher Name</th>
      <th>Gruppe</th>
      <th>Rang</th>
      <th>Erfassungen</th>
      <th>Erste Erfassung</th>
      <th>Letzte Erfassung</th>
    </tr>

    <tr v-for="taxon in sortedTaxonOccurrenceDataArray" :key="taxon.taxonID">
      <th>{{ taxonReference[taxon.taxonID].scientificName }}</th>
      <th>{{ taxonReference[taxon.taxonID].vernacularNames[0].name }}</th>
      <th>{{ taxonReference[taxon.taxonID].taxonGroup }}</th>
      <th>{{ taxonReference[taxon.taxonID].taxonRank }}</th>
      <td>{{ taxon.occurrenceIDs.length }}</td>

      <td>
        {{ dateToString(taxonOccurrenceStatistics[taxon.taxonID].minDate) }}
      </td>
      <td>
        {{ dateToString(taxonOccurrenceStatistics[taxon.taxonID].maxDate) }}
      </td>
    </tr>
  </TableBase>
</template>

<script>
import state from "@/state.js";

import { dateToString } from "@/helpers.js";
import TableBase from "../TableBase.vue";

export default {
  name: "TableTaxaList",
  components: { TableBase },
  props: {
    reportID: String,
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      taxonReference: state.taxonReference["germansl"],
    };
  },
  computed: {
    sortedTaxonOccurrenceDataArray() {
      let taxonOccurrenceData =
        state.reportData[this.reportID].taxonOccurrenceData;
      let taxonOccurrenceDataArray = [];
      // convert to array of objects for sorting
      Object.entries(taxonOccurrenceData).forEach(([taxonID, taxonData]) => {
        taxonOccurrenceDataArray.push({
          taxonID: taxonID,
          ...taxonData,
        });
      });

      taxonOccurrenceDataArray = taxonOccurrenceDataArray.filter(
        (taxon) => this.taxonReference[taxon.taxonID].taxonGroup !== "S"
      );

      //sort alphabetically by taxon name
      taxonOccurrenceDataArray.sort((a, b) =>
        this.taxonReference[a.taxonID].scientificName.localeCompare(
          this.taxonReference[b.taxonID].scientificName
        )
      );
      return taxonOccurrenceDataArray;
    },
    taxonOccurrenceStatistics() {
      return state.reportData[this.reportID].taxonOccurrenceStatistics;
    },
    taxonSpecificEllenberg() {
      return state.taxonSpecific["ellenberg"];
    },
    taxonSpecificRedList() {
      return state.taxonSpecific["rotelistemv"];
    },
  },
  methods: {
    dateToString: (date) => dateToString(date),
  },
};
</script>
