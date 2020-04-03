import { shallowMount } from "@vue/test-utils";
import PremiumRecipeCard from "@/components/PremiumRecipeCard.vue";

import "@/lib/fiters";

let propsData = {
  recipe: {
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
};


describe("PremiumRecipeCard.vue", () => {

  describe("given I pass the sample props", () => {
    const wrapper = shallowMount(PremiumRecipeCard, {
      propsData
    });

    test("it renders the recipe name", () => {
      expect(wrapper.find(".card-info__heading").text()).toBe(propsData.recipe.name);
    });

    test("it renders the total of ratings", () => {
      expect(wrapper.find(".ratings-total").text()).toBe(`${propsData.recipe.totalRatings} ratings`);
    });

    test("it renders the cooking time", () => {
      expect(wrapper.find(".details__cook-time").text()).toBe(`${propsData.recipe.cookingTime} min`);
    });

    test("it renders the calories", () => {
      expect(wrapper.find(".details__calories").text()).toBe(`${propsData.recipe.calories} Calories`);
    });
    
    test("it has the correct props for sub-components", () => {
      expect(wrapper.props().recipe.nutrients).toBe(propsData.recipe.nutrients);
      expect(wrapper.props().recipe.rating).toBe(propsData.recipe.rating);
    });
  });

  describe("given I pass 'calories' energyUnit prop", () => {
    propsData.energyUnits = "calories";
    const wrapper = shallowMount(PremiumRecipeCard, {
      propsData
    });
    test("it renders energy in calories unit", () => {
      expect(wrapper.find(".details__calories").text()).toBe(`${propsData.recipe.calories} Calories`);
    });
  });

  describe("given I pass 'kilojoules' energyUnit prop", () => {
    propsData.energyUnits = "kilojoules";
    const wrapper = shallowMount(PremiumRecipeCard, {
      propsData
    });
    const expected = 2046;
    test("it renders energy in calories unit", () => {
      expect(wrapper.find(".details__calories").text()).toBe(`${expected} kJ`);
    });
  });

  describe("given I pass a truthy favorite prop", () => {
    const wrapper = shallowMount(PremiumRecipeCard, {
      propsData
    });
    test("it only renders the filled heart", () => {
      expect(wrapper.find('.card-image__favorite--filled').isVisible()).toBeTruthy();
      expect(wrapper.find('.card-image__favorite--outline').exists()).toBeFalsy();
    });
  });

  describe("given I pass a falsy favorite prop", () => {
    propsData.recipe.favorite = false;
    const wrapper = shallowMount(PremiumRecipeCard, {
      propsData
    });
    test("it only renders the outline heart", () => {
      expect(wrapper.find('.card-image__favorite--filled').exists()).toBeFalsy();
      expect(wrapper.find('.card-image__favorite--outline').isVisible()).toBeTruthy();
    });
  });

});
