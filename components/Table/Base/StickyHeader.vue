<script setup lang="ts">
// import { UTable } from "#build/components";
// type MyComponentProps = InstanceType<typeof UTable>["$props"];
// defineProps<MyComponentProps>();

defineProps<{
  columns: any[] | undefined;
  rows:
    | {
        [key: string]: any;
      }[]
    | undefined;
  sort?:
    | {
        column: string;
        direction: "asc" | "desc";
      }
    | undefined;
}>();
</script>

<template>
  <UTable
    v-bind="$props"
    :ui="{ thead: 'sticky top-0 bg-gray-100 dark:bg-gray-800' }"
  >
    <!-- The following was trying to pass down slots to UTable -->

    <!-- <template v-for="slot in Object.keys($slots)">
      <template #[slot]> </template>
    </template>
    <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" /> -->

    <!-- in a utils/ file: export declare namespace FloralinkHelpers {
            type UTableProps = InstanceType<typeof UTable>["$props"];
    } -->

    <template #n-header>
      Ordinale Werte
      <UPopover class="ml-2 inline-block align-bottom" mode="hover">
        <UIcon name="i-heroicons-question-mark-circle" />

        <template #panel>
          <div class="p-3 max-w-96 font-normal">
            <p>
              In die Berechnung des Medians und des Interquartilsabstandes
              fließen nur ordinalskalierte Werte ein. Nicht-ordinale
              Ausprägungen - etwa 'indifferentes Verhalten' oder 'keine Angabe'
              - werden nicht berücksichtigt.
            </p>
          </div>
        </template>
      </UPopover>
    </template>
  </UTable>
</template>

<style scoped>
/* This for breaking words in tables, here specifically the third column where the long description sits in TableLegend */
:deep(td.whitespace-nowrap) {
  white-space: unset;
}
</style>
