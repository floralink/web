<script setup lang="ts">
const props = defineProps<{ sources: any }>();
const sourceCount = computed(() => Object.keys(props.sources).length);
</script>

<template>
  <UAlert
    v-if="sources && Object.keys(sources).length > 0"
    :title="sourceCount > 1 ? 'Quellen' : 'Quelle'"
    icon="i-heroicons-information-circle"
    color="primary"
    variant="subtle"
    class="mt-6 overflow-visible"
    :ui="{
      description: '*:mt-5 *:*:mb-1',
    }"
  >
    <template #description>
      <p v-if="sources.primary">
        <template v-if="sources.secondary || sources.description">
          <b>Primärquelle</b>
          <br />
        </template>
        {{ sources.primary.citation }}
      </p>

      <p v-if="sources.secondary">
        <b>Sekundärquelle</b>
        <br />
        {{ sources.secondary.citation }}
      </p>

      <p v-if="sources.description">
        <b>Quelle der Beschreibung und Legende</b>
        <br />
        {{ sources.description.citation }}
      </p>
    </template>
  </UAlert>
</template>
