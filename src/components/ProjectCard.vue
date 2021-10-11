<template>
  <div>
    <v-col cols="auto">
      <v-row justify="center">
        <v-col cols="auto">
          <v-icon>mdi-trophy</v-icon>
        </v-col>
        <v-col cols="auto">
          <h3>{{place}} LUGAR</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-card>
          <v-img src="@/assets/logo.png" alt="" />
          <v-card-title>{{ title }}</v-card-title>
          <v-card-subtitle>{{ author }}</v-card-subtitle>
          <v-card-actions>
            <v-btn icon @click="show = !show"
              ><v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon></v-btn
            >
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text> {{ description }} </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  props: {
    place: Number,
    img: String,
    title: String,
    author: String,
    description: String,
  },
};
</script>

<style></style>
