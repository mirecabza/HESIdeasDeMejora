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
    };
  },
  computed: {
    chartOptions() {
      if (!this.chartsLib) return null;
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
        bars: "vertical", // Required for Material Bar Charts.
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
