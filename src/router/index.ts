import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

interface NavbarRouteProps {
  path: string;
  title: string;
}

export const NAVBAR_ROUTES: Array<NavbarRouteProps> = [
  {
    path: "/business",
    title: "Бизнес",
  },
  {
    path: "/about",
    title: "О нас",
  },
  {
    path: "/prices",
    title: "Цены",
  },
  {
    path: "/make-order",
    title: "Оформить заказ",
  },
];

export const enum RouteList {
  home = "/",
  prices = "/prices",
  about = "/about",
  makeOrder = "/make-order",
  business = "/business",
}

const routes: Array<RouteRecordRaw> = [
  {
    path: RouteList.home,
    name: "home",
    component: HomeView,
  },
  {
    path: RouteList.about,
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: RouteList.makeOrder,
    name: "makeOrder",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: RouteList.prices,
    name: "prices",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: RouteList.business,
    name: "business",
    component: () => import("../views/AboutView.vue"),
  },
  { path: "*", component: HomeView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
