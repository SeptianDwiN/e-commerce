import { createStore } from "vuex";
import auth from "./module/auth";
import brand from "./module/brand";
import produk from "./module/produk";
import category from "./module/category";
import user from "./module/user";
import cart from "./module/cart";

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
    cart
  },
});

export default store;