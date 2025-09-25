<script setup lang="ts">
useHead({ title: "Erfassungen" });

const links = computed(() => [
  [
    {
      icon: "i-heroicons-chart-pie",
      label: "Infos und Statistiken",
      to: "/report/occurrences/statistics",
    },
  ],
  [
    // {
    //   icon: "i-heroicons-information-circle",
    //   label: "Abfrageinfos",
    //   to: "/report/occurrences/queryinfo",
    // },
    {
      icon: "i-heroicons-list-bullet",
      label: "Liste",
      to: "/report/occurrences/list",
    },
  ],
]);
</script>

<template>
  <div class="flex flex-col overflow-auto">
    <UHorizontalNavigation :links="links" class="mb-6" />

    <div class="flex flex-col overflow-auto">
      <NuxtPage />
    </div>
  </div>
</template>
