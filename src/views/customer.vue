<template>
  <div class="main bg-slate-100">
    <div class="py-8 px-12">
      <div class="text-xl text-gray-00 font-bold mb-2">Manage customer</div>
      <Search v-model="search" @searching="searching" />
      <div class="overflow-auto rounded shadow-sm hidden md:block">
        <table class="shadow shadow-gray-100 w-full">
            <thead>
              <tr v-if="users.length > 0" class="text-white bg-gray-800 text-sm text-left">
                <template v-for="i in columns">
                  <th class="p-3 font-semibold tracking-wide capitalize">{{i.replace(/([A-Z])/g, ' $1').trim()}}</th>
                </template>
                <th class="p-3 font-semibold tracking-wide capitalize">action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 bg-white">
                <template v-if="users.length > 0">
                  <tr class="row" v-for="(user, index) in users" :key="index">
                    <template v-for="col in columns">
                      <template v-if="typeof user[col] === 'object'">
                        <td class="p-3 whitespace-nowrap text-sm text-gray-800 font-bold">
                          <template v-for="nestItem in user[col]">
                            <div v-if="col == 'address'" class="mb-0.5">{{ typeof nestItem !== 'object' ? '- '+nestItem : '- LT & LG : '+nestItem.lat+', '+nestItem.lng }}</div>

                            <div v-else-if="col == 'company'" class="mb-0.5">{{ typeof nestItem === 'object' ? '- '+nestItem.address+', '+nestItem.city+', '+nestItem.state+' '+nestItem.postalCode : '- '+nestItem }}</div>
                          </template>
                        </td>
                      </template>
                      <template v-else-if="col == 'image'">
                        <td class="p-3 text-sm text-gray-800 font-bold text-center">
                          <img :src="user[col]" class="bg-gray-100 border" alt="thumbnail">
                        </td>
                      </template>
                      <template v-else>
                        <td :class="`p-3 text-sm text-gray-800 font-bold ${['phone', 'birthDate', 'ein', 'ssn'].includes(col) ? 'whitespace-nowrap' : ''}`">
                          {{ user[col] }}
                        </td>
                      </template>
                    </template>
                    <td class="p-3 text-sm">
                      <a href="#" class="inline-block text-yellow-400 font-bold focus:outline-none hover:text-yellow-500 mr-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"/></svg></a>
                      <button class="text-red-500 font-bold focus:outline-none hover:text-red-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"/></svg></button>
                    </td>
                  </tr>
                </template>
                <template v-else>
                  <tr class="text-left animate-pulse row" v-for="i in 8" :key="i">
                    <td v-for="i in 8" class="px-4 py-3">
                      <div class="w-full rounded h-4 bg-gray-200"></div>
                    </td>
                  </tr>
                </template>
            </tbody>
        </table>
      </div>
      
      <Pagination /> 
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import api from '../axios'
import Search from '../components/Search.vue'
import Pagination from '../components/Pagination.vue'
export default {
  components: {
    Search,
    Pagination
  },
  setup() {
    const users = ref([])
    const columns = ref({})
    const search = ref('')
    const pagination = ref({
      prev: null,
      next: null,
      page: [],
      total: 0
    })

    onMounted(()=>{
      api.get('/users?limit=10').then(res=>{
        users.value = res.data.users
        columns.value = Object.keys(res.data.users[0])
      })
    })

    const searching = () => {
      console.log(search.value)
    }

    return { users, columns, search, searching, pagination }
  },
}
</script>