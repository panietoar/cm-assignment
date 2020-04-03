<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <img alt="Carb Manager" src="./assets/cm-logo.svg" class="cm-logo" />
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>

      <div class="premium-recipe-wrapper">
        <PremiumRecipeCard :recipe="chickenRecipe" />
      </div>
    </div>
  </div>
</template>

<script>
import PremiumRecipeCard from "./components/PremiumRecipeCard.vue";

export default {
  name: "App",
  components: {
    PremiumRecipeCard
  },
  data() {
    return {
      chickenRecipe: {
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
        favorite: true,
        image: require("@/assets/chicken-thai.jpg"),
      }
    }
  }
};
</script>

<style>
:root {
  --primary-font-color: #393C40;
  --heading-font-color: #0C0C0A;
  --grey-nutrients: #6F737A;

  --carbs-red: #F94642;
  --proteins-blue: #3177BB;
  --fats-yellow: #FDA120;

  --ratings-green: #1CA677;
}

#app {
  font-family: "proxima-nova", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
.cm-logo-wrapper {
  margin-bottom: 30px;
}

.cm-logo {
  max-width: 150px;
  height: auto;
}

.cm-container {
  max-width: 960px;
  margin: auto;
}

/** Remove these styles when done */
.premium-recipe-wrapper {
  margin-top: 100px;
  border: 2px dashed red;
  padding: 16px;
  background-color: #eee;
}
</style>
