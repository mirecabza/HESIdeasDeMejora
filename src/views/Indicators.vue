<template>
  <div>
    <v-container grid-list-xs>
      <v-row justify="center">
        <v-col>bar chart</v-col>
        
        <v-col>pie chart</v-col>
         <D3pieChart :config="chart_config" :datum="chart_data"></D3pieChart>
      </v-row>
      <v-row justify="center">
        <v-col>horizontal bar chart</v-col>
      </v-row>
    </v-container>
       <!-- Bar chart -->
      <D3BarChart
      :config="chart_config"
      :datum="chart_data"
     ></D3BarChart>
      
  </div>
</template>


<script>
import { D3BarChart } from 'vue-d3-charts';
export default {
  name: "Indicators",
  components: {
    D3BarChart,
  },
   data() {
    return {
      chart_data: [
        //...
        {hours: 1648, year: '2019'},
        {hours: 2479, year: '2020'},
        {hours: 3200, year: '2021'}
      ],
      chart_config: {
        key: 'year',
        values: ['hours']
      },
      count: 2010
    }
  },
  methods: {
    addData(){
      const hours = Math.floor(Math.random() * 10000);
      const year = (this.count++).toString();
      this.chart_data.push({hours, year})
    },
    removeFirst(){
      if(!this.chart_data.length) return;
      this.chart_data.splice(0, 1);
    },
    removeLast(){
      if(!this.chart_data.length) return;
      this.chart_data.splice(this.chart_data.length-1, 1);
    }
  }
  
};

    import { D3pieChart} from 'vue-d3-charts';
    export default {
  name: "Indicators",
  components: {
    D3pieChart,
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