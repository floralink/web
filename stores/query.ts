import type { Area, TimePeriod } from "~/types/Query";

export const useQueryStore = defineStore("query", () => {
  const areas: Ref<Area[]> = ref([
    {
      id: 0,
      areaFormat: "mtb",
      areaValue: "2539/1",
    },
  ]);
  const periods: Ref<TimePeriod[]> = ref([
    {
      id: 0,
      from: "2000",
      to: "2009",
    },
  ]);

  const areaCount = computed(() => areas.value.length);
  const periodCount = computed(() => periods.value.length);

  return { areas, periods, areaCount, periodCount };
});
