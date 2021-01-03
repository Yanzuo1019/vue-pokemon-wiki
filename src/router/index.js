import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pokemons from "@/views/Pokemons";
import Features from "@/views/Features";
import Moves from "@/views/Moves";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Root",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "pokemons",
        name: "Pokemons",
        component: Pokemons
      },
      {
        path: "moves",
        name: "Moves",
        component: Moves
      },
      {
        path: "features",
        name: "Features",
        component: Features
      }
    ]
  },
  // {
  //   path: "/pokemon",
  //   name: "Pokemon",
  //   component: Pokemon
  // },
  // {
  //   path: "/move",
  //   name: "Move",
  //   component: Move
  // },
  // {
  //   path: "/feature",
  //   name: "Feature",
  //   component: Feature
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
