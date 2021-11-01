<template>
  <div id="app">
    <GChart
      :settings="{ packages: ['bar'] }"
      :data="chartData"
      :options="chartOptions"
      :createChart="(el, google) => new google.charts.Bar(el)"
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
        ["Nombre", "Avance"],
        ["JOHN DOE", 1000],
        ["JOHN DOE", 1170],
        ["JOHN DOE", 660],
        ["JOHN DOE", 1030],
      ],
    };
  },
  computed: {
    chartOptions() {
      if (!this.chartsLib) return null;
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: "Cumplimiento de meta anual",
        },
        bars: "horizontal", // Required for Material Bar Charts.
        hAxis: { format: "decimal" },
        height: 300,
        colors: ["#435898"],
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
