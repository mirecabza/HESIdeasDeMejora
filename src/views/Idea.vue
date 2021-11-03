<template>
  <div>
    <h2>Registro de ideas de mejora</h2>
    <v-container>
      <v-row>
        <v-col
          ><v-text-field name="emisor" label="Emisor" id="id"></v-text-field
        ></v-col>
        <v-col
          ><v-text-field name="depto" label="DEPTO" id="id"></v-text-field
        ></v-col>
        <v-col
          ><v-text-field
            name="areaPropone"
            label="Área de quien propone"
            id="id"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col
          ><v-text-field
            name="supervisorPropone"
            label="supervisor de quien propone"
            id="id"
          ></v-text-field
        ></v-col>
        <v-col
          ><v-text-field
            name="gerentePropone"
            label="Gerente de quien propone"
            id="id"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col
          ><v-text-field
            name="areaOportunidad"
            label="Área de oportunidad de mejora"
            id="id"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col
          ><v-text-field
            name="supervisorArea"
            label="Supervisor del área de mejora"
            id="id"
          ></v-text-field
        ></v-col>
        <v-col
          ><v-text-field
            name="gerenteArea"
            label="Gerente del Área de mejora"
            id="id"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row
        ><v-text-field
          name="titulo"
          label="Título de la propuesta"
          id="id"
        ></v-text-field
      ></v-row>
      <v-row
        ><v-text-field
          name="oportunidad"
          label="Oportunidad de mejora"
          id="id"
        ></v-text-field
      ></v-row>
      <v-row
        ><v-text-field
          name="propuesta"
          label="Propuesta de mejora"
          id="id"
        ></v-text-field
      ></v-row>
      <v-row>
        <v-col>
          <template>
            <v-file-input
              accept="image/*"
              label="File input"
              prepend-icon="mdi-camera"
            ></v-file-input>
          </template>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn color="error">CANCELAR</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="success"
            :loading="loading"
            :disabled="loading"
            @click="loader = 'loading'"
            >GUARDAR</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loader: null,
      loading: false,
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
