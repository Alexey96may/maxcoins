import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CatalogView from "../views/CatalogView.vue";
import CardView from "../views/CardView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/catalog/:id",
    name: "card",
    component: CardView,
    props: true,
  },
  {
    path: "/catalog",
    name: "catalog",
    component: CatalogView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
