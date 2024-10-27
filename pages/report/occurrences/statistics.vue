<script setup lang="ts">
const reports = useReportStore();
const taxa = useTaxonStore();

const mostCommonTaxon = computed(() => {
  const mostCommonTaxonEntry = Object.entries(
    reports.activeReport.taxonOccurrenceData
  ).reduce((prev, current) => {
    return prev[1].occurrenceIDs.length > current[1].occurrenceIDs.length
      ? prev
      : current;
  });
  const mostCommonTaxonScientificName =
    taxa.taxonReference["germansl"][mostCommonTaxonEntry[0]].scientificName;
  return {
    scientificName: mostCommonTaxonScientificName,
    occurrencesCount: mostCommonTaxonEntry[1].occurrenceIDs.length,
  };
});
</script>

<template>
  <h2>Abfrageinfos</h2>
  <TableQueryInfo
    class="mt-6 mb-8"
    :query="reports.activeReport.occurrenceDataQuery"
  />

  <h2>Statistiken</h2>
  <TableStatistics
    class="mt-6 mb-8"
    :occurrence-statistics="reports.activeReport.occurrenceStatistics"
    :mct="mostCommonTaxon"
  />
</template>
