<script setup lang="ts">
const props = defineProps<{ occurrenceStatistics: object; mct: string }>();

const statisticsCards = computed(() => [
  {
    title: "Anzahl der Einzelerfassungen",
    value: props.occurrenceStatistics.total,
  },
  {
    title: "Anzahl der verschiedenen Taxa",
    value: props.occurrenceStatistics.uniqueTaxaCount,
  },
  {
    title: "Erste Erfassung",
    value: dateToString(props.occurrenceStatistics.minDate),
  },
  {
    title: "Letzte Erfassung",
    value: dateToString(props.occurrenceStatistics.maxDate),
  },
  {
    title: "Meist erfasstes Taxon",
    value: props.mct.scientificName,
    subvalue: props.mct.occurrencesCount + " Erfassungen",
  },
]);
</script>

<template>
  <CardGrid :cards="statisticsCards" />
</template>
