import { shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import Home from "@/views/Home.vue";
describe("In App Component", () => {
  let homeWrapper;
  beforeEach(() => {
    Vue.use(Vuetify);
    homeWrapper = shallowMount(Home, {
      Vue
    });
  });

  afterEach(() => {
    homeWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(homeWrapper.isVueInstance).toBeTruthy();
  });
  it("it should have a <v-autocomplete> element", () => {
    expect(homeWrapper.contains("v-autocomplete-stub")).toBe(true);
  });
  it("it should have a <v-col> element", () => {
    expect(homeWrapper.contains("v-col-stub")).toBe(true);
  });

  it("fetches results of search Meals", () => {
    homeWrapper.vm.getAllMealsBySearch = jest.fn(() =>
      Promise.resolve({
        meals: []
      })
    );
    homeWrapper.vm.makeSearch();
    expect(homeWrapper.vm.mealOptions.length).toBe(0);
  });
  it("pushing data of mealItems into Array and returning ", () => {
    // homeWrapper.vm.mealItems();
    expect(homeWrapper.vm.mealItems).toEqual("");
  });
});
