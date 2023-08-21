import axios from "axios";

const produk = {
    namespaced: true,
    state : {
        produkData: [],
    },
    getters: {
        getProduk: (state) => state.produkData,
        
    },
    actions: {
        async fetchProduk ({ commit }) {
            try {
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/product/latest/10:limit"
                );
                commit("SET_PRODUK", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_PRODUK(state, produk) {
            state.produkData = produk;
        },
    },
};

export default produk;