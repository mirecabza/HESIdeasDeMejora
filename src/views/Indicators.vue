<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8"><VerticalBarChart /></v-col>
        <v-col cols="12" sm="4"><PieChart /></v-col>
      </v-row>
      <v-row justify="center">
        <v-col><HorizontalBarChart /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HorizontalBarChart from "@/components/HorizontalBarChart.vue";
import VerticalBarChart from "@/components/VerticalBarChart.vue";
import PieChart from "@/components/PieChart.vue";
export default {
  name: "Indicators",
  components: {
    HorizontalBarChart,
    VerticalBarChart,
    PieChart,
  },
};
</script>

<style></style>
