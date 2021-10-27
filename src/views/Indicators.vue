<template>
  <div>
    <v-container grid-list-xs>
      <v-row justify="center">
        <v-col>bar chart</v-col>
        <D3BarChart :config="chart_config" :datum="chart_data"></D3BarChart>
        <v-col>pie chart</v-col>
      </v-row>
      <v-row justify="center">
        <v-col>horizontal bar chart</v-col>
      </v-row>
    </v-container>
    
  </div>
</template>


<script>
import { D3BarChart } from 'vue-d3-charts';
export default {
  name: "Indicators",
  components: {
    D3BarChart,
  },data() {
    return {
      chart_data: [
        {vue: 20, d3: 62, category: 'lorem'},
        {vue: 28, d3: 47, category: 'ipsum'},
        {vue: 35, d3: 36, category: 'dolor'},
        {vue: 60, d3: 24, category: 'sit'},
        {vue: 65, d3: 18, category: 'amet'},
      ],
      chart_config: {
        key: 'category',
        values: ['vue', 'd3'],
        orientation: 'horizontal',
        color: {
          keys: {
            vue: '#41b882',
            d3: '#b35899', 
          },
        },
      },
    }
  },
};



</script>
     


<style></style>

