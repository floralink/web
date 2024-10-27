<script setup lang="ts">
const reports = useReportStore();

definePageMeta({
  layout: "navigation",
});
</script>

<template>
  <div v-if="reports.activeReport" class="flex flex-col overflow-auto">
    <NuxtPage />
  </div>
</template>
