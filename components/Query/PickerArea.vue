<template>
  <form>
    <input
      :id="`radiomtb${areaID}`"
      v-model="area.areaFormat"
      type="radio"
      :name="`areaformat${areaID}`"
      value="mtb"
    />
    <label :for="`radiomtb${areaID}`">TK25/MTB-Quadrant</label>

    <!-- <input
      :id="`radiowkt${areaID}`"
      v-model="area.areaFormat"
      type="radio"
      :name="`areaformat${areaID}`"
      value="wkt"
    />
    <label :for="`radiowkt${areaID}`">WKT-Shape</label> -->

    <br />

    <template v-if="area.areaFormat === 'mtb'">
      <input v-model="area.areaValue" type="text" />

      <InfoBox :showTitle="false">
        Gib den gewünschten MTB-Quadranten im Format '1234/123' an. Die
        Auflösung reicht bis 1/64-Quadranten. Die Ziffern nach dem Schrägstrich
        kodieren die Position der Quadranten. (1: NW, 2: NO, 3: SW, 4: SO).
      </InfoBox>
    </template>

    <!-- <template v-else-if="area.areaFormat === 'wkt'">
      <textarea
        v-model="area.areaValue"
        type="textarea"
        rows="3"
      />
    </template> -->
  </form>
</template>

<script setup lang="ts">
const query = useQueryStore();

const props = defineProps({
  initialArea: {
    type: Object,
    default: () => {},
  },
  areaID: {
    type: Number,
    required: true,
  },
});

const area = query.areas[props.areaID];

// mounted() {
//   query.areas[this.areaID] = {
//     areaFormat: "mtb",
//     areaValue: "1234/123",
//     ...this.initialArea,
//   };
//   this.area = query.areas[this.areaID];
// },
</script>

<style scoped>
form {
  width: 400px;
}

input[type="text"] {
  width: calc(100% - 20px);
}
</style>
