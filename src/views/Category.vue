<template>
    <div v-if="getCategory == false">
        <div class="flex justify-center items-center h-screen">
    <div class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
    </div>
    
</div>
    </div>
    <div v-else>
    <div class="mt-20 text-center">
      <span class="font-bold text-4xl">All Categories</span>
    </div>
    <div class="grid grid-cols-3 gap-3 mt-5">
    
    <div  v-for="category in getCategory.data.slice(0,6)" :key="category.id">
    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="category.banner" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ category.name }}</h5>
        </div>
    </a>
    </div>
    
    </div>
</div>
   </template>
      
      <script>
      
      import { mapGetters, mapActions } from 'vuex'; 
      
      export default{
          computed: {
              ...mapGetters('category', ['getCategory']),
          },
          methods: {
              ...mapActions('category', ['fetchCategory'])
          },
          created() {
              this.fetchCategory();
          },
      }
    </script>