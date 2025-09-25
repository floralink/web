<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <p class="navtitle uppercase font-bold ml-2 mt-10 first:mt-0 mb-2 text-sm">
    {{ title }}
  </p>
  <UDivider class="mb-2" />
</template>
