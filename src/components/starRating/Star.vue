<template>
  <button class="star" :style="starStyle"></button>
</template>

<script>
export default {
  name: "Star",
  props: {
    width: {
      type: [String, Number],
      required: false,
      default: 25
    },
    height: {
      type: [String, Number],
      required: false,
      default: 25
    },
    fillColor: {
      type: String,
      required: false,
      default: "#FFEB0A"
    },
    emptyColor: {
      type: String,
      required: false,
      default: "#ABABAB"
    },
    value: {
      type: Number,
      required: false,
      default: 1
    }
  },
  computed: {
    starStyle() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        background: `linear-gradient(90deg, ${this.fillColor} ${
          this.percentage
        }, ${this.emptyColor} ${this.percentage})`
      };
    },
    percentage() {
      return `${this.value * 100}%`;
    }
  }
};
</script>

<style lang="scss" scoped>
.star{
  clip-path: polygon(
    50% 0%,
    61% 35%,
    100% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    0% 35%,
    39% 35%
  );
  z-index: 0;
}
</style>