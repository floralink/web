<script setup lang="ts">
import { rankMap } from "~/utils/maps";
import { germanslDB } from "@floralink/databases";

definePageMeta({ layout: "navigation" });

const links = rankMap.map((rankPair) => ({
  label: rankPair[1] || rankPair[0],
  to: `/taxa/${rankPair[0].toLowerCase()}`,
  badge: Object.values(germanslDB.data).filter(
    (taxon) => taxon.taxonRank === rankPair[0]
  ).length,
}));
</script>

<template>
  <div class="flex flex-col overflow-auto">
    <UHorizontalNavigation
      class="mb-6"
      :links="links"
      :ui="{ container: 'flex-wrap' }"
    />

    <div class="flex flex-col overflow-auto">
      <NuxtPage />
    </div>
  </div>
</template>
