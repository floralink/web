<template>
  <div tabindex="0">
    <label for="yearfrom">von:</label>
    <input
      id="yearfrom"
      v-model="period.from"
      type="text"
      @blur="inputChange()"
    />
    <!-- min="1940"
      :max="new Date().getFullYear()"
      step="1" -->

    <br />

    <label for="yearto">bis:</label>
    <input id="yearto" v-model="period.to" type="text" @blur="inputChange()" />
  </div>
</template>

<script>
export default {
  props: {
    initialPeriod: {
      type: Object,
      default() {
        return {
          from: "2000-01-01",
          to: "2009-12-31",
        };
      },
    },
  },
  emits: ["inputchange"],
  data() {
    return {
      period: {},
    };
  },
  mounted() {
    // set period object to initialPeriod prop value or a default value
    if (
      this.initialPeriod === undefined ||
      Object.keys(this.initialPeriod).length === 0
    ) {
      this.period = {
        from: "2000",
        to: "2009",
      };
    } else {
      this.period = { ...this.initialPeriod };
    }

    this.$emit("inputchange", this.period);
  },
  methods: {
    inputChange() {
      this.$emit("inputchange", this.period);
    },
  },
};
</script>
