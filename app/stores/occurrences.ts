import type { Reactive } from "vue";

export const useOccurrenceStore = defineStore("occurrences", () => {
  const occurrences: Reactive<IdKeyedObject<IdKeyedObject>> = reactive({});

  return { occurrences };
});
