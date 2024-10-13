<script setup lang="ts">
defineProps({
  flex: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  sizing: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="panel" :class="sizing === 'small' ? 'small' : ''">
    <h1 v-if="title !== ''">{{ title }}</h1>
    <div class="content" :class="{ flex: flex }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.panel {
  max-width: 80vw;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--grey2);
  overflow: auto;
}

h1 {
  padding: 10px;
  background-color: var(--green2);
  font-size: 1.5em;
}

h1:first-child {
  margin-top: 0;
}

.content {
  padding: 20px;
  padding-top: 0;
}

.flex {
  display: flex;
  max-width: 100%;
  padding: 0;
  justify-content: center;
  /* background-color: var(--grey3); */
}

.small {
  max-width: 60vw;
  font-family: "DejaVu Serif Condensed", "serif";
  line-height: 150%;
}
</style>
