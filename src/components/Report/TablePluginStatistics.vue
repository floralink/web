<template>
  <!-- ONLY SUPPORTS ORDINAL PROPERTIES FOR NOW -->
  <TableBase
    v-if="scalesOfMeasure.includes('ordinal')"
    title="Statistische Kennzahlen"
    :description="`Statistische Kennzahlen: ${plugin.title} für die vorkommenden Taxa (${plugin.sources.primary.citationShort}, nach ${plugin.sources.secondary.citationShort})`"
    :filename="`report-${reportID}-${plugin.name}-statistics`"
  >
    <!-- <tr>
      <th></th>
      <th colspan="2">Lageparameter</th>
      <th colspan="1">Streuungsmaß</th>
      <th></th>
    </tr> -->

    <tr>
      <th>Eigenschaft</th>

      <th>Modalwert</th>
      <th>Median</th>
      <!-- <th>Mittelwert<InfoToolTip :text="toolTips.average" /></th> -->

      <th>Interquartilsabstand</th>
      <!-- <th>Varianz<InfoToolTip :text="toolTips.variance" /></th>
      <th>Standardabweichung</th> -->

      <th>n<InfoToolTip :text="toolTips.taxaCount" /></th>
    </tr>

    <template
      v-for="(property, propertyKey) in plugin.properties"
      :key="propertyKey"
    >
      <tr
        v-if="
          pluginStatistics[propertyKey] && property.scaleOfMeasure === 'ordinal'
        "
      >
        <th>
          {{ `${property.title} (${property.titleShort})` }}
        </th>
        <td>{{ pluginStatistics[propertyKey].statistics.mode.join(", ") }}</td>
        <td>
          {{ pluginStatistics[propertyKey].statistics.median.join(", ") }}
        </td>
        <!-- <td>{{ pluginStatistics[propertyKey].statistics.average }}</td> -->

        <td>
          {{
            pluginStatistics[propertyKey].statistics.quantile75 -
            pluginStatistics[propertyKey].statistics.quantile25
          }}
        </td>
        <!-- <td>{{ pluginStatistics[propertyKey].statistics.variance }}</td> -->
        <!-- <td>{{ pluginStatistics[propertyKey].statistics.standardDeviation }}</td> -->

        <td>
          {{ pluginStatistics[propertyKey].statistics.ordinalValues.length }}
        </td>
      </tr>
    </template>
  </TableBase>
</template>

<script>
import toolTips from "@/toolTips.js";

export default {
  name: "TableEllenberg",
  props: {
    reportID: String,
    plugin: Object,
    pluginStatistics: Object,
    scalesOfMeasure: Array,
  },
  data() {
    return {
      toolTips,
    };
  },
};
</script>
