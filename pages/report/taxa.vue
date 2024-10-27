<script setup lang="ts">
useHead({ title: "Taxonliste" });

const reports = useReportStore();
const taxonReference = useTaxonStore().taxonReference["germansl"];

const counts = computed(() => {
  let counts: { [key: string]: number } = {};
  Object.keys(groupFilters).forEach((group) => {
    counts[group] = 0;
  });

  Object.entries(reports.activeReport.taxonOccurrenceData).forEach(
    ([taxonID, taxonData]) => {
      Object.entries(groupFilters).forEach(([group, filter]) => {
        if (
          Object.entries(filter).every(([filterKey, filterValue]) => {
            return taxonReference[taxonID][filterKey] === filterValue;
          })
        )
          counts[group]++;
      });
    }
  );

  return counts;
});

const groups = [
  {
    key: "spermatophyta",
    title: "Samenpflanzen",
  },
  {
    key: "pteridophyta",
    title: "Gefäßsporenpflanzen",
  },
  {
    key: "mosses",
    title: "Moose",
  },
  {
    key: "lichens",
    title: "Flechten",
  },
  {
    key: "algae",
    title: "Algen",
  },
];

const links = computed(() =>
  groups
    .filter((group) => counts.value[group.key] > 0)
    .map((group) => {
      return {
        label: group.title,
        to: `/report/taxa/${group.key}`,
        badge: counts.value[group.key],
      };
    })
);
</script>

<template>
  <div class="flex flex-col overflow-auto">
    <UHorizontalNavigation :links="links" class="mb-6" />
    <div class="flex flex-col overflow-auto">
      <NuxtPage />
    </div>
  </div>
</template>
