<template>
  <h3>Box-Plots</h3>
  <ReportPlotBase
    :title="`${plugin.title}`"
    :description="`Box-Plots: ${plugin.title} für die vorkommenden Taxa (${plugin.sources.primary.citationShort}, nach ${plugin.sources.secondary.citationShort})`"
    :filename="`report-${reportID}-${plugin.name}-boxplots`"
    :data="plotData"
    :layout="plotLayout"
  />
</template>

<script>
export default defineNuxtComponent({
  props: {
    reportID: String,
    plugin: {
      type: Object,
      required: true,
    },
    pluginStatistics: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      plotLayout: {
        yaxis: {
          fixedrange: true,
          range: [0, 9], // ellenberg specific!
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
      },
    };
  },
  computed: {
    plotData() {
      let populated = [];

      Object.entries(this.plugin.properties).forEach(
        ([propertyKey, property]) => {
          if (property.scaleOfMeasure === "ordinal") {
            populated.push({
              name: property.titleShort,
              y: this.pluginStatistics[propertyKey].statistics.ordinalValues,
              type: "box",
            });
          }
        }
      );

      return populated;
    },
  },
});
</script>
