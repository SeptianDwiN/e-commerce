<template>

<div class="flex min-h-screen w-screen" >
      <div class="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
        <!-- Left Column -->
        <div class="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
          <div class="mb-16 lg:my-auto lg:max-w-lg">
            <div class="mb-6 max-w-xl">
              <div>
                <p class="bg-teal-accent-400 mb-2 inline-block rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-900">25% off this shoes</p>
              </div>
              <h2 class="mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
               Selamat Datang<br />
                Di Website
                <span class="rounded- abg-gradient-to-r inline-block bg-sky-400 from-lime-400 to-sky-400 px-2 font-bold text-white">Sptnn.</span>
              </h2>
              <p class="text-base text-gray-700 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ullam rem voluptatem, animi tempora expedita!Lorem ipsum dolor.</p>
            </div>
            <div class="flex items-center">
              <a href="#" class="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"> Get started </a>
              
            </div>
          </div>
        </div>
        <!-- /Left Column -->
    
        <!-- Right Column -->
        <div class="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
          <!-- Col 2 -->
          <div class="hidden w-56 items-center space-y-3 lg:flex">
            <div class="overflow-hidden rounded-xl bg-yellow-400">
              <img class="h-full w-full object-cover" src="../assets/img/compas1.jpg" alt="" />
            </div>
          </div>
          <div class="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
            <div class="h-40 overflow-hidden rounded-xl bg-green-600/60">
              <img class="mx-auto h-full w-full object-cover" src="../assets/img/compas2.jpg" alt="" />
            </div>
            <div class="h-40 overflow-hidden rounded-xl bg-pink-600/60">
              <img class="mx-auto h-full w-full object-cover" src="../assets//img/compas3.jpg" alt="" />
            </div>
            <div class="h-40 overflow-hidden rounded-xl bg-blue-600/60">
              <img class="mx-auto h-full w-full object-cover" src="../assets//img/compas4.jpg" alt="" />
            </div>
          </div>
        </div>
        <!-- /Right Column -->
      </div>
    </div>
    
    <hr>



  <!--Produk-->
  
  <div v-if="getProduk == undefined">Loading....</div>
    <div v-else>
    <div class="grid md:grid-cols-3 gap-8  mt-10 pl-5">
        <div  v-for="produk in getProduk.slice(1,7)" :key="produk.id">
          
        <div class="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
            <a href="#">
                <img class="h-60 rounded-t-lg object-cover w-full"
                    src="../assets/img/compas3.jpg"
                    alt="product image" />
            </a>
          
            <span
                class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
            <div class="mt-4 px-5 pb-5">
                <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-slate-900">{{ produk.name }}</h5>
                </a>
                <div class="mt-2.5 mb-5 flex items-center">
                    <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                </div>
                <div class="flex items-center justify-between">
                    <p>
                        <span class="text-3xl font-bold text-slate-900">Rp.{{ produk.base_price }}</span>
                    
                    </p>
                </div>
              
                <div> <router-link :to="{ name: 'SingleProduk', params: { id: produk.id } }" 
                    class="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      Detail Product
                    </router-link>
                </div>
            </div>
        </div>
    
  </div>

  </div>
  
  </div>

</template>

 <script>
    import { mapGetters, mapActions } from 'vuex';
    
    export default {
    
        computed: {
            ...mapGetters('produk', ['getProduk']),
        },
        methods: {
            ...mapActions('produk', ['fetchProduk']),
        },
        created() {
            this.fetchProduk();
        }
    }
    </script>
