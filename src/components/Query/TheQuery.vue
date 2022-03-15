<template>
  <LayoutPanel title="Abfrage">
    <div class="center">
      <br />
      Datenquelle: Flora-MV (über WerBeo-API)
      <br /><br />
      Taxonspezifische Daten: Ellenberg-Zeigerwerte, Rote-Liste-Status MV &
      N-F-T-Status
    </div>
    <TableBase download="false">
      <tr>
        <th v-for="index in areaCount" :key="index">
          Gebiet {{ areaCount > 1 ? index : "" }}
        </th>

        <th v-for="index in periodCount" :key="index">
          Zeitraum {{ periodCount > 1 ? index : "" }}
        </th>
      </tr>
      <tr>
        <td v-for="(area, index) in state.multipleQueryData.areas" :key="area">
          <QueryPickerArea :initialArea="area" :areaID="index" />
        </td>
        <td
          v-for="(period, index) in state.multipleQueryData.periods"
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
              <template v-if="areaCount >= 2">
                <div
                  v-for="index in areaCount"
                  :key="index"
                  class="button"
                  @click="removeArea(index)"
                >
                  Gebiet{{ areaCount > 1 ? " " + index : "" }} entfernen
                </div>
              </template>

              <template v-if="periodCount >= 2">
                <div
                  v-for="index in periodCount"
                  :key="index"
                  class="button"
                  @click="removePeriod(index)"
                >
                  Zeitraum{{ periodCount > 1 ? " " + index : "" }}
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
import state from "@/state";

// components
import QueryPickerArea from "./QueryPickerArea.vue";
import QueryPickerTimePeriod from "./QueryPickerTimePeriod.vue";

export default {
  name: "TheQuery",
  components: {
    QueryPickerArea,
    QueryPickerTimePeriod,
  },
  emits: ["performquery"],
  data() {
    return {
      areaCount: 0,
      periodCount: 0,
      state,
    };
  },
  computed: {
    queryCount() {
      return this.areaCount + this.periodCount; // multiply, but doenst work?
    },
  },
  created() {
    if (!state.multipleQueryData) {
      state.multipleQueryData = {
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

    this.areaCount = state.multipleQueryData.areas.length;
    this.periodCount = state.multipleQueryData.periods.length;

    // this.performQuery(); // for testing
  },
  methods: {
    addArea() {
      state.multipleQueryData.areas.push({
        id: this.areaCount,
      });
      this.areaCount++;
    },
    addPeriod() {
      state.multipleQueryData.periods.push({});
      this.periodCount++;
    },
    removeArea(pseudoIndex) {
      state.multipleQueryData.areas.splice(pseudoIndex - 1, 1);
      this.areaCount--;
    },
    removePeriod(pseudoIndex) {
      state.multipleQueryData.periods.splice(pseudoIndex - 1, 1);
      this.periodCount--;
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

      state.multipleQueryData.areas.forEach((area) => {
        state.multipleQueryData.periods.forEach((period) => {
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
};
</script>
