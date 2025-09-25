<script setup lang="ts">
defineProps<{
  cards: {
    title: string;
    value: string | number;
    subvalue?: string | number;
  }[];
}>();
</script>

<template>
  <div class="m-1 flex flex-wrap gap-4 justify-center">
    <template v-for="card in cards" :key="card.title">
      <UCard
        :ui="{
          header: {
            base: 'text-center',
            padding: 'py-2',
          },
          body: {
            base: 'text-center',
            padding: '!py-5',
          },
        }"
      >
        <template #header>
          <p class="text-base text-gray-500">{{ card.title }}</p>
        </template>
        <p class="text-3xl font-medium">{{ card.value }}</p>
        <p
          v-if="card.subvalue"
          class="text-xl font-medium text-gray-600 dark:text-gray-400"
        >
          {{ card.subvalue }}
        </p>
      </UCard>
    </template>
  </div>
</template>
