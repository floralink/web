<script setup lang="ts">
const props = defineProps<{
  pluginStatistics: any;
  plugin: any;
}>();

const filterExtraOrdinalProperties = ref(true);

const tabs = computed(() =>
  Object.values(props.plugin.properties).map((property) => {
    const extraOrdinalPropertyKeys: string[] = [];
    const ordinalOrAllNominalPropertyKeys: string[] = [];

    if (property.possibleValues)
      Object.entries(property.possibleValues).forEach(([key, pv]) => {
        if (pv.extraOrdinal) extraOrdinalPropertyKeys.push(key);
        else ordinalOrAllNominalPropertyKeys.push(key);
      });
    // else ordinalOrAllNominalPropertyKeys = property.enum;

    const frequencies =
      props.pluginStatistics[property.dataKey].statistics.frequencies;

    return {
      label: property.title,
      content: property,
      property: property,
      frequencies,
      extraOrdinalPropertyKeys,
      ordinalOrAllNominalPropertyKeys,
    };
  })
);
</script>

<template>
  <UTabs :items="tabs">
    <template #item="{ item }">
      <div class="relative">
        <div
          v-if="item.extraOrdinalPropertyKeys.length > 0"
          class="absolute top-6 left-6 z-10 flex gap-2 items-center"
        >
          <UToggle v-model="filterExtraOrdinalProperties" />
          <p class="text-sm">Nominale Werte ausblenden</p>
        </div>
        <PlotFrequencyBar
          class="w-full"
          :key="item.property.title"
          :title="item.property.title"
          :description="`Absolute Häufigkeiten: ${plugin.title}: ${item.property.title} für die vorkommenden Taxa (${plugin.sources.primary.citationShort}, nach ${plugin.sources.secondary.citationShort})`"
          :filename="`${plugin.name}-spectrum-${item.property.titleShort}`"
          :categories="
            filterExtraOrdinalProperties
              ? item.ordinalOrAllNominalPropertyKeys.length > 0
                ? item.ordinalOrAllNominalPropertyKeys
                : item.property.enum
              : item.property.enum
          "
          :frequencies="item.frequencies"
        />
      </div>
    </template>
  </UTabs>
</template>
