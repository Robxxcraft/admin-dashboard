<template>
  <div class="bg-slate-50 p-8 flex">
    <div class="basis-8/12 mr-5">
      <div class="grid grid-cols-3 space-x-5 mb-5">
        <div class="bg-emerald-100 text-gray-800 rounded shadow-md shadow-green-100 p-5">
          <div class="mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7.00488 7.99951V5.99951C7.00488 3.23809 9.24346 0.999512 12.0049 0.999512C14.7663 0.999512 17.0049 3.23809 17.0049 5.99951V7.99951H20.0049C20.5572 7.99951 21.0049 8.44723 21.0049 8.99951V20.9995C21.0049 21.5518 20.5572 21.9995 20.0049 21.9995H4.00488C3.4526 21.9995 3.00488 21.5518 3.00488 20.9995V8.99951C3.00488 8.44723 3.4526 7.99951 4.00488 7.99951H7.00488ZM7.00488 9.99951H5.00488V19.9995H19.0049V9.99951H17.0049V11.9995H15.0049V9.99951H9.00488V11.9995H7.00488V9.99951ZM9.00488 7.99951H15.0049V5.99951C15.0049 4.34266 13.6617 2.99951 12.0049 2.99951C10.348 2.99951 9.00488 4.34266 9.00488 5.99951V7.99951Z"></path></svg>
          </div>
          <div class="text-lg font-bold">$44,000</div>
          <div class="flex justify-between">
            <div class="font-semibold">Income</div>
            <div class="font-semibold text-green-500 ml-3">^4.00%</div>
          </div>
        </div>
        <div class="bg-red-100 text-gray-800 rounded shadow-md shadow-red-100 p-5">
          <div class="mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6.50488 2H17.5049C17.8196 2 18.116 2.14819 18.3049 2.4L21.0049 6V21C21.0049 21.5523 20.5572 22 20.0049 22H4.00488C3.4526 22 3.00488 21.5523 3.00488 21V6L5.70488 2.4C5.89374 2.14819 6.19013 2 6.50488 2ZM19.0049 8H5.00488V20H19.0049V8ZM18.5049 6L17.0049 4H7.00488L5.50488 6H18.5049ZM9.00488 10V12C9.00488 13.6569 10.348 15 12.0049 15C13.6617 15 15.0049 13.6569 15.0049 12V10H17.0049V12C17.0049 14.7614 14.7663 17 12.0049 17C9.24346 17 7.00488 14.7614 7.00488 12V10H9.00488Z"></path></svg>
          </div>
          <div class="text-lg font-bold text-red-500">$33,000</div>
          <div class="flex justify-between">
            <div class="font-semibold">Expense</div>
            <div class="font-semibold ml-3">0.00%</div>
          </div>
        </div>
        <div class="bg-gray-100 text-gray-800 rounded shadow-md shadow-gray-100 p-5">
          <div class="mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM7 13H9V17H7V13ZM11 7H13V17H11V7ZM15 10H17V17H15V10Z"></path></svg>
          </div>
          <div class="text-lg font-bold text-emerald-500">$11,000</div>
          <div class="flex justify-between">
            <div class="font-semibold">Summary</div>
            <div class="font-semibold text-green-500 ml-3">2.50%</div>
          </div>
        </div>
      </div>
      
      <div class="bg-gray-100 w-full shadow shadow-gray-100 rounded mt-4">
        <div class="font-bold text-gray-800 px-6 py-5">Yearly Customer</div>
        <LineChart :chart-data="lineData" :options="lineOpt" class="px-4" />
      </div>
    </div>
    <div class="basis-4/12">
      <div class="bg-gray-800 p-5 rounded relative">
        <div class="mb-2">
          <div class="font-semibold text-white">Monthly profit</div>
          <div class="text-gray-400">Profit growth of 26%</div>
        </div>
        <DoughnutChart :chartData="doughData" :options="doughOpt" class="px-4" />
      </div>
      <div class="mt-5 bg-slate-200 p-5 rounded ">
        <div class="text-gray-800 font-semibold mb-1">Recently Sales</div>
        <template v-for="i in 3" :key="i">
          <div class="flex justify-between items-start border-b border-gray-400 py-3">
            <div class="flex">
              <div class="rounded-full overflow-hidden border border-green-500 h-8 w-8 bg-gray-500">
                <img :src="`https://i.pravatar.cc/150?img=${i}`" alt="" class="h-full w-full">
              </div>
              <div class="ml-3">
                <div class="text-sm font-semibold text-gray-700">Customer {{i}}</div>
                <div class="text-sm text-gray-500">{{i}} minutes ago</div>
              </div>
            </div>
            <div class="text-sm bg-green-500 rounded-lg text-white px-2 py-0.5 font-semibold">$499</div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
 
<script>
import { LineChart, DoughnutChart } from "vue-chart-3"
import { Chart, LineController, DoughnutController, ArcElement, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js"
import { computed, ref } from 'vue'
Chart.register(LineController, DoughnutController, ArcElement, CategoryScale, LinearScale, PointElement, LineElement)
export default {
  components: {
    LineChart,
    DoughnutChart,
  },
  setup() {
    const incomes = ref([])
    const charts = ref([1,3,4,6,4,6,10,9,7,6,6,8])
    const user = computed(()=>{
      return auth.state.user
    })

    const lineData = computed(()=>({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'],
      datasets: [
      {
        data: charts.value,
        backgroundColor: '#1f2937',
        borderColor: '#1f2937',
      },
      ]
    }))
    const doughData = computed(()=>({
      labels: ['Income', 'Expense'],
      datasets: [{
        data: [44000, 33000],
        backgroundColor: [
          '#84cc16',
          '#ef4444'
        ],
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

    const doughOpt = ref({
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: 'white'
          }
        },
      }
    })

    const currencyFormat = (n)=>{
      return n.toLocaleString().replace(/\d(?=(\d{3})+.)/g, '$&,');
    }

    return { incomes, user, lineData, doughData, lineOpt, doughOpt, currencyFormat }
  },
}

</script>