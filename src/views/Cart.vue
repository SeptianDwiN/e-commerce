<template>
  <div>
    <h1 class="mb-10 text-center text-2xl font-bold">Item Epep</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
        <div v-for="cart in getCart" :key="cart.cart_id">
        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img src="../assets/img/compas3.jpg" alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">{{ cart.name }}</h2>
              <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <button type="button" class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" @click=" changeQty({ cartId: cart.cart_id, typeQty : 'minus'})" > - </button>
                <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="" :value="cart.qty" min="1" />
                <button type="button" class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" @click=" changeQty( {cartId: cart.cart_id, typeQty : 'plus'})" > + </button>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-sm">Rp. {{ cart.regular_price }}</p>
                <button type="button" @click="removeItem(cart.cart_id)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <!-- Sub total -->
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">Rp.{{totalHarga() }}</p>
        </div>
        <!-- <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">5000</p>
        </div> -->
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">Rp.{{totalHarga() }}</p>
           
          </div>
        </div>
        <router-link to="/checkout">
        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </router-link>
      </div>
    </div>
 
  </div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
      
        ...mapGetters('cart', ['getCart']),
        
    },
    methods: {
        ...mapActions('cart', ['fetchCart']),
        ...mapActions('produk', ['fetchProduk']),
        totalHarga() {
          this.total = this.getCart.reduce((acc, produk) => {
            return acc + parseFloat(produk.regular_price * produk.qty);
          }, 0);
          return this.total.toFixed(2);
        },


        //remove produk from cart 
        removeItem(cartId){
          this.$store.dispatch('cart/removeFromCart', cartId)
        },
        //
        changeQty(cartId, typeQty) {
          this.$store.dispatch('cart/changeQuantityCart', cartId, typeQty)
        },

    },
  
    beforeMount() {
      this.fetchProduk();
    },
    mounted() {
        this.fetchCart();
    }
}
</script>