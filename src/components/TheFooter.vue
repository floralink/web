<template>
  <footer>
    <p><img id="inline-logo" src="@/assets/logo.png" /> Floralink</p>
    <br />
    <a href="https://github.com/floralink/web">Quellcode auf GitHub</a>
    <br /><br />
    <p>
      Fehler entdeckt?<br />
      Eine für deine Arbeit wichtige Funktion fehlt?<br />
      <a href="mailto:info@flora-link.de">Schreib mir gerne eine Mail!</a>
    </p>
    <br />
    <router-link to="/impressum">Impressum</router-link>
  </footer>
</template>

<style scoped>
footer {
  left: 0;
  right: 0;
  text-align: center;

  padding: 30px;
  margin-top: 30px;

  background-color: var(--grey2);
}

#inline-logo {
  display: inline-block;
  height: 1em;
}
</style>
