import { shallowMount } from "@vue/test-utils";
import RecipeNutrients from "@/components/RecipeNutrients.vue";

import "@/lib/fiters";

describe("RecipeNutrients.vue", () => {
  describe("given I pass the sample props", () => {
    const wrapper = shallowMount(RecipeNutrients, {
      propsData: {
        nutrients: {
          carbs: 20,
          proteins: 16,
          fats: 6
        }
      }
    });

    test("it renders the carbs data", () => {
      expect(wrapper.find(".nutrient--carbs").text()).toBe("20g");
    });

    test("it renders the protein data", () => {
      expect(wrapper.find(".nutrient--proteins").text()).toBe("16g");
    });

    test("it renders the fats data", () => {
      expect(wrapper.find(".nutrient--fats").text()).toBe("6g");
    });
  });

  describe("given I pass values on the thousands", () => {
    const wrapper = shallowMount(RecipeNutrients, {
      propsData: {
        nutrients: {
          carbs: 3500,
          proteins: 2600,
          fats: 6000
        }
      }
    });

    test("it renders the carbs data with kilo suffix", () => {
      expect(wrapper.find(".nutrient--carbs").text()).toBe("3.5kg");
    });

    test("it renders the proteins data with kilo suffix", () => {
      expect(wrapper.find(".nutrient--proteins").text()).toBe("2.6kg");
    });

    test("it renders the fats data with kilo suffix", () => {
      expect(wrapper.find(".nutrient--fats").text()).toBe("6kg");
    });
  });
});
