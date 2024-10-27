<script setup lang="ts">
const plugins = usePluginStore();
const reports = useReportStore();

const plugin = computed(() => plugins.routeToPlugin);
const statistics = computed(
  () => reports.activeReport.taxonSpecificStatistics[plugin.value.name]
);
</script>

<template>
  <template v-if="plugin && getScalesOfMeasure(plugin).includes('ordinal')">
    <PlotBox
      :reportID="reports.activeID"
      :plugin="plugin"
      :pluginStatistics="statistics"
    />
  </template>
</template>
