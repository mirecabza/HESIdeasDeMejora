<template>
  <v-app>
    <v-content>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.path"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app class="first">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>HES</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn>
          <v-icon>mdi-account-circle</v-icon>
          Iniciar Sesión
        </v-btn>
      </v-app-bar>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "prototyping",
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard", path: "/" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
};
</script>

<style></style>
