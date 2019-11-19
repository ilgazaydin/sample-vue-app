import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  getters: {
    products: state => {
      return state.products;
    },
    product: state => {
      return state.product;
    }
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    SET_PRODUCT: (state, product) => {
      state.product = product;
    }
  },
  actions: {
    fetchProducts: async ({ commit }) => {
      const { data } = await Vue.prototype.$http.get("models");
      commit("SET_PRODUCTS", data);
    },
    fetchProduct: async ({ commit }, productId) => {
      commit("SET_PRODUCT", {});

      const { data } = await Vue.prototype.$http.get("model/" + productId);
      commit("SET_PRODUCT", data);
    }
  },
  modules: {}
});
