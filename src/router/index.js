import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/Login.vue"
import Register from "../components/Register.vue"
import Home from "../components/Home.vue"
import Produk from "../components/Produk.vue"


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