<template>
  <div class="container">
    <img v-if="type === 'download'" src="../assets/icons/download.svg" />
    <img v-else src="../assets/icons/info.svg" />
    <span v-if="text !== ''" class="tooltiptext">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "InfoToolTip",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "info",
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  margin: 0 5px;
}

img {
  width: 100%;
  height: 100%;
  cursor: pointer;
  filter: brightness(0);
}

img:hover {
  filter: brightness(0.6);
}

.tooltiptext {
  visibility: hidden;

  background-color: var(--grey1);
  text-align: center;
  font-weight: 300;

  padding: 10px;
  width: 200px;

  position: absolute;
  bottom: 100%;
  margin-bottom: 5px;
  left: 50%;
  transform: translateX(-50%);

  transition: 0.2s;

  overflow: visible;
  z-index: 20;
}

.container:hover .tooltiptext,
.container:focus .tooltiptext,
.tooltiptext:hover,
.tooltiptext:focus {
  visibility: visible;
}
</style>
