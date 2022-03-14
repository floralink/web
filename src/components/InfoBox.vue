<template>
  <div v-if="type === 'error'" class="info error">
    <template v-if="showTitle === true">
      <img class="icon" src="../assets/icons/error.svg" />
      <h4>{{ title || "Kritische Warnung!" }}</h4>
    </template>
    <p>
      <slot />
    </p>
  </div>
  <div v-else-if="type === 'warning'" class="info warning">
    <template v-if="showTitle === true">
      <img class="icon" src="../assets/icons/warning.svg" />
      <h4>{{ title || "Warnung!" }}</h4>
    </template>
    <p>
      <slot />
    </p>
  </div>
  <div v-else-if="type === 'important'" class="info important">
    <template v-if="showTitle === true">
      <img class="icon" src="../assets/icons/warning.svg" />
      <h4>{{ title || "Wichtig!" }}</h4>
    </template>
    <p>
      <slot />
    </p>
  </div>
  <div v-else class="info neutral">
    <template v-if="showTitle === true">
      <img class="icon" src="../assets/icons/info.svg" />
      <h4>{{ title || "Info" }}</h4>
    </template>
    <p>
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "info",
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style scoped>
.info {
  padding: 10px;
  margin: 10px;
}

.info.error {
  border: 1px solid rgb(82, 51, 51);
  background-color: rgb(77, 33, 33);
}

.info.warning {
  border: 1px solid rgb(156, 148, 34);
  background-color: rgb(128, 117, 21);
}

.info.important {
  border: 1px solid rgb(36, 53, 36);
  background-color: rgb(52, 78, 49);
}

.info.neutral {
  background-color: var(--grey3);
  border: 2px solid var(--grey4);
}

.icon {
  float: left;
  width: 1em;
  height: 1em;
}

p {
  font-size: 1em;
}

h4,
p,
.icon {
  margin: 5px;
}
</style>
