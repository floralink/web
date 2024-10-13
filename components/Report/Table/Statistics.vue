<template>
  <TableBase
    title="Allgemeine Kenngrößen"
    description="Kenngrößen der Abfrageergebnisse für das Untersuchungsgebiet im Zeitraum"
    :filename="`report-${reportID}-occurrencestatistics`"
  >
    <tr>
      <th>Anzahl der Einzelerfassungen</th>
      <td>{{ occurrenceStatistics.total }}</td>
    </tr>
    <tr>
      <th>Anzahl der verschiedenen Taxa</th>
      <td>{{ occurrenceStatistics.uniqueTaxaCount }}</td>
    </tr>
    <tr>
      <th>Erste Erfassung</th>
      <td>{{ dateToString(occurrenceStatistics.minDate) }}</td>
    </tr>
    <tr>
      <th>Letzte Erfassung</th>
      <td>{{ dateToString(occurrenceStatistics.maxDate) }}</td>
    </tr>
  </TableBase>
</template>

<script setup lang="ts">
const props = defineProps<{ reportID: string }>();
const reports = useReportStore();
const occurrenceStatistics =
  reports.reports[props.reportID].occurrenceStatistics;
</script>
