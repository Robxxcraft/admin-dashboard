<template>
    <div class="flex flex-wrap lg:flex-wrap-no items-end justify-end mt-4 mb-6">
        <div class="rounded w-full md:w-auto shadow-xs flex">
            <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @keyup.enter="childSearching" class="w-full md:w-60 lg:w-auto rounded-l p-3 focus:outline-none text-gray-800 tracking-wide" placeholder="Search" />
            <button @click="childSearching" class="bg-gray-800 hover:bg-gray-600 py-2 px-4 focus:outline-none text-white rounded-r">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
  props: ['modelValue'],
  setup(_, {emit}) {
    const childSearching = () => {
        emit('searching');
    }

    return { childSearching }
  },
  emits: (['update:modelValue', 'searching'])
}
</script>