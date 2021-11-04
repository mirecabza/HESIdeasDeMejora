<template>
  <div>
    <v-container grid-list-xs>
      <v-row>
        <v-col cols="12">
          <h4>MEJORES IDEAS DEL MES</h4>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <!-- Podium, 3 of the below cols -->
        <ProjectCard
          place="1"
          title="test"
          author="author"
          description="description"
        />
        <ProjectCard
          place="2"
          title="test"
          author="author"
          description="description"
        />
        <ProjectCard
          place="3"
          title="test"
          author="author"
          description="description"
        />
      </v-row>
    </v-container>
    <div style="height: 40px"></div>
    <h4>PARTICIPACION</h4>
    <div style="height: 20px"></div>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
      select-all
      pagination.sync="pagination"
      item-key="id"
      loading="true"
    >
    </v-data-table>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
export default {
  components: { ProjectCard },
  data() {
    return {
      headers: [
        {
          text: "# Prop",
          align: "start",
          value: "numProp",
        },
        { text: "Nombre", value: "nombre" },
        { text: "Área de quien propone", value: "areaPropone" },
        { text: "Título de la propuesta", value: "titulo" },
      ],
      items: [
        { numProp: "123", nombre: "asdf", areaPropone: "asdf", titulo: "asdf" },
      ],
    };
  },
};
</script>

<style scoped>
h3,
h4,
p {
  text-align: center;
}
</style>
