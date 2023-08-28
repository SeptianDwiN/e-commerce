import { createStore } from "vuex";
import auth from "./module/auth";
import brand from "./module/brand";
import produk from "./module/produk";
import category from "./module/category";
import user from "./module/user";
import cart from "./module/cart";
import order from "./module/order";

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    auth,
    brand,
    produk,
    category,
    user,
    cart,
    order
  },
});

export default store;