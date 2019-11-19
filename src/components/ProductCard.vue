<template>
  <div class="product" v-if="product" :class="{ 'product--detailed': detailed }">
    <div class="product__image">
      <back-button v-if="detailed"></back-button>
      <figure>
        <img :src="product.img_url" />
      </figure>
    </div>
    <div class="product__info">
      <div class="product__info__header">
        <div class="product__title">
          <span class="product__brand text--bold">{{ product.make }}</span>
          <span class="product__model text--semi-bold">{{ product.model }}</span>
        </div>
        <div class="product__rating">
          <rating-circle :rating="product.carwow_rating"></rating-circle>
        </div>
      </div>
      <div class="product__rrp">
        <span class="text--medium">RRP</span>
        <span class="text--bold">{{ $helpers.formatPrice(product.rrp) }}</span>
      </div>
      <div v-if="product.recommended_engine" class="product__recommended-engine">
        <span class="text--medium">Recommended Engine</span>
        <span class="text--bold text--align-right">{{ product.recommended_engine }}</span>
      </div>
      <div v-if="product.available_colors" class="product__colors">
        <span class="product__colors__title text--medium">Available Colors</span>
        <ul class="product__colors__list">
          <li v-for="(color, index) in product.available_colors" :key="index">
            <span :style="{ backgroundColor: color }">{{ color }}</span>
          </li>
        </ul>
      </div>
      <div class="product__summary" :class="!detailed ? 'product__summary--collapsed' : ''">
        <p>{{ product.summary }}</p>
        <router-link v-if="!detailed" :to="`/product/${product.id}`" class="text-link text--medium"
          >... read more</router-link
        >
      </div>
      <div class="product__actions">
        <a v-if="detailed" class="btn btn--teal text--semi-bold">Get Offers!</a>
        <router-link v-else :to="`/product/${product.id}`" class="btn btn--teal text--semi-bold">Details</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import RatingCircle from "../components/RatingCircle";
import BackButton from "../components/BackButton";

export default {
  name: "ProductDetail",

  props: {
    product: Object,
    detailed: Boolean
  },

  components: {
    RatingCircle,
    BackButton
  }
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: $white;
  border: 1px solid $gray-200;
  border-radius: $border-radius;
  width: 100%;
  height: 100%;
  &--detailed {
    @include media-breakpoint-up(lg) {
      @include make-row();
      flex-direction: row;
    }
  }
  &--detailed & {
    &__image {
      @include make-col-ready();
      @include make-col(12);
      @include media-breakpoint-up(lg) {
        @include make-col(8);
        border-bottom: 1px solid $gray-200;
        border-radius: $border-radius;
      }
    }
    &__info {
      display: flex;
      flex-direction: column;
      @include make-col-ready();
      @include media-breakpoint-up(md) {
        @include make-col(12);
      }
      @include media-breakpoint-up(lg) {
        border-radius: $border-radius;
        @include make-col(4);
      }
    }
  }
  > * {
    padding: $card-spacer-x;
  }
  &__image {
    background: $bg-light;
    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      img {
        width: auto;
        max-width: 100%;
      }
    }
  }
  &__info {
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__brand {
    display: block;
    font-size: $font-size-lg;
  }
  &__model {
    font-size: $font-size-xl;
  }
  &__rrp {
    font-size: $font-size-md;
    padding-top: $card-spacer-x;
    margin-top: $card-spacer-x;
    border-top: 1px solid $gray-200;
  }
  &__recommended-engine {
    font-size: $font-size-sm;
    padding-top: 14px;
  }
  &__summary {
    padding: $card-spacer-x 0;
    line-height: 1.5;
    text-align: justify;
    &--collapsed p {
      height: 40px;
      overflow: hidden;
    }
  }
  &__colors {
    font-size: $font-size-sm;
    padding-top: 14px;
    &__list {
      display: flex;
      list-style-type: none;
      li {
        margin-left: 4px;
      }
      span {
        display: block;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 100%;
        text-indent: -99999px;
        border: 1px solid $gray-200;
        box-shadow: inset -4px -4px 4px 0 rgba(0, 0, 0, 0.1);
      }
    }
  }
  &__actions {
    padding-top: 0;
    margin-top: auto;
  }
}
.back-button {
  position: absolute;
  top: $card-spacer-x / 2;
  left: $card-spacer-x / 2;
}
.text-link {
  position: absolute;
  background-color: $white;
  margin-top: 8px;
  z-index: 1;
  width: 82px;
  right: 20px;
  text-align: right;
  color: $teal;
}
</style>
