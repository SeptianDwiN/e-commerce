import { createStore } from "vuex";
import auth from "./module/auth";

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    auth
  },
});

export default store;