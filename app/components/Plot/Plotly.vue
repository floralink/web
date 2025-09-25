<script setup lang="ts">
import Plotly from "plotly.js-dist";
import plotlyLocale from "plotly.js-locales/de";

Plotly.register(plotlyLocale);
Plotly.setPlotConfig({ locale: "de" });

const props = defineProps<{
  data: object;
  layout: object;
  filename: string;
}>();

const thisPlot = ref(null);

onMounted(() => {
  watchEffect(() => {
    Plotly.newPlot(unref(thisPlot), props.data, props.layout, {
      responsive: true,
      displaylogo: false,
      modeBarButtonsToRemove: ["toImage", "lasso2d", "select2d"],
      locale: "de",
    });
  });
});

function downloadPlot() {
  Plotly.downloadImage(unref(thisPlot), {
    format: "svg",
    filename: `floralink-${props.filename}`,
  });
}
</script>

<template>
  <div class="border rounded-xl border-gray-800 flex justify-center relative">
    <div>
      <UTooltip
        class="ml-2 absolute top-6 right-6 z-10"
        text="Dieses Diagramm als Vektorgrafik (.svg) herunterladen."
      >
        <UButton
          icon="i-heroicons-arrow-down-tray"
          label="SVG"
          @click="downloadPlot()"
        />
      </UTooltip>

      <div ref="thisPlot" class="plot"></div>
    </div>
  </div>
</template>
