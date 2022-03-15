import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";
import Report from "../views/Report.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/report",
    name: "Report",
    component: Report,
  },
  // lazy-load the following components when the route is visited
  {
    path: "/docs",
    name: "Docs",
    component: () => import("../views/Docs.vue"),
  },
  {
    path: "/info",
    name: "Background",
    component: () => import("../views/Info.vue"),
  },
  {
    path: "/sources",
    name: "Sources",
    component: () => import("../views/Sources.vue"),
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: () => import("../views/Impressum.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(), // this needs to be configured on the nginx/Apache server to work properly // old arg: process.env.BASE_URL
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      // always scroll to top
      return {
        el: "#app",
        top: 0,
        behavior: "smooth",
      };
    }
  },
});

export default router;
