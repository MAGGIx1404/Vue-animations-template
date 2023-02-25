import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("@/pages/HomePage.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  onLeave: () => {
    console.log("onLeave");
  }
});

export default router;
