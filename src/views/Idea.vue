<template>
  <div>
    <Header />
    <h1>SISTEMA DE IDEAS DE MEJORA</h1>
    <h3>Registro de Ideas de mejora</h3>
    <h3>Información del emisor</h3>
    <form action="">
      <select name="" id="emisor"></select
      ><select name="" id="depto"></select
      ><select name="" id="areapropone"></select
      ><select name="" id="supervisorpropone"></select
      ><select name="" id="gerentepropone"></select
      ><select name="" id="areaoportunidad"></select
      ><select name="" id="supervisoroportunidad"></select
      ><select name="" id="gerenteoportunidad"></select>
      <input type="text" name="" id="titulo" />
      <textarea name="" id="oportunidad" cols="30" rows="10"></textarea>
      <textarea name="" id="propuesta" cols="30" rows="10"></textarea>
    </form>
    <button>CANCELAR</button>
    <button type="submit">GUARDAR</button>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Idea",
  components: {
    Header,
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
