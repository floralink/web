import type { Reactive } from "vue";

export const useReportStore = defineStore("reports", () => {
  const reports: Reactive<IdKeyedObject> = reactive({});
  const activeID: Ref<string | undefined> = ref(undefined);

  const activeReport = computed(() =>
    activeID.value ? reports[activeID.value] : undefined
  );
  const activeQuery = computed(
    () => reports[activeID.value]?.occurrenceDataQuery
  );
  const activeTaxonCount = computed(() =>
    activeID.value && reports[activeID.value]
      ? reports[activeID.value].occurrenceStatistics.uniqueTaxaCount || 0
      : 0
  );

  const activeOccurrenceIDs = computed(() =>
    Object.values(activeReport.value.taxonOccurrenceData).reduce(
      (acc, taxonData) => acc.concat(taxonData.occurrenceIDs),
      [] as string[]
    )
  );

  return {
    reports,
    activeID,
    activeReport,
    activeQuery,
    activeTaxonCount,
    activeOccurrenceIDs,
  };
});
