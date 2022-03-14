<template>
  <form>
    <input
      :id="`radiomtb${area.id}`"
      v-model="area.areaFormat"
      type="radio"
      :name="`areaformat${area.id}`"
      value="mtb"
    />
    <label :for="`radiomtb${area.id}`">TK25/MTB-Quadrant</label>
    <!-- <input
      :id="`radiowkt${area.id}`"
      v-model="area.areaFormat"
      type="radio"
      :name="`areaformat${area.id}`"
      value="wkt"
    />
    <label :for="`radiowkt${area.id}`">WKT-Shape</label> -->
    <br />
    <template v-if="area.areaFormat === 'mtb'">
      <input v-model="area.areaValue" type="text" @blur="inputChange()" />
      <InfoBox showTitle="false">
        Gib den gewünschten MTB-Quadranten im Format '1234/123' an. Die
        Auflösung reicht bis 1/64-Quadranten. Die Ziffern nach dem Schrägstrich
        kodieren die Position der Quadranten. (1: NW, 2: NO, 3: SO, 4: SW).
      </InfoBox>
    </template>
    <!-- <template v-else-if="area.areaFormat === 'wkt'">
      <textarea
        v-model="area.areaValue"
        type="textarea"
        rows="3"
        @blur="inputChange()"
      />
    </template> -->
  </form>
</template>

<script>
import state from "@/state";

export default {
  props: {
    initialArea: {
      type: Object,
      default: () => {},
    },
    areaID: String,
  },
  emits: ["inputchange"],
  data() {
    return {
      area: {
        areaFormat: "",
        areaValue: "",
      },
    };
  },
  watch: {
    area: {
      handler(newValue, oldValue) {
        state.multipleQueryData.areas[this.areaID] = newValue;
      },
      deep: true,
    },
  },
  mounted() {
    // set area object to initialArea prop value or a default value
    this.area = {
      areaFormat: "mtb",
      areaValue: "1234/123",
      ...this.initialArea,
    };

    this.$emit("inputchange", this.area);
  },
  methods: {
    inputChange() {
      this.$emit("inputchange", this.area);
      state.multipleQueryData.areas[this.areaID] = this.area;
    },
  },
};
</script>

<style scoped>
form {
  width: 400px;
}
</style>
