<template>
  <div class="product-detail">
    <product-card :product="product" :detailed="true"></product-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from "../components/ProductCard";

export default {
  name: "ProductDetail",

  components: {
    ProductCard
  },

  computed: {
    ...mapGetters(["product"])
  },

  mounted() {
    this.$store.dispatch("fetchProduct", this.$route.params.productId);
  }
};
</script>

<style lang="scss" scoped>
.product-detail {
  @include make-row();
  @include media-breakpoint-up(sm) {
    margin-top: $card-spacer-x * 2;
  }
}
</style>
