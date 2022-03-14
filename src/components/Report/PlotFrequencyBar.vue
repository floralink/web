<template>
  <PlotBase
    :data="plotData"
    :layout="plotLayout"
    :title="title"
    :description="description"
    :filename="filename"
  />
</template>

<script>
import PlotBase from "./PlotBase.vue";

export default {
  name: "PlotFrequencyBar",
  components: {
    PlotBase,
  },
  props: {
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
      default: "#1f77b4",
    },
    filename: {
      type: String,
      default: "plot-frequency",
    },
  },
  data() {
    return {
      plotData: [],
      plotLayout: {
        title: this.title,
        yaxis: {
          fixedrange: true,
          gridcolor: "#444",
          title: "Absolute Häufigkeit",
        },
        xaxis: { fixedrange: true, type: "category" },
        colorway: [this.color],
      },
    };
  },
  created() {
    var trace = [];

    var barPlotX = [];
    var barPlotY = [];

    this.categories.forEach((possibleValue) => {
      barPlotX.push(possibleValue);
      barPlotY.push(this.frequencies[possibleValue] || 0);
    });

    trace.push({
      x: barPlotX,
      y: barPlotY,
      type: "bar",
    });

    this.plotData = trace;
  },
};
</script>
