import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Home from "../views/Home.vue"
import Produk from "../views/Produk.vue"
import SingleProduk from "../views/SingleProduk.vue"
import Contact from "../views/Contact.vue"
import Cart from "../views/Cart.vue"
import Checkout from "../views/Checkout.vue"
import Brand from "../views/Brand.vue"
import Category from "../views/Category.vue";
import Profile from "../views/Profile.vue";
import Order from "../views/Order.vue"


const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requireGuest: true  },
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
        path: "/produk/:slug",
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
        component: () => import("../views/Cart.vue"),
        // meta: {requireLogin: true},
      
      },
      {
        path: "/checkout",
        name: "Checkout",
        component: () => import("../views/Checkout.vue"),
        meta: { requiresLogin: true },
      },
      {
        path: "/brand",
        name: "Brand",
        component: Brand,
     
      },
      {
        path: "/category",
        name: "Category",
        component: Category,
      
      },
      {
        path: "/profile",
        name: "Profile",
        beforeEnter: cekToken,
        component: Profile,
      
      },
      {
        path: "/order/:orderCode",
        name: "Order",
        component: Order,
        props: true,
      }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
function cekToken(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("token")) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next();
  } else {
    next("/login");
  }
}


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