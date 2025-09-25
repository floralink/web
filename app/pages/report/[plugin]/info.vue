<script setup lang="ts">
const plugins = usePluginStore();
const plugin = computed(() => plugins.routeToPlugin);
const sourceCount = computed(() => Object.keys(plugin.value.sources).length);
</script>

<template>
  <h2>{{ plugin.title }}</h2>
  <p class="text-gray-400">{{ plugin.description }}</p>
  <SourcesAlert :sources="plugin.sources" />
</template>
