<template>
  <form action="/resultado">
    <div class="row g-4 needs-validation" novalidate>
      <div class="form-group col-md-3">
        <label for="origen">Ciudad de origen</label>
        <select class="form-select" required v-model="origen">
          <option selected disabled value="">Seleccione la ciudad</option>
          <option value="1">Quito</option>
          <option value="2">Guayaquil</option>
          <option value="3">Cuenca</option>
        </select>
      </div>
      <div class="form-group col-md-3">
        <label for="destino">Ciudad de destino</label>
        <select class="form-select" required v-model="destino">
          <option selected disabled value="">Seleccione la ciudad</option>
          <option value="1">Quito</option>
          <option value="2">Guayaquil</option>
          <option value="3">Cuenca</option>
        </select>
      </div>

      <div class="form-group col-md-3">
        <label for="date-salida">Fecha de salida</label>
        <input type="date" required v-model="salida" />
      </div>
      <div class="form-group col-md-3">
        <label for="date-retorno">Fecha de retorno</label>
        <input type="date" required v-model="retorno" />
      </div>
    </div>
    <button type="submit" class="btn btn-primary" v-show="correcto">
      Buscar
    </button>
  </form>
</template>

<script>
export default {
  name: "BuscadorView",
  data() {
    return {
      salida: "",
      retorno: "",
      destino: "",
      origen: "",
    };
  },
  computed: {
    correcto() {
      if ((this.origen != this.destino) & (this.retorno > this.salida))
        return true;
    },
  },
};
</script>
