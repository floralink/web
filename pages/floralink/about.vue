<script setup lang="ts">
definePageMeta({ layout: "navigation", alias: ["/"] });
useHead({ title: "Über" });
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1>Floralink</h1>
    <p>
      Floralink ist ein Online-Tool zur statistischen Auswertung von
      floristischen Kartierungen. Die Daten stammen aus dem WerBeo-Projekt (bzw.
      <a href="https://www2.flora-mv.de/" target="_blank">Flora-MV</a>) und
      werden nach den Kriterien des Gebiets und des Zeitraums abgefragt. Die
      Ergebnisse können dann mit taxonspezifischen Daten (wie die Zeigerwerte
      nach Ellenberg oder der Rote-Liste-Status) verknüpft werden. Daraus werden
      Lage- und Streuungsmaße berechnet und in Diagrammen visualisiert.
      Floralink befindet sich in der Entwicklung und ist nicht ausgereift! Es
      darf aber gerne ausprobiert werden und vielleicht lassen sich ein paar
      interessante Trends entdecken.
    </p>
    <UButton
      class="w-72 self-center justify-center"
      to="/query"
      icon="i-heroicons-arrow-right"
      >Zur Abfrage</UButton
    >
    <img
      class="pt-8 lg:w-1/2 self-center"
      src="~/assets/3.0.0-alpha.2_eiv_boxplots.png"
    />
    <h2>Hintergrund</h2>
    <p>
      Ich habe das Projekt im Rahmen meiner Bachelorarbeit mit dem Ziel
      entwickelt, die ungenutzten Möglichkeiten in der Nutzung der
      fortschreitend digitalisierten Erfassungsdaten für eine breitere
      Zielgruppe zu demonstrieren. Eine Motivaton dafür war, dass ich im Laufe
      meines Studiums für Vegetationsaufnahmen öfters händisch
      Ellenberg-Zeigerwerte nachgeblättert und zusammengetragen habe. Zudem sind
      viele der vorhandenen Tools für die statistische Auswertung von
      botanischen Erfassungsdaten sind stark in die Jahre gekommen. Andere
      Programme haben einiges drauf, aber sind kompliziert zu bedienen und nur
      für Expert*innen interessant.
    </p>
    <p>
      Die zum Abschluss der Arbeit veröffentlichte Version von Floralink war
      zunächst eher demonstrativ. Zuletzt habe ich im Oktober ein großes Update
      ausgerollt, mit dem ein neues Design, robusterer Code und ein paar neue
      Funktionen hinzugekommen sind. Das neue Motto:
      <i>Mit den Daten spielen.</i>
    </p>
  </div>
</template>
