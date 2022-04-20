import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "這是首頁",
      content: {
        description: "這是首頁的內容敘述",
      },
    },
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "About 頁面",
      content: {
        description: "這是 About 頁面的內容敘述",
      },
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
