<template>
  <div>
    <Header />
    <input type="text" name="" id="searchbar" />
    <div class="table">
      <h6>Mes</h6>
      <h6># Prop</h6>
      <h6>F. Propuesta</h6>
      <h6>Nombre</h6>
      <h6>Área de quien propone</h6>
      <h6>Título de la propuesta</h6>
      <h6>Área de la mejora</h6>
      <h6>Tipo de mejora</h6>
      <h6>Gerente</h6>
      <h6>a</h6>
      <h6>b</h6>
      <h6>c</h6>
      <h6>d</h6>
      <h6>e</h6>
      <h6>f</h6>
      <h6>g</h6>
      <h6>h</h6>
      <h6>i</h6>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Dashboard",
  components: {
    Header,
  },
};
</script>

<style scoped>
.table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr 2fr 3fr 1fr 2fr 1fr;
  justify-items: center;
}
#searchbar {
  margin: 10px 5px;
}
</style>
