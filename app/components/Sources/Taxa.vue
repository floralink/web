<script setup lang="ts">
const plugins = usePluginStore();
const germansl = plugins.taxonReferencePlugins.germansl;
</script>

<template>
  <p class="text-gray-600 dark:text-gray-400">
    Die Erfassungsdaten werden über die WerBeo-API abgerufen, die die Datenbank
    hinter
    <a href="https://www2.flora-mv.de/" target="_blank">Flora-MV</a>
    abfragt. Die taxonomischen Angaben stammen aus der botanischen
    Referenzdatenbank
    <a href="https://germansl.infinitenature.org/" target="_blank">GermanSL</a>.
  </p>

  <SourcesAlert :sources="germansl.sources" />
</template>
