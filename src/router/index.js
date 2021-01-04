import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pokemons from "@/views/Pokemons";
import Features from "@/views/Features";
import Moves from "@/views/Moves";
import Pokemon from "@/views/Pokemon";
import Feature from "@/views/Feature";
import Move from "@/views/Move";

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
  {
    path: "/pokemon",
    name: "Pokemon",
    component: Pokemon
  },
  {
    path: "/move",
    name: "Move",
    component: Move
  },
  {
    path: "/feature",
    name: "Feature",
    component: Feature
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active"
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch(err => err);
};

export default router;
