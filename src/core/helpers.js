const helpers = {
  formatPrice: (value = 0) => {
    return `£${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }
};

export default {
  install(Vue) {
    Vue.prototype.$helpers = helpers;
  }
};
