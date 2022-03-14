<template>
  <h1>Quellen</h1>

  <template v-for="plugin in plugins" :key="plugin.name">
    <LayoutPanel :title="plugin.title">
      <InfoBox title="Primärquelle">
        {{ plugin.sources.primary.citation }}
      </InfoBox>
      <InfoBox v-if="plugin.sources.secondary" title="Sekundärquelle">
        {{ plugin.sources.secondary.citation }}
      </InfoBox>
      <InfoBox
        v-if="plugin.sources.description"
        title="Quelle der Beschreibung"
      >
        {{ plugin.sources.description.citation }}
      </InfoBox>
    </LayoutPanel>
  </template>

  <h1>Lizenzhinweise</h1>
</template>

<script>
import state from "../state.js";
import InfoBox from "../components/InfoBox.vue";
import LayoutPanel from "../components/LayoutPanel.vue";

export default {
  components: { InfoBox, LayoutPanel },
  data() {
    return {
      plugins: state.taxonSpecificPlugins,
    };
  },
};
</script>
