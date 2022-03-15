<template>
  <form class="radio">
    <template v-for="option in options" :key="option.optionKey">
      <label :for="`spectrum-${radioID}-${option.optionKey}`">
        <input
          :id="`spectrum-${radioID}-${option.optionKey}`"
          v-model="currentOptionKey"
          type="radio"
          :value="option.optionKey"
          :name="`spectrumSelection-${radioID}`"
        />{{ option.optionTitle }}
      </label>
    </template>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    initialOptionKey: {
      type: String,
      default: undefined,
    },
  },
  emits: ["optionupdate"],
  data() {
    return {
      radioID: uuidv4(),
      currentOptionKey: this.initialOptionKey || this.options[0].optionKey,
    };
  },
  watch: {
    currentOptionKey: function (newValue, oldValue) {
      this.$emit("optionupdate", newValue);
      this.classList(oldValue).remove("active");
      this.classList(newValue).add("active");
    },
  },
  mounted() {
    let classList = this.classList(this.currentOptionKey);
    if (classList) this.classList(this.currentOptionKey).add("active");
  },
  methods: {
    classList(value) {
      let inputElement = document.querySelector(
        `label > input[id="spectrum-${this.radioID}-${value}"]`
      );
      if (inputElement) return inputElement.parentElement.classList;
    },
  },
};
</script>

<style scoped>
form {
  margin: 20px;
  overflow: auto;
  padding: 10px;
}
form.radio {
  text-align: center;
}
label {
  background-color: var(--grey3);
  margin: 5px;
  padding: 10px;
  font-size: 0.8em;
  transition: 0.2s;
}
label:hover {
  background-color: var(--grey1);
  cursor: pointer;
}
.active {
  background-color: var(--grey1);
  padding-left: 20px;
  padding-right: 20px;
}

label > input {
  display: none;
}
</style>
