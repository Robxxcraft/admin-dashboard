<template>
    <div class="header border-l px-4 md:px-8 py-4 bg-white flex justify-between fixed z-10">
      <div class="text-gray-700 text-sm relative">
        <input type="text" placeholder="Search" class="w-80 rounded focus:ring-2 select-none transition focus:ring-gray-300 focus:ring-offset-4 focus:ring-offset-gray-100 bg-gray-50 focus:outline-none p-2 border">
        <div class="search-icon absolute right-2 bg-gray-800 cursor-pointer text-white p-1.5 rounded-md drop-shadow hover:drop-shadow-lg">
          <svg id="magnify" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="arcs"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
      </div>
      <div class="flex">
        <div class="pr-3 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M22 20H2V18H3V11.0314C3 6.04348 7.02944 2 12 2C16.9706 2 21 6.04348 21 11.0314V18H22V20ZM5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path></svg>
        </div>
        <div class="text-gray-500 md:hidden" id="navButton">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/></svg>
        </div>
        <div class="bg-gray-500 rounded-full h-7 w-7 border border-gray-100 overflow-hidden ml-3">
          <img src="https://i.pravatar.cc/150?img=55" class="w-full h-full" alt="avatar">
        </div>
      </div>
    </div>
</template>

<style scoped>
  .header {
    width: 82.5%;
  }
  .search-icon {
    top: 14%
  }
</style>