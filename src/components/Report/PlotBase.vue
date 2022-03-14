<template>
  <div class="plot-wrapper">
    <div ref="thisPlot" class="plot"></div>
    <div v-if="description !== '' || download" class="description">
      {{ description }}
      <InfoToolTip
        v-if="download === true"
        type="download"
        text="Dieses Diagramm als Vektorgrafik (.svg) herunterladen."
        @click="downloadPlot()"
      />
    </div>
  </div>
</template>

<script>
import Plotly from "plotly.js/dist/plotly";
import plotlyLocale from "plotly.js-locales/de";
import InfoToolTip from "../InfoToolTip.vue";

Plotly.register(plotlyLocale);

export default {
  name: "PlotBase",
  components: { InfoToolTip },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    layout: {
      type: Object,
      default: () => {},
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    download: {
      type: Boolean,
      default: true,
    },
    filename: {
      type: String,
      default: "plot", // required when download true
    },
    // todo: allow options and describe default -> replace defaults with actually set data
  },
  mounted() {
    const options = {
      responsive: true,
      displaylogo: false,
      modeBarButtonsToRemove: ["toImage", "lasso2d", "select2d"],
      locale: "de",
    };
    Plotly.newPlot(
      this.$refs.thisPlot,
      this.data,
      {
        title: this.title,
        font: { color: "#fff", family: "'Source Sans Pro', sans-serif" },
        paper_bgcolor: "#333333",
        plot_bgcolor: "#272727",
        ...this.layout,
      },
      options
    );
  },
  methods: {
    downloadPlot() {
      Plotly.downloadImage(this.$refs.thisPlot, {
        format: "svg",
        filename: `floralink-${this.filename}`,
      });
    },
  },
};
</script>

<style scoped>
.plot-wrapper {
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
}

.description {
  padding: 10px;
  text-align: left;
  background-color: var(--grey4);
}
</style>
