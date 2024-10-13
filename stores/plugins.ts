import type { Reactive } from "vue";
import type { IdKeyedObject } from "~/types/common";

export const usePluginStore = defineStore("plugins", () => {
  const taxonReferencePlugins: Reactive<IdKeyedObject> = reactive({});
  const taxonSpecificPlugins: Reactive<IdKeyedObject> = reactive({});

  return { taxonReferencePlugins, taxonSpecificPlugins };
});
