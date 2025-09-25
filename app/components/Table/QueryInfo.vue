<script setup lang="ts">
const props = defineProps<{ query: object }>();

const statisticsCards = computed(() => [
  {
    title: "TK25-Quadrant",
    value: props.query.area.areaValue,
    subvalue:
      "Blattschnitt " +
      getTK25Label(parseTK25String(props.query.area.areaValue)),
  },
  {
    title: "Zeitraum",
    value: dateToString(props.query.period),
  },
  {
    title: "Datenquelle",
    value: "Flora-MV",
    subvalue: "via WerBeo-API",
  },
  {
    title: "Datenstand",
    value: new Date(props.query.creationDate).toLocaleString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    subvalue:
      new Date(props.query.creationDate).toLocaleString("de-DE", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }) + " Uhr",
  },
]);
</script>

<template>
  <CardGrid :cards="statisticsCards" />
</template>
