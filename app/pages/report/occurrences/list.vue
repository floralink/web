<script setup lang="ts">
const reports = useReportStore();
const occurrences = useOccurrenceStore();
const taxa = useTaxonStore();

const rows = computed(() => {
  // convert to array of objects for sorting
  return reports.activeOccurrenceIDs
    .map((occurrenceID) => {
      const occurrence = occurrences.occurrences["werbeo"][occurrenceID];
      return {
        taxon:
          taxa.taxonReference["germansl"][occurrence.taxonID].scientificName,
        date: dateToString(occurrence.date),
        vagueDate: occurrence.date,
      };
    })
    .sort((a, b) => a.vagueDate.from.localeCompare(b.vagueDate.from));
});

const columns = [
  {
    key: "taxon",
    label: "Taxon",
  },
  {
    key: "date",
    label: "Datum",
  },
];
</script>

<template>
  <TableBaseSearchable :columns="columns" :rows="rows" />
</template>
