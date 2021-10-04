<template>
  <div>
    <Header />
    <h3>SISTEMA DE IDEAS DE MEJORA</h3>
    <h4>MEJROES IDEAS DEL MES</h4>
    <div class="podium-header">
      <span class="podium-label">
        <img src="@/assets/logo.png" alt="" />
        <h4>1ER LUGAR</h4>
      </span>
      <span class="podium-label">
        <img src="@/assets/logo.png" alt="" />
        <h4>2DO LUGAR</h4>
      </span>
      <span class="podium-label">
        <img src="@/assets/logo.png" alt="" />
        <h4>3ER LUGAR</h4>
      </span>
    </div>
    <div id="streak"></div>
    <div class="images">
      <span id="1-place" class="place">
        <img src="@/assets/logo.png" alt="" />
        <h4>NAME</h4>
      </span>
      <span id="2-place" class="place">
        <img src="@/assets/logo.png" alt="" />
        <h4>NAME</h4>
      </span>
      <span id="3-place" class="place">
        <img src="@/assets/logo.png" alt="" />
        <h4>NAME</h4>
      </span>
    </div>
    <h4>PARTICIPACIÓN</h4>
    <div class="table">
      <h5># Prop</h5>
      <h5>Nombre</h5>
      <h5>Área de quien propone</h5>
      <h5>Título de la propuesta</h5>
      <h5>a</h5>
      <h5>b</h5>
      <h5>c</h5>
      <h5>d</h5>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Awards",
  components: {
    Header,
  },
};
</script>

<style scoped>
h3,
h4 {
  text-align: center;
}
.podium-header {
  display: flex;
  justify-content: space-around;
}
.podium-label {
  display: flex;
  align-items: center;
}
.podium-label img {
  height: 50px;
}
#streak {
  background-color: blue;
  height: 6px;
  margin: 0 2rem;
}
.images {
  display: flex;
  justify-content: space-around;
}
.table {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
}
</style>
