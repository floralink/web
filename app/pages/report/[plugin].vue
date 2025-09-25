<script setup lang="ts">
const route = useRoute();
const plugins = usePluginStore();

useHeadSafe({ title: plugins.routeToPlugin?.title });

const ordinal = computed(() =>
  plugins.routeToPlugin
    ? getScalesOfMeasure(plugins.routeToPlugin).includes("ordinal")
    : false
);

const statisticsLinks = computed(() => {
  let links = [];

  if (ordinal.value) {
    links.push({
      label: "Statistische Kenngrößen",
      icon: "i-heroicons-calculator",
      to: `/report/${route.params.plugin}/indicators`,
    });
    links.push({
      label: "Boxplots",
      icon: "i-heroicons-rectangle-group",
      to: `/report/${route.params.plugin}/boxplots`,
    });
  }

  links.push({
    label: "Häufigkeitsverteilung",
    icon: "i-heroicons-chart-bar-square",
    to: `/report/${route.params.plugin}/frequencies`,
  });

  return links;
});

const infoLinks = computed(() => {
  let links = [];

  if (
    plugins.routeToPlugin &&
    Object.values(plugins.routeToPlugin.properties || []).some(
      (property) =>
        property?.description || property?.possibleValues || "Eigenschaft"
    )
  )
    links.push({
      label: "Legende",
      icon: "i-heroicons-book-open",
      to: `/report/${route.params.plugin}/legend`,
    });

  links.push({
    label: "Info und Quellen",
    icon: "i-heroicons-information-circle",
    to: `/report/${route.params.plugin}/info`,
  });

  return links;
});
</script>

<template v-if="plugins.routeToPlugin">
  <UHorizontalNavigation
    :links="[statisticsLinks, infoLinks]"
    class="border-b border-gray-200 dark:border-gray-800 mb-6"
  />
  <div class="flex flex-col overflow-y-auto">
    <NuxtPage />
  </div>
</template>
