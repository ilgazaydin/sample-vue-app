<template>
  <div class="product-list">
    <ul class="grid">
      <li class="grid__item" v-for="product in products" :key="product.id">
        <product-card :product="product" :detailed="false"></product-card>
      </li>
    </ul>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard";
import { mapGetters } from "vuex";

export default {
  name: "ProductList",

  components: {
    ProductCard
  },

  computed: {
    ...mapGetters(["products"])
  },

  mounted() {
    this.$store.dispatch("fetchProducts");
  }
};
</script>

<style lang="scss" scoped>
.grid {
  @include make-row();
  @include media-breakpoint-up(sm) {
    margin-top: $card-spacer-x * 2;
  }
  &__item {
    display: block;
    margin-bottom: $card-spacer-x * 2;
    @include make-col-ready();
    @include make-col(12);
    @include media-breakpoint-up(sm) {
      padding-left: $card-spacer-x;
      padding-right: $card-spacer-x;
    }
    @include media-breakpoint-up(md) {
      @include make-col(6);
    }
    @include media-breakpoint-up(lg) {
      @include make-col(4);
    }
    @include media-breakpoint-up(xl) {
      @include make-col(4);
    }
    padding: 0;
  }
}
</style>
