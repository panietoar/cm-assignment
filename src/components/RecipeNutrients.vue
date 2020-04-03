<template>
  <div class="recipe-nutrients">
    <span class="nutrient nutrient--carbs">{{ nutrients.carbs | engUnits }}g</span>
    <span class="nutrient nutrient--proteins">{{ nutrients.proteins | engUnits }}g</span>
    <span class="nutrient nutrient--fats">{{ nutrients.fats | engUnits }}g</span>
  </div>
</template>
<script>
export default {
  name: "RecipeNutrients",
  props: {
    nutrients: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .recipe-nutrients {
    align-items: center;
    display: flex;
    justify-content: space-evenly;

    .nutrient {
      color: var(--grey-nutrients);
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      position: relative;
      
      &:not(:last-of-type) {
        margin-right: 18px;
      }

      &::before {
        border-radius: 3px;
        content: "";
        height: 6px;
        left: -9px;
        position: absolute;
        top: 4px;
        width: 6px;
      }

      &--carbs {
        &::before {
          background-color: var(--carbs-red);
        }
      }

      &--proteins {
        &::before {
          background-color: var(--proteins-blue);
        }
      }

      &--fats {
        &::before {
          background-color: var(--fats-yellow);
        }
      }
    }
  }
</style>