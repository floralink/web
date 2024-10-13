import type { Reactive } from "vue";
import type { IdKeyedObject } from "~/types/common";

export const useTaxonStore = defineStore("taxa", () => {
  const taxonReference: Reactive<IdKeyedObject<IdKeyedObject>> = reactive({});
  const taxonSpecific: Reactive<IdKeyedObject<IdKeyedObject>> = reactive({});

  return { taxonReference, taxonSpecific };
});
