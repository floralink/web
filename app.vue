<script setup lang="ts">
import {
  germansl,
  ellenberg,
  fukarekhenker,
  rotelistemv,
} from "@floralink/plugins";

const plugins = usePluginStore();
plugins.taxonReferencePlugins = { germansl };
plugins.taxonSpecificPlugins = {
  ellenberg,
  fukarekhenker,
  rotelistemv,
};
</script>

<template>
  <div>
    <TheHeader />
    <ButtonToTop />
    <div id="headerspace"></div>
    <NuxtPage />
    <div id="footerspace"></div>
    <TheFooter />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap");

:root {
  --grey1: rgb(29, 29, 29);
  --grey2: rgb(39, 39, 39);
  --grey2b: rgb(54, 54, 54);
  --grey3: rgb(51, 51, 51);
  --grey4: rgb(80, 80, 80);
  --white: rgb(233, 233, 233);
  --green1: #5b8d3a;
  --green2: #456e29;
}

/* LIGHT MODE */

/* :root {
  --grey1: rgb(255, 255, 255);
  --grey2: rgb(243, 243, 243);
  --grey2b: #cecece;
  --grey3: #e9e9e9;
  --grey4: #e7e7e7;
  --white: rgb(37, 37, 37);
  --green1: #60913e;
  --green2: #83aa67;
} */

/*************
 * LAYOUT
 *************/

html {
  scroll-behavior: smooth;
  /* filter: invert(1) hue-rotate(180deg); */
}

* {
  box-sizing: border-box;
  color: var(--white);
}

body {
  margin: 0;
  background-color: var(--grey1);
  font-family: "Source Sans Pro", sans-serif;
}

#headerspace {
  height: calc(20px + 2em);
}

#footerspace {
  height: calc(20px + 1em);
}

details > summary {
  text-align: center;
  padding: 20px;
  margin: 20px 0;

  cursor: pointer;
  background-color: var(--grey1);
}

/*************
 * TEXT
 *************/

h1,
h2,
h3 {
  margin: 30px 0 10px 0;
  text-align: center;
}

p {
  margin: 0;
}

a,
a:visited {
  color: var(--green2);
}

/*************
 * INPUT/BUTTONS
 *************/

.center {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;

  text-align: center;
}

a.button {
  color: var(--white);
  text-decoration: none;
}

.button {
  display: inline-block;
  /* flex: 20%; */
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;

  cursor: pointer;
  color: var(--white);
  background-color: var(--green2);
  transition: 0.3s;
}

button,
input,
textarea {
  padding: 5px;
  margin: 10px;

  background-color: var(--grey1);
  border-color: var(--grey3);
  border-radius: 5px;
  transition: 0.3s;

  font-family: "Source Sans Pro", sans-serif;
}

label {
  margin: 10px;
}

.button.big {
  width: 80vw;
  margin: 30px;
  background-color: var(--grey2);
}

.button:hover {
  background-color: var(--green1);
}

textarea {
  display: inline-block;
  vertical-align: middle;
  width: 300px;
}

input:invalid {
  box-shadow: 0 0 3px 1px red;
}
input:invalid:focus {
  box-shadow: none;
}

input[type="number"],
input[type="text"] {
  width: 100%;
  margin-right: 40px;
}
</style>
