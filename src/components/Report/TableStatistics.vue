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

<script>
import state from "@/state";

import { dateToString } from "../../helpers.js";

export default {
  name: "TableStatistics",
  props: {
    reportID: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      occurrenceStatistics:
        state.reportData[this.reportID].occurrenceStatistics,
    };
  },
  methods: {
    dateToString: (date) => dateToString(date),
  },
};
</script>
