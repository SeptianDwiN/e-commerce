import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/Login.vue"
import Register from "../components/Register.vue"
import Home from "../views/Home.vue"
import Produk from "../views/Produk.vue"
import SingleProduk from "../views/SingleProduk.vue"
import Contact from "../views/Contact.vue"
import Cart from "../views/Cart.vue"
import Checkout from "../views/Checkout.vue"



const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
      },
     
      {
        path: "/register",
        name: "Register",
        component: Register,
     
      },
      {
        path: "/",
        name: "Home",
        component: Home,
     
      },
      {
        path: "/produk",
        name: "Produk",
        component: Produk,
      
      },
      {
        path: "/singleproduk",
        name: "SingleProduk",
        component: SingleProduk,
      
      },
      {
        path: "/contact",
        name: "Contact",
        component: Contact,
     
      },
      {
        path: "/cart",
        name: "Cart",
        component: Cart,
      
      },
      {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
      
      },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



// router.beforeEach((to, from, next) => {
//   if (to.meta.requireGuest && store.getters["auth/isAuthenticated"]) {
//       next("/");
//   } else {
//       next();
//   }
// });


// router.beforeEach((to, from, next) => {
//   if (to.meta.requireLogin && store.getters["auth/isAuthenticated"]) {
//       next("/Login");
//   } else {
//       next();
//   }
// });
export default router;