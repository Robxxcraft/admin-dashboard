<template>
    <div class="pt-6 pb-12 flex items-center justify-end space-x-2 text-gray-800 font-semibold">
        <button class="bg-gray-800 text-white shadow-sm hover:shadow focus:outline-none border-2 border-gray-800 py-1 px-3 rounded">1</button>
        <template v-for="page in 3" :key="page">
        <button v-if="page != 1" class="hover:bg-gray-800 hover:text-white shadow-sm hover:shadow focus:outline-none border-2 border-gray-800 py-1 px-3 rounded">{{page}}</button>
        </template>
        <button class="shadow-sm focus:outline-none border-2 border-gray-800 py-1 px-3 rounded" disabled>...</button>
        <button class="hover:bg-gray-800 hover:text-white shadow-sm hover:shadow focus:outline-none border-2 border-gray-800 py-1 px-3 rounded">10</button>
        <button class="h-8 w-8 hover:text-purple-800 focus:outline-none">
        <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
</template>