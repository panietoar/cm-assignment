import { action } from "@storybook/addon-actions";
import { withKnobs, object, text } from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";
import "../src/lib/fiters.js";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs]
};

const defaultRecipe = {
  name: "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice",
  cookingTime: 24,
  calories: 489,
  nutrients: {
    carbs: 20,
    proteins: 16,
    fats: 6
  },
  rating: 3,
  totalRatings: 200,
  favorite: false,
  image:
    "https://i.pinimg.com/originals/4e/03/03/4e030374e8c4327e3ace652e0db77ba8.jpg"
};

export const Default = () => ({
  components: { PremiumRecipeCard },
  props: {
    recipe: {
      default: object("recipe", defaultRecipe)
    },
    energyUnits: {
      default: text("Energy units", "calories")
    }
  },
  template:
    "<PremiumRecipeCard :recipe='recipe' :energyUnits='energyUnits' @click='action' />",
  methods: { action: action("clicked") }
});
