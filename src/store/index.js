import { createStore } from "vuex";
import auth from "./module/auth";
import brand from "./module/brand";
import produk from "./module/produk";

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    auth,
    brand,
    produk
  },
});

export default store;