<script setup lang="ts">
const reports = useReportStore();
const activeID = toRef(reports, "activeID");

const reportSelection = computed(() =>
  Object.keys(reports.reports)
    .map((reportID) => {
      let query = reports.reports[reportID].occurrenceDataQuery;

      let labelInfo = [];

      if (query.area.areaValue) labelInfo.push("MTB " + query.area.areaValue);
      if (query.period.from)
        labelInfo.push("von " + query.period.from.substr(0, 4));
      if (query.period.to)
        labelInfo.push("bis " + query.period.to.substr(0, 4));

      return {
        id: reportID,
        icon: "i-heroicons-document",
        label: labelInfo.join(" "),
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label))
);

const selected = ref(
  reportSelection.value.find((r) => r.id === activeID.value)
);

watch(activeID, (id) => {
  selected.value = reportSelection.value.find((r) => r.id === id);
});

watch(selected, () => {
  activeID.value = selected.value?.id;
});
</script>

<template>
  <USelectMenu class="py-1" v-model="selected" :options="reportSelection">
  </USelectMenu>
</template>
