<script setup lang="ts">
definePageMeta({ layout: "navigation" });
useHead({ title: "Impressum" });

const config = useRuntimeConfig();
</script>

<template>
  <h1>Impressum</h1>

  <h2>Anbieter</h2>

  <p>{{ config.public.imprintName }}</p>
  <p>{{ config.public.imprintAddress }}</p>
  <p>E-Mail: {{ config.public.imprintEmail }}</p>

  <h2>Haftung für Inhalte</h2>

  <p>
    Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
    Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
    bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
    gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
    forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen
    zur Entfernung oder Sperrung der Nutzung von Informationen nach den
    allgemeinen Gesetzen bleiben hiervon unberührt. Diesbezügliche Haftung ist
    jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
    möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich
    diese Inhalte umgehend entfernen.
  </p>

  <h2>Haftung für Links</h2>

  <p>
    Dieses Angebot enthält Links zu externen Webseiten Dritter, auf deren
    Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte
    auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
    stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
    verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
    Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
    Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
    verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
    Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
    werde ich derartige Links umgehend entfernen.
  </p>
</template>
