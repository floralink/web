<script setup lang="ts">
const plugins = usePluginStore();
const reports = useReportStore();

const columns = [
  {
    key: "property",
    label: "Eigenschaft",
  },
  {
    key: "mode",
    label: "Modalwert",
  },
  {
    key: "median",
    label: "Median",
  },
  {
    key: "interquartilerange",
    label: "Interquartilsabstand",
  },
  {
    key: "n",
    label: "Ordinale Werte",
  },
];

const rows = computed(() =>
  Object.values(plugins.routeToPlugin.properties)
    .filter((property) => property.scaleOfMeasure === "ordinal")
    .map((property) => {
      let pluginStatistics =
        reports.activeReport.taxonSpecificStatistics[
          plugins.routeToPlugin.name
        ];
      return {
        property: `${property.title} (${property.titleShort})`,
        mode:
          property.scaleOfMeasure === "ordinal"
            ? pluginStatistics[property.dataKey].statistics.mode.join(", ")
            : "-",
        median:
          property.scaleOfMeasure === "ordinal"
            ? pluginStatistics[property.dataKey].statistics.median.join(", ")
            : "-",
        interquartilerange:
          property.scaleOfMeasure === "ordinal"
            ? pluginStatistics[property.dataKey].statistics.quantile75 -
              pluginStatistics[property.dataKey].statistics.quantile25
            : "-",
        n:
          pluginStatistics[property.dataKey].statistics.ordinalValues.length +
          " von " +
          pluginStatistics[property.dataKey].values.length,
      };
    })
);
</script>

<template>
  <template
    v-if="getScalesOfMeasure(plugins.routeToPlugin).includes('ordinal')"
  >
    <TableBaseStickyHeader :rows="rows" :columns="columns">
    </TableBaseStickyHeader>
  </template>

  <UAlert
    v-else
    color="yellow"
    class="overflow-visible"
    variant="subtle"
    icon="i-heroicons-information-circle"
    title="Nicht unterstützt"
    description="Die statistischen Kennzahlen werden aktuell nur für Eigenschaften berechnet, die ordinalskaliert sind."
  />
</template>
