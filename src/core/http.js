import axios from "axios";
import { cacheAdapterEnhancer } from "axios-extensions";

const config = {
  baseURL: "https://warm-dawn-92320.herokuapp.com/",
  adapter: cacheAdapterEnhancer(axios.defaults.adapter)
};

const httpClient = axios.create(config);

httpClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default {
  install(Vue) {
    Vue.prototype.$http = httpClient;
  }
};
