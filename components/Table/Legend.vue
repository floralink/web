<script setup lang="ts">
const props = defineProps<{
  plugin: any;
}>();

const tabs = computed(() =>
  Object.values(props.plugin.properties).map((property) => {
    return {
      label: property.title,
      property: property,
    };
  })
);
</script>

<template>
  <UTabs :items="tabs">
    <template #item="{ item }">
      <div class="pt-4 pb-4 pr-4">
        <h2 class="text-left">{{ item.property.title }}</h2>
        <p class="pb-4 text-gray-600 dark:text-gray-400">
          {{ item.property.description }}
        </p>
      </div>

      <TableBaseStickyHeader
        :columns="[
          {
            key: 'value',
            label: 'Wert',
          },
          {
            key: 'name',
            label: 'Name',
          },
          {
            key: 'description',
            label: 'Beschreibung',
          },
        ]"
        :rows="
          Object.entries(item.property.possibleValues).map(([k, v]) => {
            return {
              value: k,
              name: v.title,
              description: v.description,
            };
          })
        "
      />
    </template>
  </UTabs>
</template>
