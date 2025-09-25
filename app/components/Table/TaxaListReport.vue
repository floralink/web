<script setup lang="ts">
const props = defineProps<{
  taxonOccurrenceData: object;
  taxonOccurrenceStatistics: object;
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
    key: "taxonRank",
    label: "Rang",
  },
  {
    key: "count",
    label: "Erfassungen",
    sortable: true,
  },
  {
    key: "first",
    label: "Erste Erfassung",
  },
  {
    key: "last",
    label: "Letzte Erfassung",
  },
];

const taxonReference = useTaxonStore().taxonReference["germansl"];

const rows = computed(() => {
  let taxonOccurrenceDataArray = [];

  // convert to array of objects for sorting
  Object.entries(props.taxonOccurrenceData).forEach(([taxonID, taxonData]) => {
    // filter out taxa not matching the specified criteria
    if (
      props.filter &&
      !Object.entries(props.filter).every(([filterKey, filterValue]) => {
        return taxonReference[taxonID][filterKey] === filterValue;
      })
    )
      return;

    // push taxon array for each indexed object
    taxonOccurrenceDataArray.push({
      taxonID,
      scientificName: taxonReference[taxonID].scientificName,
      vernacularName: taxonReference[taxonID].vernacularNames[0].name,
      // taxonGroup: mapGroup(taxonReference[taxonID].taxonGroup),
      taxonRank: mapRank(taxonReference[taxonID].taxonRank),
      count: taxonData.occurrenceIDs.length,
      first: dateToString(props.taxonOccurrenceStatistics[taxonID].minDate),
      last: dateToString(props.taxonOccurrenceStatistics[taxonID].maxDate),
    });
  });

  // //sort alphabetically by taxon name
  // taxonOccurrenceDataArray.sort((a, b) =>
  //   a.scientificName.localeCompare(b.scientificName)
  // );

  return taxonOccurrenceDataArray;
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
