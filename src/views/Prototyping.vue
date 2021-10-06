<template>
  <v-app>
    <Header />
    <h3>SISTEMA DE IDEAS DE MEJORA</h3>
    <div class="container">
      <img id="logoidea" src="@/assets/logo.png" alt="" />
      <span class="buttons">
        <v-btn color="info" to="/">INICIO</v-btn>
        <v-btn color="info" to="/idea">INGRESAR UNA IDEA DE MEJORA</v-btn>
        <v-btn color="info" to="/instruccion">INSTRUCCIÓN</v-btn>
        <v-btn color="info" to="/indicadores">INDICADORES</v-btn>
        <v-btn color="info" to="/reconocimientos">RECONOCIMIENTOS</v-btn>

        <IdeaSearch id="search-bar" />
      </span>
    </div>
    <div style="height: 10px"></div>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

import IdeaSearch from "@/components/IdeaSearch.vue";

export default {
  name: "Menu",
  components: {
    Header,

    IdeaSearch,
  },
};
</script>

<style scoped>
header {
  margin-bottom: 1rem;
}

h3 {
  text-align: center;
}

.container {
  display: flex;
  justify-content: center;
  grid-gap: 10px;
  margin: 0 auto;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
}

#idea {
  grid-column-start: 2;
  grid-column-end: span 2;
}

#search-bar {
  width: 100%;
  grid-column-start: 0;
  grid-column-end: span 3;
}

@media only screen and (max-width: 830px) {
  .container {
    flex-direction: column;
  }
  #logoidea {
    height: 2rem;
  }
}
</style>
