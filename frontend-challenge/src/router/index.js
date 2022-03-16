import Vue from "vue";
import VueRouter from "vue-router";
import Buscador from "../views/BuscadorView.vue";
import Resultado from "../views/ResultadoView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/buscador",
    name: "buscador",
    component: Buscador,
  },
  {
    path: "/resultado",
    name: "resultado",
    component: Resultado,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
