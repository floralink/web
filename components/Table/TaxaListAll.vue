<script setup lang="ts">
import { germanslDB } from "@floralink/databases";

const props = defineProps<{
  filter?: { [filterKey: string]: string };
}>();

const columns = [
  {
    key: "scientificName",
    label: "Wissenschaftlicher Name",
    sortable: true,
  },
  {
    key: "vernacularName",
    label: "Deutscher Name",
  },
  {
    key: "parentScientificName",
    label: "Übergeordnetes Taxon",
  },
];

const rows = computed(() => {
  let rows = [];
  Object.values(germanslDB.data).forEach((taxon) => {
    // filter out taxa not matching the specified criteria
    if (
      !props.filter ||
      Object.entries(props.filter).every(([filterKey, filterValue]) => {
        return taxon[filterKey] === filterValue;
      })
    ) {
      rows.push({
        scientificName: taxon.scientificName,
        vernacularName: taxon.vernacularNames[0].name,
        parentScientificName: taxon.childTaxonOf?.id
          ? germanslDB.data[taxon.childTaxonOf.id]?.scientificName
          : "",
      });
    }
  });

  return rows;
});
</script>

<template>
  <TableBaseSearchable
    :columns="columns"
    :rows="rows"
    :sort="{
      column: 'scientificName',
      direction: 'asc',
    }"
    :search-in-properties="['vernacularName', 'scientificName']"
  />
</template>
