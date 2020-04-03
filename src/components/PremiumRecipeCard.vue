<template>
  <div class="premium-recipe-card" @click="clicked">
    <div class="card-image" :style="imageStyle">
      <div class="card-image__overlay"></div>
      <img
        class="card-image__favorite card-image__favorite--filled"
        src="@/assets/heart-filled.svg"
        alt=""
        v-if="recipe.favorite"
      />
      <img
        class="card-image__favorite card-image__favorite--outline"
        src="@/assets/heart-outline.svg"
        alt=""
        v-else
      />
      <div class="card-image__badge">
        <img src="@/assets/trophy.svg" />
        <span>Premium Recipe</span>
      </div>
    </div>
    <div class="card-info">
      <h3 class="card-info__heading">{{ recipe.name }}</h3>
      <div class="card-info__ratings">
        <!-- Copied from my own authored nativescript-vue plugin https://github.com/panietoar/nativescript-vue-star-rating -->
        <StarRating
          :value="recipe.rating"
          fillColor="#FDA01E"
          emptyColor="#D5D7D9"
          width="12"
          height="20"
        />
        <span class="ratings-total"> {{ recipe.totalRatings }} ratings </span>
      </div>
      <div class="recipe-details">
        <div class="recipe-details__general">
          <div class="details details__cook-time">
            <img src="@/assets/clock.svg" alt="" />
            {{ recipe.cookingTime | cookingTime }}
          </div>
          <div class="details details__calories">
            <img src="@/assets/cals.svg" alt="" />
            {{ recipe.calories | caloriesConverter(energyUnits) }}
          </div>
        </div>
        <div class="recipe-details__nutrients">
          <Nutrients :nutrients="recipe.nutrients" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Nutrients from "./RecipeNutrients.vue";
import StarRating from "./starRating/StarRating.vue";

export default {
  name: "emiumRecipeCard",
  components: {
    Nutrients,
    StarRating
  },
  props: {
    recipe: {
      type: Object,
      required: true
    },
    energyUnits: {
      type: String,
      required: false,
      default: "calories"
    }
  },
  computed: {
    imageStyle() {
      return {
        backgroundImage: `url('${this.recipe.image}')`
      };
    }
  },
  methods: {
    clicked() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss">
.premium-recipe-card {
  --primary-font-color: #393c40;
  --heading-font-color: #0c0c0a;
  --grey-nutrients: #6f737a;

  --carbs-red: #f94642;
  --proteins-blue: #3177bb;
  --fats-yellow: #fda120;

  --ratings-green: #1ca677;

  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  max-width: 340px;

  .card-image {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    height: 200px;
    background-position: center center;
    background-size: cover;
    position: relative;
    transition: all 0.3s;

    &__overlay {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.0001) 0%,
        rgba(22, 27, 35, 0.2) 70.94%,
        rgba(26, 29, 34, 0.79) 106.25%
      );
    }

    &__favorite {
      position: absolute;
      right: 16px;
      top: 16px;
    }

    &__badge {
      align-items: center;
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 10px;
      bottom: 8px;
      color: white;
      display: flex;
      font-size: 12px;
      font-weight: 600;
      left: 8px;
      line-height: 12px;
      padding: 4px 8px;
      position: absolute;

      span {
        margin-left: 4px;
      }
    }
  }

  .card-info {
    padding: 8px 16px 16px 16px;
    text-align: left;

    &__heading {
      color: var(--heading-font-color);
      font-size: 18px;
      font-style: normal;
      font-weight: bold;
      line-height: 20px;
      line-clamp: 2;
      margin: 0;
      margin-bottom: 16px;
    }

    &__ratings {
      align-items: center;
      display: flex;
      margin-bottom: 10px;
    }

    .ratings-total {
      color: var(--ratings-green);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 14px;
      margin-left: 8px;
    }

    .recipe-details {
      align-items: center;
      display: flex;
      justify-content: space-between;

      &__general {
        align-items: center;
        color: var(--primary-font-color);
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        line-height: 14px;

        .details {
          align-items: center;
          display: flex;

          img {
            margin-right: 8px;
          }

          &__cook-time {
            margin-right: 16px;
          }
        }
      }

      &__nutrients {
        max-width: 120px;
      }
    }
  }

  &:hover {
    .card-image {
      filter: opacity(80%);
    }
  }
}
</style>
