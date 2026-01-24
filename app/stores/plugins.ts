import type { Reactive } from "vue";

import {
  germansl,
  ellenberg,
  fukarekhenker,
  rotelistemv,
} from "@floralink/plugins";

export const usePluginStore = defineStore("plugins", () => {
  const taxonReferencePlugins: Reactive<IdKeyedObject> = reactive({ germansl });
  const taxonSpecificPlugins: Reactive<IdKeyedObject> = reactive({
    ellenberg,
    rotelistemv,
    fukarekhenker,
  });

  const route = useRoute();
  const routeToPlugin = computed(
    () => taxonSpecificPlugins[route.params.plugin as string],
  );

  return { taxonReferencePlugins, taxonSpecificPlugins, routeToPlugin };
});
