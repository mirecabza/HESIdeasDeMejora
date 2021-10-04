import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "../views/Menu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Menu,
  },
  {
    path: "/idea",
    component: () => import("../views/Idea.vue"),
  },
  {
    path: "/indicadores",
    component: () => import("../views/Indicators.vue"),
  },
  {
    path: "/reconocimientos",
    component: () => import("../views/Awards.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
