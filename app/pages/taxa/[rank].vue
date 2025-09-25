<script setup lang="ts">
import { rankMap } from "~/utils/maps";

const route = useRoute();

useHeadSafe({
  title: mapRank((route.params.rank as string).toUpperCase()),
});

const filter = computed(() => {
  const routeRankPair = rankMap.find(
    (rankPair) => rankPair[0].toLowerCase() === route.params.rank
  );
  return routeRankPair
    ? {
        taxonRank: routeRankPair[0],
      }
    : undefined;
});
</script>

<template>
  <TableTaxaListAll :filter="filter" />
</template>
