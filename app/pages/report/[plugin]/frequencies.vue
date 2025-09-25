<script setup lang="ts">
const plugins = usePluginStore();
const reports = useReportStore();
</script>

<template>
  <PlotFrequencyBarMultiple
    :reportID="reports.activeID"
    :plugin="plugins.routeToPlugin"
    :pluginStatistics="
      reports.activeReport.taxonSpecificStatistics[plugins.routeToPlugin.name]
    "
  />
</template>
