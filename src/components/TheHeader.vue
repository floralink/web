<template>
  <header>
    <table>
      <tr>
        <td>
          <router-link to="/">
            <img src="../assets/logo.png" />
            <p id="name">Floralink</p>
          </router-link>
          <code id="version">1.0.0-alpha 2</code>
        </td>
        <td class="right">
          <a href="https://docs.flora-link.de" target="_blank"
            >Handbuch und Wissenssammlung 🡭</a
          >
        </td>
      </tr>
    </table>
  </header>
</template>

<style scoped>
header {
  background-color: var(--green2);
  padding: 10px 30px;
  margin-bottom: 10px;

  position: fixed;
  top: 0;
  width: 100%;
}

img,
#name,
#version {
  display: inline-block;
  vertical-align: middle;
}

#version {
  font-size: 0.9em;
  padding-left: 1em;
  text-decoration: cod;
}

img {
  height: 2em;
  margin: 0.5em;
}

#name {
  font-size: 1.8em;
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
