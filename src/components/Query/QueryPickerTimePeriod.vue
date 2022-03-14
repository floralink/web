<template>
  <div tabindex="0">
    <label for="yearfrom">von:</label>
    <input
      id="yearfrom"
      v-model="period.from"
      type="number"
      min="1700"
      :max="new Date().getFullYear()"
      step="1"
    />

    <br />

    <label for="yearto">bis:</label>
    <input
      id="yearto"
      v-model="period.to"
      type="number"
      min="1700"
      :max="new Date().getFullYear()"
      step="1"
    />

    <InfoBox v-show="period.from > period.to" type="error">
      Der Anfang des Zeitraums darf nicht nach dem Ende liegen.
    </InfoBox>

    <InfoBox v-show="period.to - period.from > 30" type="error">
      Du kannst nicht mehr als 30 Jahre auf einmal abfragen.
    </InfoBox>
  </div>
</template>

<script>
import state from "@/state.js";
import InfoBox from "../InfoBox.vue";

export default {
  components: { InfoBox },
  props: {
    periodID: {
      type: String,
      required: true,
    },
    initialPeriod: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      period: {},
    };
  },
  mounted() {
    state.multipleQueryData.periods[this.periodID] = {
      from: "2000",
      to: "2009",
      ...this.initialPeriod,
    };
    this.period = state.multipleQueryData.periods[this.periodID];
  },
};
</script>

<style scoped>
input {
  width: calc(100% - 20px);
}
</style>
