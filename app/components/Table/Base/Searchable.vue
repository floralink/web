<script setup lang="ts">
const props = defineProps<{
  columns: any[] | undefined;
  rows:
    | {
        [key: string]: any;
      }[]
    | undefined;
  searchInProperties?: string[];
  sort?:
    | {
        column: string;
        direction: "asc" | "desc";
      }
    | undefined;
}>();

const boldColumnKey = props.columns[0].key;
const boldColumnSlot = boldColumnKey + "-data";

const searchTerm = ref("");
const filteredRows = computed(() => {
  if (!searchTerm.value) {
    return props.rows;
  }

  if (!props.rows) return [];
  else if (props.searchInProperties && props.searchInProperties.length > 0) {
    return props.rows.filter((row) => {
      return props.searchInProperties.some((property) => {
        return row[property]
          .toString()
          .toLowerCase()
          .includes(searchTerm.value.toLowerCase());
      });
    });
  } else {
    return props.rows.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.value.toLowerCase())
      )
    );
  }
});
</script>

<template>
  <div class="flex">
    <UInput
      v-model="searchTerm"
      class="m-1 mb-2 w-full"
      placeholder="Durchsuchen..."
      icon="i-heroicons-magnifying-glass"
    />

    <UPopover class="ml-2 self-center -mt-2" mode="hover">
      <p class="flex gap-2 text-gray-400 mt-2">
        <UIcon
          class="h-6 -mb-[0.4rem]"
          name="i-heroicons-question-mark-circle"
        />
        Quellen
      </p>

      <template #panel>
        <div class="p-6 max-w-96">
          <SourcesTaxa />
        </div>
      </template>
    </UPopover>
  </div>

  <UTable
    :ui="{ thead: 'sticky top-0 bg-gray-200 dark:bg-gray-800' }"
    :columns="columns"
    :rows="filteredRows"
    :sort="sort"
  >
    <template #[boldColumnSlot]="{ row }">
      <b>{{ row[boldColumnKey] }}</b>
    </template>

    <template #empty-state>
      <div class="flex flex-col items-center justify-center py-14 gap-3">
        <UIcon name="i-heroicons-x-circle" class="w-6 h-6" />
        <p>Keine passenden Einträge gefunden.</p>
      </div>
    </template>
  </UTable>
</template>

<style scoped>
/* This for breaking words in tables, here specifically the third column where the long description sits in TableLegend */
:deep(td.whitespace-nowrap) {
  white-space: unset;
}
</style>
