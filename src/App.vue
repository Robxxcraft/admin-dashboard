<template>
  <div class="flex min-h-screen justify-end">
    <!-- Sidebar -->
    <Sidebar />
    
    <div class="pl-60 w-full">
      <!-- Header -->
      <Header />

      <!-- Main -->
      <div class="pt-16">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  components: {
    Header,
    Sidebar,
  },
}
</script>