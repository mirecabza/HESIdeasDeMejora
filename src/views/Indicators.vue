<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8"><VerticalBarChart v-bind:inputData="unnamedChartData"/></v-col>
        <v-col cols="12" sm="4"><PieChart v-bind:inputData="globalGoalProgress"/></v-col>
      </v-row>
      <v-row justify="center">
        <v-col><HorizontalBarChart v-bind:inputData="employeeGoalProgress" /></v-col>
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
  data(){
    return{
      unnamedChartData: [
        ["Mes", "Sales"],
        ["ENE", 2],
        ["FEB", 10],
        ["MAR", 5],
        ["ABR", 8],
        ["MAY", 9],
        ["JUN", 7],
        ["JUL", 5],
        ["AGO", 3],
        ["SEP", 4],
        ["OCT", 6],
        ["NOV", 9],
        ["DIC", 5],
      ],
      globalGoalProgress: [
        ["Task", "Hours per Day"],
        ["1", 25],
        ["2", 75],
      ],
      employeeGoalProgress: [
        ["Nombre", "Avance"],
        ["JOHN DOE", 10],
        ["JOHN DOE", 5],
        ["JOHN DOE", 7],
        ["JOHN DOE", 3],
      ]
    };

  }
};
</script>

<style></style>
