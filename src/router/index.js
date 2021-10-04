import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "../views/Menu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "menu",
    component: Menu,
  },
  {
    path: "/idea",
    name: "idea",
    component: () => import("../views/Idea.vue"),
  },
  {
    path: "/indicators",
    name: "indicators",
    component: () => import("../views/Indicators.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
