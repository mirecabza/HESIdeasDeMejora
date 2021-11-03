<template>
  <div id="app">
    <GChart
      :settings="{ packages: ['corechart'] }"
      :data="inputData"
      :options="chartOptions"
      :createChart="(el, google) => new google.visualization.PieChart(el)"
      @ready="onChartReady"
    />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  name: "App",
  components: {
    GChart,
  },
  props: {
    inputData: Array,
  },
  data() {
    return {
      chartsLib: null,
    };
  },
  computed: {
    chartOptions() {
      if (!this.chartsLib) return null;
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: "Avance de cumplimiento",
        },
        height: 300,
        colors: ["#435898", "#8293ee"],
        pieHole: 0.5,
      });
    },
  },
  methods: {
    onChartReady(chart, google) {
      this.chartsLib = google;
    },
  },
};
</script>
