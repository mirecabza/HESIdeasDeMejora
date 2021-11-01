<template>
  <div id="app">
    <GChart
      :settings="{ packages: ['corechart'] }"
      :data="chartData"
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
  data() {
    return {
      chartsLib: null,
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["Task", "Hours per Day"],
        ["1", 25],
        ["2", 75],
      ],
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
