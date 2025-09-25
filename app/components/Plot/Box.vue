<script setup lang="ts">
const props = defineProps<{ plugin: object; pluginStatistics: object }>();

const plotLayout = {
  yaxis: {
    fixedrange: true,
    range: [0, 9], // TODO: define plugin-specific; this is only useful for ellenberg
    gridcolor: "#444",
    gridwidth: 1,
    ticks: "outside",
    dtick: 1,
  },
  xaxis: { fixedrange: true, ticks: "outside" },
  colorway: [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
  ],
};

const plotData = computed(() => {
  let populated: {
    name: string;
    y: number[];
    type: "box";
  }[] = [];

  Object.entries(props.plugin.properties).forEach(([propertyKey, property]) => {
    if (property.scaleOfMeasure === "ordinal") {
      populated.push({
        name: property.titleShort,
        y: props.pluginStatistics[propertyKey].statistics.ordinalValues,
        type: "box",
      });
    }
  });

  return populated;
});
</script>

<template>
  <PlotBase
    :title="`${plugin.title}`"
    :description="`Box-Plots: ${plugin.title} für die vorkommenden Taxa (${plugin.sources.primary.citationShort}, nach ${plugin.sources.secondary.citationShort})`"
    :filename="`${plugin.name}-boxplots`"
    :data="plotData"
    :layout="plotLayout"
  />
</template>
