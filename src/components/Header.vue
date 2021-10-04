<template>
  <header>
    <router-link to="/">
      <img src="@/assets/logo.png" alt="" />
      <h3>HES</h3>
    </router-link>

    <span class="session">
      <img src="@/assets/logo.png" alt="" />
      <h3>Kiosco</h3>
      <a href="#"><h3>Iniciar Sesion</h3></a>
      <img src="@/assets/logo.png" alt="" />
    </span>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  margin: 0 auto;
  width: 100%;
  height: 40px;
  background-color: #1c253c;
  display: flex;
  justify-content: space-between;
  color: white;
}

a {
  text-decoration: none;
}

span * {
  padding: 0 0.5rem;
}

header * {
  display: flex;
  align-items: center;
}

.session {
  justify-content: flex-end;
}

img {
  width: 2rem;
}
</style>
