<script setup lang="ts">
import { germanslDB } from "@floralink/databases";

const route = useRoute();
const taxa = useTaxonStore();
const plugins = usePluginStore();

const taxonID = computed(() => route.params.taxonID as string);
const taxonReference = computed(() => germanslDB.data[taxonID.value]);

const taxonUpHierarchy = computed(() => {
  let hierarchy = [taxonReference.value];
  let done = false;

  while (!done) {
    const childTaxonOfHighest = hierarchy[0].childTaxonOf;
    if (childTaxonOfHighest && childTaxonOfHighest.id != "0") {
      hierarchy.unshift(germanslDB.data[childTaxonOfHighest.id]);
    } else done = true;
  }

  return hierarchy;
});

const taxonUpHierarchyColumns = [
  {
    key: "taxonRank",
    label: "Rang",
  },
  {
    key: "scientificName",
    label: "Wissenschaftlicher Name",
  },
  {
    key: "vernacularName",
    label: "Deutscher Name",
  },
];

const taxonUpHierarchyRows = computed(() => {
  return taxonUpHierarchy.value.map((taxon) => {
    return {
      taxonID: taxon.id,
      scientificName: taxon.scientificName,
      vernacularName: taxon.vernacularNames[0].name,
      taxonRank: mapRank(taxon.taxonRank),
    };
  });
});

function getPluginCards(plugin: object) {
  return Object.values(plugin.properties).map((property) => {
    const value =
      taxa.taxonSpecific[plugin.name]?.[taxonID.value][property.dataKey];
    return {
      title: property.title,
      value: Array.isArray(value) ? value.join(", ") : value || "k.A.",
    };
  });
}
</script>

<template>
  <div class="text-center">
    <UBadge variant="outline" :label="mapRank(taxonReference.taxonRank)" />
    <h1 class="border-0 pb-0 mb-0 mt-1">{{ taxonReference.scientificName }}</h1>
    <h2 class="mt-0 text-gray-600 dark:text-gray-400">
      {{ taxonReference.vernacularNames[0].name }}
    </h2>
  </div>

  <UDivider class="mt-8" />

  <h2>Taxonomie</h2>

  <h3>Aüßere Systematik</h3>

  <TableBaseStickyHeader
    :rows="taxonUpHierarchyRows"
    :columns="taxonUpHierarchyColumns"
  />

  <h2>Taxonspezifische Daten</h2>

  <template
    v-for="plugin in Object.values(plugins.taxonSpecificPlugins)"
    :key="plugin.name"
  >
    <h3 class="my-5 font-semibold">{{ plugin.title }}</h3>
    <CardGrid :cards="getPluginCards(plugin)" />
  </template>
</template>
