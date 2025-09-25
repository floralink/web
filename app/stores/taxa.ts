import type { Reactive } from "vue";

export const useTaxonStore = defineStore("taxa", () => {
  const taxonReference: Reactive<IdKeyedObject<IdKeyedObject>> = reactive({});
  const taxonSpecific: Reactive<IdKeyedObject<IdKeyedObject>> = reactive({});

  return { taxonReference, taxonSpecific };
});
