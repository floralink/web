<template>
  <TableBase
    title="Abfragekriterien"
    description="Kriterien und Metadaten der Abfrage"
    filename="query"
  >
    <tr>
      <th v-if="query.area.areaFormat === 'mtb'">TK 25 (MTB)</th>
      <th v-else-if="query.area.areaFormat === 'wkt'">WKT-Shape</th>
      <td>{{ query.area.areaValue }}</td>
    </tr>
    <tr>
      <th>Zeitraum</th>
      <td>{{ dateToString(query.period) }}</td>
    </tr>
    <tr>
      <th>Erfassungsart</th>
      <td>Floristische Kartierung</td>
    </tr>
    <tr>
      <th>Datenquelle</th>
      <td>{{ occurrenceDataPlugins[query.dataProviderID].title }}</td>
    </tr>
    <tr>
      <th>Stand der Abfrage</th>
      <td>{{ new Date(query.creationDate).toLocaleString() }}</td>
    </tr>
  </TableBase>
</template>

<script>
import { dateToString } from "../../helpers.js";
import state from "../../state.js";

export default {
  props: {
    report: Object,
    reportID: String,
  },
  data() {
    return {
      query: state.reportData[this.reportID].occurrenceDataQuery,
      occurrenceDataPlugins: state.occurrenceDataPlugins,
    };
  },
  methods: {
    dateToString: (date) => dateToString(date),
  },
};
</script>
