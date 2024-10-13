import type { Reactive } from "vue";
import type { IdKeyedObject } from "~/types/common";

export const useOccurrenceStore = defineStore("occurrences", () => {
  const occurrences: Reactive<IdKeyedObject<IdKeyedObject>> = reactive({});

  return { occurrences };
});
