import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Floralink server connection
import axios from "axios";
axios.defaults.baseURL = "http://floralink.herokuapp.com";

import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import ButtonToTop from "./components/TheButtonToTop.vue";
import TheQuery from "./components/Query/TheQuery.vue";
import TheCiteMe from "./components/TheCiteMe.vue";
import LayoutPanel from "./components/LayoutPanel.vue";
import TableBase from "./components/TableBase.vue";
import InfoToolTip from "./components/InfoToolTip.vue";
import InfoBox from "./components/InfoBox.vue";

const app = createApp(App);

app.use(router);

app.config.globalProperties.$axios = axios;

app
  .component("TheHeader", TheHeader)
  .component("TheFooter", TheFooter)
  .component("ButtonToTop", ButtonToTop)
  .component("TheQuery", TheQuery)
  .component("TheCiteMe", TheCiteMe)
  .component("LayoutPanel", LayoutPanel)
  .component("TableBase", TableBase)
  .component("InfoToolTip", InfoToolTip)
  .component("InfoBox", InfoBox);

app.mount("#app");
