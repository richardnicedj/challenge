<template>
  <div>
    <table class="table table-light">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Precio</th>
          <th scope="col">Aerolínea</th>
          <th scope="col">Numero de escalas</th>
          <th scope="col">Duración de vuelo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in busqueda" :key="index">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.precio }}</td>
          <td>{{ item.aerolinea }}</td>
          <td>{{ item.escala }}</td>
          <td>{{ item.duracion }}</td>
          <input
            id="consulta"
            type="submit"
            class="btn btn-outline-secondary"
            value="Información"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "ResultadoView",
  computed: {
    ...mapState(["busqueda"]),
  },
};
</script>
