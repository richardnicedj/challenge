<template>
  <form>
    <div class="row g-4 needs-validation" novalidate>
      <div class="form-group col-md-3">
        <label for="origen">Ciudad de origen</label>
        <select class="form-select" required>
          <option selected disabled value="">Seleccione la ciudad</option>
          <option value="1">Quito</option>
          <option value="2">Guayaquil</option>
          <option value="3">Cuenca</option>
        </select>
      </div>
      <div class="form-group col-md-3">
        <label for="destino">Ciudad de destino</label>
        <select class="form-select" required>
          <option selected disabled value="">Seleccione la ciudad</option>
          <option value="1">Quito</option>
          <option value="2">Guayaquil</option>
          <option value="3">Cuenca</option>
        </select>
      </div>

      <div class="form-group col-md-3">
        <label for="date-salida">Fecha de salida</label>
        <input type="date" required />
      </div>
      <div class="form-group col-md-3">
        <label for="date-retorno">Fecha de retorno</label>
        <input type="date" required />
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
