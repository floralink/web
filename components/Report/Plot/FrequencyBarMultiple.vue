<template>
  <h3>Häufigkeitsverteilung</h3>

  <BaseRadioToggle
    :radioID="reportID"
    :options="options"
    :initialOptionKey="currentPropertyKey"
    @optionupdate="currentPropertyKey = $event"
  />

  <ReportPlotFrequencyBar
    :key="currentProperty.title"
    :title="currentProperty.title"
    :description="`Absolute Häufigkeiten: ${plugin.title}: ${currentProperty.title} für die vorkommenden Taxa (${plugin.sources.primary.citationShort}, nach ${plugin.sources.secondary.citationShort})`"
    :filename="`report-${reportID}-${plugin.name}-spectrum-${currentProperty.titleShort}`"
    :categories="categories"
    :frequencies="frequencies"
  />
</template>

<script>
export default defineNuxtComponent({
  props: {
    reportID: String,
    plugin: Object,
    pluginStatistics: Object,
    initialKey: String,
  },
  data() {
    return {
      // initialize first shown property by prop or programatically
      currentPropertyKey:
        this.initialKey || Object.keys(this.plugin.properties)[0],
    };
  },
  computed: {
    options() {
      let options = [];

      Object.entries(this.plugin.properties).forEach(
        ([propertyKey, property]) => {
          options.push({
            optionKey: propertyKey,
            optionTitle: property.titleShort,
          });
        }
      );

      return options;
    },
    properties() {
      return this.plugin.properties;
    },
    currentProperty() {
      return this.plugin.properties[this.currentPropertyKey];
    },
    categories() {
      return this.currentProperty.enum;
    },
    frequencies() {
      return this.pluginStatistics[this.currentPropertyKey].statistics
        .frequencies;
    },
  },
});
</script>

<style scoped>
form {
  margin: 20px;
}
form.radio {
  text-align: center;
}
label {
  background-color: var(--grey3);
  margin: 5px;
  padding: 5px;
}
label:hover {
  background-color: var(--grey1);
  cursor: pointer;
}
label > input {
  display: none;
}
</style>
