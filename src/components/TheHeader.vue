<template>
  <header>
    <table>
      <tr>
        <td>
          <router-link to="/">
            <img src="../assets/logo.png" />
            <p id="name">Floralink</p>
          </router-link>
        </td>
        <td class="right">
          <router-link to="/report">Abfrage</router-link>
          <router-link to="/docs">Dokumentation</router-link>
          <router-link to="/info">Hintergrund</router-link>
          <router-link to="/sources">Literatur</router-link>
        </td>
      </tr>
    </table>
  </header>
</template>

<style scoped>
header {
  background-color: var(--green2);
  padding: 30px;
  margin-bottom: 10px;
}

img,
#name {
  display: inline-block;
  vertical-align: middle;
}

img {
  height: 3em;
  margin: 0.5em;
}

#name {
  font-size: 2em;
}

a {
  padding: 10px;
  color: white;
}

table {
  width: 100%;
  margin: 0;
}
td {
  background-color: unset;
}

td.right {
  text-align: right;
}
</style>
