import type { Reactive } from "vue";
import type { IdKeyedObject } from "~/types/common";

export const useReportStore = defineStore("reports", () => {
  const reports: Reactive<IdKeyedObject> = reactive({});
  const activeID: Ref<string | null> = ref(null);

  const activeQuery = computed(() =>
    activeID.value ? reports[activeID.value].occurrenceDataQuery : null
  );

  return { reports, activeID, activeQuery };
});
