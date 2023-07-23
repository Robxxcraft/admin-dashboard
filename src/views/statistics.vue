<template>
    <div class="bg-slate-50 p-8 flex">
      <div class="basis-8/12 mr-5">
        <div class="bg-gray-100 w-full shadow shadow-gray-100 rounded">
          <div class="font-bold text-gray-800 px-6 py-5">Yearly Income</div>
          <BarChart :chart-data="barData" :options="barOpt" class="px-4" />
        </div>
        <div class="bg-gray-100 w-full shadow shadow-gray-100 rounded mt-5">
          <div class="font-bold text-gray-800 px-6 py-5">Yearly Customer</div>
          <LineChart :chart-data="lineData" :options="lineOpt" class="px-4" />
        </div>
      </div>
      <div class="basis-4/12">
        <div class="bg-gray-800 p-5 rounded relative">
          <div class="font-semibold text-white mb-3">Monthly sales product</div>
          <PieChart :chartData="doughDataMonthly" :options="doughOpt" :height="550" />
        </div>
        <div class="mt-8 bg-gray-800 p-5 rounded relative">
            <div class="font-semibold text-white mb-3">Yearly sales products</div>
            <PieChart :chartData="doughDataYearly" :options="doughOpt" :height="550" />
        </div>
      </div>
    </div>
  </template>
   
  <script>
  import { LineChart, PieChart, BarChart } from "vue-chart-3"
  import { Chart, LineController, PieController, BarController, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from "chart.js"
  import { computed, ref, onMounted } from 'vue'
import api from "../axios"
  Chart.register( LineController, PieController, BarController, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, BarElement)
  export default {
    components: {
      LineChart,
      PieChart,
      BarChart,
    },
    setup() {
      const months = ref(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'])
      const incomes = ref([])
      const charts = ref([25,32,44,61,43,67,105,91,71,64,62,81])
      const products = ref({
        title: [],
        stock: []
      })

      onMounted(()=>{
        api.get('/products?limit=10').then(res=>{
          res.data.products.forEach(i => {
            products.value.title.push(i.title)
            products.value.stock.push(i.stock)
          });
        })
      })

      const user = computed(()=>{
        return auth.state.user
      })
  
      const lineData = computed(()=>({
        labels: months.value,
        datasets: [
        {
          data: charts.value,
          backgroundColor: '#1f2937',
          borderColor: '#1f2937',
        },
        ]
      }))
      
      const barData = computed(()=>({
        labels: months.value,
        datasets: [{
          data: [22000, 13000, 34000, 55000, 22000, 37000, 44000, 51000, 64000, 59000, 53000, 44000],
          backgroundColor: [
            '#6366f1',
            '#a855f7',
            '#71717a',
            '#0ea5e9',
            '#ef4444',
            '#f59e0b',
            '#f43f5e',
            '#67e8f9',
            '#84cc16',
            '#fde047',
            '#fca5a5',
            '#713f12',
          ]
        }],
      }))

      const doughDataMonthly = computed(()=>({
        labels: products.value.title,
        datasets: [{
          data: products.value.stock,
          backgroundColor: [
            '#713f12',
            '#6366f1',
            '#f59e0b',
            '#0ea5e9',
            '#f43f5e',
            '#a855f7',
            '#67e8f9',
            '#84cc16',
            '#fca5a5',
            '#fde047',
          ]
        }],
      }))

      const doughDataYearly = computed(()=>({
        labels: products.value.title,
        datasets: [{
          data: products.value.stock.map(i => i*12),
          backgroundColor: [
            '#713f12',
            '#6366f1',
            '#f59e0b',
            '#0ea5e9',
            '#f43f5e',
            '#a855f7',
            '#67e8f9',
            '#84cc16',
            '#fca5a5',
            '#fde047',
          ]
        }],
      }))
  
      const lineOpt = ref({
        responsive: true,
        scales: {
          y: {
            ticks: {
              precision: 0 
            },
          }
        },
        plugins: {
          legend: {
            display: false
          },
        }
      })

      const barOpt = ref({
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
        }
      })

      const doughOpt = ref({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: 'white',
            },
            align: 'start'
          },
        }
      })

      return { incomes, user, lineData, doughDataMonthly, doughDataYearly, barData, lineOpt, barOpt, doughOpt }
    },
  }
  
  </script>