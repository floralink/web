<template>
  <div class="home">
    <LayoutPanel>
      <h1>Willkommen bei Floralink Web!</h1>
      <InfoBox showTitle="false">
        Floralink ist ein Online-Tool zur Analyse von floristischen
        Kartierungen. Die Daten stammen aus dem WerBeo-Projekt (bzw. Flora-MV)
        und werden nach den Kriterien des Gebiets und des Zeitraums abgefragt.
        Die Ergebnisse können dann mit sippenspezifischen Daten (wie die
        Zeigerwerte nach Ellenberg oder der Rote-Liste-Status) verknüpft werden.
        Daraus werden automatisch statistische Größen berechnet.
      </InfoBox>
      <div class="imgflex">
        <img src="../assets/img/screenshot_eiv.png" />
        <img src="../assets/img/screenshot_query.png" />
        <img src="../assets/img/screenshot_taxalist.png" />
      </div>
      <InfoBox showTitle="false">
        <div class="center">
          <router-link to="/report" class="button"
            >Loslegen und eine Abfrage erstellen</router-link
          >
          <!-- <div class="button">Report mittels ID einsehen</div> -->
          <router-link to="/docs" class="button"
            >Dokumentation der Anwendung</router-link
          >
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
