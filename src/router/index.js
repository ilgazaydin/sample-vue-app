import Vue from "vue";
import VueRouter from "vue-router";
import ProductList from "../views/ProductList";
import ProductDetail from "../views/ProductDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: ProductList
  },
  {
    path: "/product/:productId",
    component: ProductDetail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
