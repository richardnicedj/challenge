import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    busqueda: [
      {
        id: 1,
        precio: "50",
        aerolinea: "Latam",
        escala: "1",
        duracion: "2H",
      },
      {
        id: 2,
        precio: "60.5",
        aerolinea: "Avianca",
        escala: "2",
        duracion: "2H",
      },
      {
        id: 4,
        precio: "40.9",
        aerolinea: "American Airlines",
        escala: "3",
        duracion: "1H",
      },
      {
        id: 5,
        precio: "33.5",
        aerolinea: "Taca",
        escala: "3",
        duracion: "2H",
      },
      {
        id: 6,
        precio: "70",
        aerolinea: "United Airlines",
        escala: "1",
        duracion: "1H",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
