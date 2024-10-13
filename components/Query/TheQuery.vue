<template>
  <LayoutPanel title="Abfrage">
    <div class="center">
      <br />
      Datenquelle: Flora-MV (über WerBeo-API)
      <br /><br />
      Taxonspezifische Daten: Ellenberg-Zeigerwerte, Rote-Liste-Status MV &
      N-F-T-Status

      {{ queryCount }}
    </div>
    <TableBase download="false">
      <tr>
        <th v-for="index in query.areaCount" :key="index">
          Gebiet {{ query.areaCount > 1 ? index : "" }}
        </th>

        <th v-for="index in query.periodCount" :key="index">
          Zeitraum {{ query.periodCount > 1 ? index : "" }}
        </th>
      </tr>
      <tr>
        <td v-for="(area, index) in query.areas" :key="area">
          <QueryPickerArea :initialArea="area" :areaID="index" />
        </td>
        <td
          v-for="(period, index) in query.periods"
          :key="period.from + period.to"
        >
          <QueryPickerTimePeriod :initialPeriod="period" :periodID="index" />
        </td>
      </tr>
      <tr>
        <td colspan="100%">
          <div v-if="queryCount <= 2" class="center">
            <div class="button" @click="addArea()">Gebiet hinzufügen</div>
            <div class="button" @click="addPeriod()">Zeitraum hinzufügen</div>
          </div>

          <template v-else>
            <div class="center">
              <template v-if="query.areaCount >= 2">
                <div
                  v-for="index in query.areaCount"
                  :key="index"
                  class="button"
                  @click="removeArea(index)"
                >
                  Gebiet{{ query.areaCount > 1 ? " " + index : "" }} entfernen
                </div>
              </template>

              <template v-if="query.periodCount >= 2">
                <div
                  v-for="index in query.periodCount"
                  :key="index"
                  class="button"
                  @click="removePeriod(index)"
                >
                  Zeitraum{{ query.periodCount > 1 ? " " + index : "" }}
                  entfernen
                </div>
              </template>
            </div>

            <InfoBox type="info"
              >Du kannst entweder für ein Gebiet zwei Zeiträume miteinander
              vergleichen oder für einen Zeitraum zwei Gebiete.</InfoBox
            >
          </template>
        </td>
      </tr>
    </TableBase>

    <div class="center">
      <div class="button" @click="performQuery">Abfrage durchführen</div>
    </div>
  </LayoutPanel>
</template>

<script>
export default defineNuxtComponent({
  name: "TheQuery",

  emits: ["performquery"],
  data() {
    return {
      query: useQueryStore(),
    };
  },
  computed: {
    queryCount() {
      return this.query.areaCount + this.query.periodCount; // multiply, but doenst work?
    },
  },

  created() {
    if (!this.query) {
      this.query = {
        areas: [
          {
            id: 0,
            areaFormat: "mtb",
            areaValue: "2539/1",
          },
        ],
        periods: [
          {
            id: 0,
            from: "2000",
            to: "2009",
          },
        ],
      };
    }

    // this.performQuery(); // for testing
  },
  methods: {
    // TODO: move this logic to store
    addArea() {
      this.query.areas.push({
        id: this.query.areaCount,
      });
    },
    addPeriod() {
      this.query.periods.push({});
    },
    removeArea(pseudoIndex) {
      this.query.areas.splice(pseudoIndex - 1, 1);
    },
    removePeriod(pseudoIndex) {
      this.query.periods.splice(pseudoIndex - 1, 1);
    },
    addObjectOnArray(array) {
      array.push({ id: array[array.length - 1].id + 1 });
    },
    removeElement(array, index) {
      array.splice(index, 1)[0];
    },
    updateElement(array, index, value) {
      array[index] = value;
    },
    performQuery() {
      let queries = [];

      this.query.areas.forEach((area) => {
        this.query.periods.forEach((period) => {
          queries.push({
            dataProviderID: "werbeo",
            area: {
              areaFormat: area.areaFormat,
              areaValue: area.areaValue,
            },
            period: {
              from: period.from + "-01-01",
              to: period.to + "-12-31",
            },
            creationDate: new Date().toISOString(),
          });
        });
      });

      console.log(queries);

      this.$emit("performquery", queries);
    },
  },
});
</script>
