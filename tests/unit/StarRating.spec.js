import { shallowMount, mount } from "@vue/test-utils";
import Star from "@/components/starRating/Star.vue";
import StarRating from "@/components/starRating/StarRating.vue";

describe("Star.vue", () => {
  const wrapper = shallowMount(Star);

  describe("Given I don't pass any props", () => {
    test("it should have the default values", () => {
      expect(wrapper.props("width")).toBe(25);
      expect(wrapper.props("height")).toBe(25);
      expect(wrapper.props("fillColor")).toBe("#FFEB0A");
      expect(wrapper.props("emptyColor")).toBe("#ABABAB");
      expect(wrapper.props("value")).toBe(1);
    });
  });

  test("it should have the percentage computed value", () => {
    wrapper.setProps({ value: 0.5 });

    expect(wrapper.vm.percentage).toBe("50%");
  });
});

describe("StarRating.vue", () => {
  const wrapper = mount(StarRating, {
    propsData: {
      value: 3.5
    }
  });

  describe("Given I don't pass any props", () => {
    test("it should have the default values", () => {
      expect(wrapper.props("width")).toBe(25);
      expect(wrapper.props("height")).toBe(25);
      expect(wrapper.props("fillColor")).toBe("#FFEB0A");
      expect(wrapper.props("emptyColor")).toBe("#ABABAB");
      expect(wrapper.props("value")).toBe(3.5);
    });

    test("it should render 5 stars", () => {
      const stars = wrapper.findAll(".star");
      expect(stars.length).toBe(5);
    });
  });
});
