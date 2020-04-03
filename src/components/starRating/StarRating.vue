<template>
  <div class="star-rating" justifyContent="space-between">
    <Star
      v-for="index in 5"
      v-bind="starStyles"
      :value="getStarValue(index)"
      :key="index"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import Star from "./Star.vue";

export default {
  name: "StarRating",
  props: {
    value: {
      type: Number,
      required: true,
      default: 0
    },
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
    }
  },
  components: {
    Star
  },
  computed: {
    starStyles() {
      return {
        size: this.size,
        fillColor: this.fillColor,
        emptyColor: this.emptyColor,
        outlineColor: this.outlineColor
      };
    }
  },
  methods: {
    getStarValue(starIndex) {
      return starIndex <= this.value
        ? 1
        : starIndex - this.value < 1
        ? this.value % 1
        : 0;
    }
  }
};
</script>

<style lang="scss">
.star-rating {
  display: flex;
  justify-content: space-between;
}
</style>
