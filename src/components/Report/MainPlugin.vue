<template>
  <!-- <h2>{{ plugin.title }}</h2> -->

  <details>
    <summary>Erklärung und Legende für {{ plugin.title }}</summary>

    <InfoBox :title="plugin.title">
      {{ plugin.description }}

      <h3>Legende</h3>
      <TablePropertyLegend :plugin="plugin" />

      <InfoBox title="Literaturhinweise">
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
      </InfoBox>
    </InfoBox>
  </details>

  <InfoBox v-if="minimumTotalValues < 100" type="warning">
    Die Datenlage ist sehr klein! Nur für mindestens
    {{ minimumTotalValues }} Taxa wurden auch taxonspezifische Werte ({{
      plugin.title
    }}) gefunden.
  </InfoBox>

  <InfoBox v-if="activeFilters" title="Filter" type="important">
    Bevor die statistischen Größen berechnet werden, werden die Werte gefiltert!
    Folgende Filter sind aktiv:
    <ul>
      <li v-for="(filter, filterKey) in activeFilters" :key="filterKey">
        {{ filter.title }}
      </li>
    </ul>
  </InfoBox>

  <TablePluginStatistics
    :reportID="reportID"
    :plugin="plugin"
    :pluginStatistics="pluginStatistics"
    :scalesOfMeasure="scalesOfMeasure"
  />

  <template v-if="scalesOfMeasure.includes('ordinal')">
    <!-- CONVERT TO pluginStatistics -->
    <PlotEllenbergBox
      :reportID="reportID"
      :plugin="plugin"
      :pluginStatistics="pluginStatistics"
    />
  </template>

  <PlotFrequencyBarMultiple
    :reportID="reportID"
    :plugin="plugin"
    :pluginStatistics="pluginStatistics"
  />
</template>

<script>
// sub-components
import InfoBox from "../InfoBox.vue";
import TablePropertyLegend from "./TablePropertyLegend.vue";
import TablePluginStatistics from "./TablePluginStatistics.vue";
import PlotEllenbergBox from "./PlotBox.vue";
import PlotFrequencyBarMultiple from "./PlotFrequencyBarMultiple.vue";

export default {
  name: "MainPlugin",
  components: {
    InfoBox,
    TablePropertyLegend,
    TablePluginStatistics,
    PlotEllenbergBox,
    PlotFrequencyBarMultiple,
  },
  props: {
    reportID: {
      type: String,
      required: true,
    },
    plugin: {
      type: Object,
      required: true,
    },
    pluginStatistics: {
      type: Object,
      required: true,
    },
  },
  computed: {
    scalesOfMeasure() {
      let scales = [];
      Object.values(this.plugin.properties).forEach((property) => {
        if (!scales.includes(property.scaleOfMeasure))
          scales.push(property.scaleOfMeasure);
      });
      return scales;
    },
    activeFilters() {
      return this.plugin.filters;
    },
    minimumTotalValues() {
      let min = 1000;
      Object.values(this.pluginStatistics).forEach((fieldStatistics) => {
        if (fieldStatistics.values.length < min) {
          min = fieldStatistics.values.length;
        }
      });
      return min;
    },
  },
};
</script>

<style scoped>
h2 {
  padding: 10px;
  background-color: var(--grey3);
  border-bottom: 5px solid var(--grey1);
  font-size: 1.5em;
}
</style>
