<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    categories: string[];
    frequencies: { [key: string]: number };
    title: string;
    description: string;
    color: string;
    filename: string;
  }>(),
  {
    title: "Absolute Häufigkeiten",
    description: "",
    color: "#89c15a",
    filename: "plot-frequency",
  }
);

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

const plotData = computed(() => [
  {
    x: props.categories,
    y: props.categories.map((key) => props.frequencies[key] || 0),
    type: "bar",
  },
]);
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
