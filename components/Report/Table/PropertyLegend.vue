<template>
  <BaseRadioToggle
    :radioID="reportID"
    :options="options"
    @optionupdate="currentPropertyKey = $event"
  />

  <InfoBox :showTitle="false">
    <h4>{{ `${currentProperty.title} (${currentProperty.titleShort})` }}</h4>
    {{ currentProperty.description }}

    <TableBase v-if="currentProperty.possibleValues" title="" download="false">
      <tr>
        <th>Wert</th>
        <th colspan="2">Beschreibung</th>
      </tr>
      <template v-if="Object.keys(ordinalValues).length > 1">
        <template v-for="key in currentProperty.enum" :key="key">
          <tr v-if="ordinalValues[key]">
            <td>{{ key }}</td>
            <td>{{ ordinalValues[key].title }}</td>
            <td>{{ ordinalValues[key].description }}</td>
          </tr>
        </template>
        <tr v-if="Object.keys(nominalValues).length > 1">
          <th colspan="100%">Spezielle Werte</th>
        </tr>
      </template>
      <template v-if="Object.keys(nominalValues).length > 1">
        <template v-for="key in currentProperty.enum" :key="key">
          <tr v-if="nominalValues[key]">
            <td>{{ key }}</td>
            <td>{{ nominalValues[key].title }}</td>
            <td>{{ nominalValues[key].description }}</td>
          </tr>
        </template>
      </template>
    </TableBase>
    <template v-if="plugin.sources.description">
      (aus {{ plugin.sources.description.citationShort }})
    </template>
    <template v-else>
      (aus {{ plugin.sources.primary.citationShort }})
    </template>
  </InfoBox>
</template>

<script>
export default defineNuxtComponent({
  props: {
    plugin: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      options: [],
      currentPropertyKey: Object.keys(this.plugin.properties)[0],
    };
  },
  computed: {
    currentProperty() {
      return this.plugin.properties[this.currentPropertyKey];
    },
    ordinalValues() {
      if (
        this.currentProperty.possibleValues &&
        this.currentProperty.scaleOfMeasure === "ordinal"
      ) {
        let ordVals = {};

        Object.entries(this.currentProperty.possibleValues).forEach(
          ([key, def]) => {
            if (!def.extraOrdinal) ordVals[key] = def;
          }
        );

        return ordVals;
      } else {
        return {};
      }
    },
    nominalValues() {
      if (this.currentProperty.possibleValues) {
        let nomVals = {};

        switch (this.currentProperty.scaleOfMeasure) {
          case "ordinal":
            Object.entries(this.currentProperty.possibleValues).forEach(
              ([key, def]) => {
                if (def.extraOrdinal) nomVals[key] = def;
              }
            );
            return nomVals;
          default: // nominal or assuming nominal
            return this.currentProperty.possibleValues;
        }
      } else {
        return {};
      }
    },
  },
  created() {
    // options for radio toggle
    Object.values(this.plugin.properties).forEach((property) => {
      this.options.push({
        optionKey: property.dataKey,
        optionTitle: property.title,
      });
    });
  },
});
</script>
