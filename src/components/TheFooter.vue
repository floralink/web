<template>
  <footer>
    <p></p>
    <p>
      <img id="inline-logo" src="@/assets/logo.png" /> Floralink
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="https://github.com/floralink/web">GitHub 🡭</a>
      &nbsp;•&nbsp;
      <a href="mailto:info@flora-link.de">Kontakt</a>
      &nbsp;•&nbsp;
      <router-link to="/impressum">Impressum</router-link>
      &nbsp;•&nbsp;
      <a href="https://docs.flora-link.de/floralink/abfrage/datenquellen/"
        >Datenquellen 🡭</a
      >
    </p>
  </footer>
</template>

<style scoped>
footer {
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  text-align: center;

  border-top: 3px solid grey;

  padding: 10px;
  margin-top: 30px;

  background-color: var(--grey2);
}

#inline-logo {
  display: inline-block;
  height: 1em;
}

p {
  margin: 5px;
}
</style>
