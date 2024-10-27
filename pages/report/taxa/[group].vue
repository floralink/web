<script setup lang="ts">
const reports = useReportStore();
const route = useRoute();

const filterRoutes = {
  algae: { taxonGroup: "A" },
  lichens: { taxonGroup: "F" },
  mosses: { taxonGroup: "M" },
  pteridophyta: { taxonGroup: "P" },
  spermatophyta: { taxonGroup: "S" },
};

const filter = computed(() => filterRoutes[route.params.group as string]);
</script>

<template>
  <TableTaxaListReport
    :taxon-occurrence-data="reports.activeReport.taxonOccurrenceData"
    :taxon-occurrence-statistics="
      reports.activeReport.taxonOccurrenceStatistics
    "
    :filter="filter"
  />
</template>
