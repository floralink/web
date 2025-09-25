<script setup lang="ts">
const {
  data = {},
  layout = {},
  title = "",
  filename = "plot",
} = defineProps<{
  data: object;
  layout?: object;
  title?: string;
  filename?: string;
}>();

const isDark = useDark();

const _layout = computed(() => ({
  title: title,
  font: {
    color: isDark.value ? "#ffffff" : "#171717",
    family: "'DM Sans', sans-serif",
  },
  paper_bgcolor: isDark.value ? "#171717" : "#ffffff",
  plot_bgcolor: isDark.value ? "#171717" : "#ffffff",
  ...layout,
}));
</script>

<template>
  <PlotPlotly :data="data" :layout="_layout" :filename="filename" />
</template>
