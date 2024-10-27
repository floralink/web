<template>
  <div
    class="lg:py-2 lg:px-2 h-dvh flex flex-col overflow-auto bg-green-leaf-600"
  >
    <header
      class="flex justify-between bg-primary-600 px-8 py-3 rounded-lg mb-1 select-none text-white"
    >
      <div class="flex gap-4 items-center">
        <router-link to="/" class="flex gap-3 items-center">
          <img class="h-8" src="/logo.svg" />
          <p class="text-3xl text-white font-medium">Floralink</p>
        </router-link>
      </div>
      <div class="flex gap-2 items-center">
        <UButton
          icon="i-simple-icons-github"
          color="gray"
          variant="ghost"
          to="https://github.com/floralink/web"
          target="_blank"
        />
      </div>
    </header>

    <UCard
      class="flex flex-col overflow-auto h-full"
      :ui="{
        body: {
          base: 'flex flex-row overflow-auto w-full h-full',
          padding: '',
        },
      }"
    >
      <slot />
    </UCard>
  </div>
</template>
