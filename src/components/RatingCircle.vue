<template>
  <div class="rating-circle">
    <svg class="rating-circle__vector" viewBox="0 0 50 50" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
      <circle
        class="rating-circle__vector__background"
        stroke="#efefef"
        stroke-width="3"
        fill="none"
        cx="25"
        cy="25"
        r="20"
      />
      <circle
        class="rating-circle__vector__rating"
        stroke-width="3"
        fill="none"
        cx="25"
        cy="25"
        r="20"
        :stroke-dasharray="strokeDashoffset + ' ' + circumference"
      />
    </svg>
    <span class="rating-circle__value text--bold">{{ rating }} / 10</span>
  </div>
</template>

<script>
export default {
  name: "RatingCircle",
  props: {
    rating: Number
  },
  data() {
    return {
      circumference: 40 * Math.PI
    };
  },
  computed: {
    strokeDashoffset() {
      return this.circumference - ((100 - this.rating * 10) / 100) * this.circumference;
    }
  }
};
</script>

<style scoped lang="scss">
.rating-circle {
  position: relative;
  width: 50px;
  height: 50px;
  &__vector {
    transform: scale(1.2);
    &__background {
      stroke: $gray-200;
    }
    &__rating {
      stroke: $teal;
      transform: rotate(-90deg);
      transform-origin: center;
    }
  }
  &__value {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    width: 40px;
    text-align: center;
  }
}
</style>
