<script setup lang="ts">
const plugins = usePluginStore();
</script>

<template>
  <TableLegend :plugin="plugins.routeToPlugin" />
</template>
