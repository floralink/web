<script setup lang="ts">
const reports = useReportStore();
const plugins = usePluginStore();
const route = useRoute();

const floraxNav = computed(() => [
  {
    label: "Taxonliste",
    icon: "i-heroicons-list-bullet",
    // badge: Object.keys(germanslDB.data).length,
    badge: 25950,
    to: "/taxa/fam",
    active: route.path.startsWith("/taxa"),
  },
]);

const queryNav = [
  {
    label: "Neue Abfrage",
    icon: "i-heroicons-server",
    to: "/query",
  },
];

const reportGeneralNav = computed(() => [
  {
    label: "Erfassungen",
    icon: "i-heroicons-pencil-square",
    badge: reports.activeOccurrenceIDs?.length,
    to: "/report/occurrences/statistics",
    active: route.path.startsWith("/report/occurrences"),
  },
  {
    label: "Taxonliste",
    icon: "i-heroicons-list-bullet",
    badge: reports.activeTaxonCount,
    to: "/report/taxa/spermatophyta",
    active: route.path.startsWith("/report/taxa"),
  },
]);

const reportPluginNav = computed(() => {
  return Object.values(plugins.taxonSpecificPlugins).map((plugin) => {
    return {
      label: plugin.title,
      icon: getPluginIcon(plugin.name),
      to: `/report/${plugin.name}/${getScalesOfMeasure(plugin).includes("ordinal") ? "indicators" : "frequencies"}`,
      active: route.path.startsWith(`/report/${plugin.name}`),
    };
  });
});

const reportNav = computed(() => [
  reportGeneralNav.value,
  reportPluginNav.value,
  // [
  //   {
  //     label: "Import",
  //     icon: "i-heroicons-arrow-down-tray",
  //     to: `/report/import`,
  //   },
  //   {
  //     label: "Export",
  //     icon: "i-heroicons-arrow-up-tray",
  //     to: `/report/export`,
  //   },
  // ],
]);

const floralinkNav = [
  {
    label: "Über Floralink",
    icon: "i-heroicons-information-circle",
    to: "/floralink/about",
  },
  {
    label: "Impressum",
    icon: "i-heroicons-user-circle",
    to: "/floralink/imprint",
  },
];
</script>

<template>
  <div>
    <NuxtLayout name="base">
      <div
        class="h-full basis-1/4 min-w-72 overflow-y-auto bg-gray-50 border-r border-gray-200 dark:border-gray-800 dark:bg-[#191919] p-8"
      >
        <NavigationTitle title="Abfrage" />
        <UVerticalNavigation :links="queryNav" />

        <template v-if="reports.activeID">
          <NavigationTitle title="Bericht" />
          <ReportSelector class="mb-2" />
          <UVerticalNavigation :links="reportNav" />
        </template>

        <NavigationTitle title="Referenz" />
        <UVerticalNavigation :links="floraxNav" />

        <NavigationTitle title="Floralink" />
        <UVerticalNavigation :links="floralinkNav" />
      </div>

      <div class="h-full container p-6 pl-10 flex flex-col overflow-auto">
        <slot />
      </div>
    </NuxtLayout>
  </div>
</template>
