<template>
  <div class="home">
    <LayoutPanel>
      <h1>Willkommen bei Floralink Web!</h1>
      <InfoBox showTitle="false">
        Floralink ist ein Online-Tool zur statistischen Auswertung von
        floristischen Kartierungen. Die Daten stammen aus dem WerBeo-Projekt
        (bzw. Flora-MV) und werden nach den Kriterien des Gebiets und des
        Zeitraums abgefragt. Die Ergebnisse können dann mit taxonspezifischen
        Daten (wie die Zeigerwerte nach Ellenberg oder der Rote-Liste-Status)
        verknüpft werden. Daraus werden Lage- und Streuungsmaße berechnet und in
        Diagrammen visualisiert. Floralink befindet sich in der Entwicklung und
        ist nicht ausgereift! Es darf aber gerne ausprobiert werden und
        vielleicht lassen sich ein paar interessante Trends entdecken.
      </InfoBox>
      <div class="imgflex">
        <img src="../assets/img/screenshot_query.png" />
        <img src="../assets/img/screenshot_eiv.png" />
        <img src="../assets/img/screenshot_taxalist.png" />
      </div>
      <InfoBox showTitle="false">
        <div class="center">
          <router-link to="/report">
            <div class="button">Eine Abfrage stellen</div>
          </router-link>
          <router-link to="/docs">
            <div class="button">Handbuch</div>
          </router-link>
          <router-link to="/info">
            <div class="button">Hintergrundwissen</div>
          </router-link>
          <router-link to="/sources">
            <div class="button">Literaturhinweise</div>
          </router-link>
        </div>
      </InfoBox>
    </LayoutPanel>
  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "Home",
//   components: {
//     HelloWorld,
//   },
// };
</script>

<style scoped>
.imgflex {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
}
.imgflex > img {
  flex: 20%;
  max-width: 30%;
  align-self: center;
  border: 5px solid var(--grey1);
  margin: 10px;
}
</style>
