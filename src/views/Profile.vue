<template>
    <br>
    <br>
    <br> 
    <center>
    <div class="m-10 max-w-sm">
  <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
    <div class="relative mx-auto w-36 rounded-full">
      <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
      <img class="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
    </div>
    <br>
    
    <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shzadow">
      <li class="flex items-center py-3 text-sm">
        <span>Name : </span>
        <span class="ml-auto">{{ getUser.name}}</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Email : </span>
        <span class="ml-auto">{{ getUser.email}}</span>
      </li>
      <li class="flex items-center py-3 text-sm text-right">
        <span>Alamat :  </span>
        <span class="ml-auto">{{ address.address }}</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Kota : </span>
        <span class="ml-auto"> {{ address.city }}</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Kota : </span>
        <span class="ml-auto"> {{ address.state }}</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Provinsi : </span>
        <span class="ml-auto"> {{ address.country }}</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Provinsi : </span>
        <span class="ml-auto"> {{ address.postal_code }}</span>
      </li>
    </ul>
  </div>
</div>
</center>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ... mapGetters('user', ['getUser']),
        ... mapGetters('auth', ['getAddress']),
        address(){  
      return this.getAddress.data[0]
    },
    },
    
    methods: {
        ...mapActions('user', ["fetchUser"]),
        ...mapActions('auth', ["getUserAddress"]),
    },
    created() {
      this.getUserAddress();
      this.fetchUser();
    },
}
</script>