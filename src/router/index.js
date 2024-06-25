import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    // {
    //   path: "/impressum",
    //   name: "Impressum",
    //   component: () => import("../views/Impressum.vue"),
    // },
  ],
  scrollBehavior(to) {
    // Enable scrolling to #anchors
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      // Always scroll to top on route visit
      return {
        el: "#app",
        top: 0,
        behavior: "smooth",
      };
    }
  },
});

export default router;
