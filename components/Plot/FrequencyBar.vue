<script setup lang="ts">
const props = defineProps({
  categories: Array,
  // "categoriesExtra": {
  //   type: Array,
  //   default: () => ["x", "?"]
  // },
  frequencies: Object,
  title: {
    type: String,
    default: "Absolute Häufigkeiten der Kategorien",
  },
  description: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "#89c15a",
  },
  filename: {
    type: String,
    default: "plot-frequency",
  },
});

const plotLayout = computed(() => ({
  title: props.title,
  yaxis: {
    fixedrange: true,
    gridcolor: "#444",
    title: "Absolute Häufigkeit",
  },
  xaxis: { fixedrange: true, type: "category" },
  colorway: [props.color],
}));

const plotData = computed(() => {
  let trace = [];

  var barPlotX = [];
  var barPlotY = [];

  props.categories.forEach((possibleValue) => {
    barPlotX.push(possibleValue);
    barPlotY.push(props.frequencies[possibleValue] || 0);
  });

  trace.push({
    x: barPlotX,
    y: barPlotY,
    type: "bar",
  });

  return trace;
});
</script>

<template>
  <PlotBase
    :data="plotData"
    :layout="plotLayout"
    :title="title"
    :description="description"
    :filename="filename"
  />
</template>
