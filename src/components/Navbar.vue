<template>
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <router-link to="/" class="flex items-center">
                <img src="https://img2.pngdownload.id/20200728/kf/transparent-s-icon-s-logo-s-letter-5f1fe3b8781fc9.166505831595925432492.jpg" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sptnn.</span>
            </router-link>
            <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
           
           
            <div class="flex md:order-2 ">
         <div v-if="isAuthenticated">          
             
              <Cart/> 

          </div>
                    
            <div v-if="isAuthenticated" class="flex md:order-2 lg:space-x-2">
                <button  @click="logout" type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Logout
                </button>
               
            </div>

            <div v-else class="flex md:order-2 lg:space-x-2 ">
                <router-link to="/login" type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Login
                </router-link>
                <router-link to="/register" type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Register
                </router-link>
           
             </div>
            </div>

            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <router-link to="/"
                            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                            aria-current="page">Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/produk"
                            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                            aria-current="page">Product
                        </router-link>    
                    </li>
                    <!-- <li>
                        <router-link to="/brand"
                            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                            aria-current="page">Brand
                        </router-link>    
                    </li> -->
                    <!-- <li>
                        <router-link to="/category"
                            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                            aria-current="page">Category
                        </router-link>    
                    </li> -->
                    <li>
                        <router-link to="/contact"
                            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                            aria-current="page">Contact
                        </router-link>    
                    </li>
                    <li>
                        <router-link to="/profile"
                            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                            aria-current="page">Profile
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        
    </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Cart from './Cart.vue';

export default {
    computed: {
        ...mapGetters('auth', ['isAuthenticated']),
    },
    methods: {
        ...mapActions('auth', ['logout']),
    },
    components: {
        Cart
    }
};
</script>