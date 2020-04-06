import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import AppDetailCard from "@/components/cards/detail-recipe.vue";
describe("In app-card Component", () => {
  let appDetailCardWrapper;
  beforeEach(() => {
    const mealList = {
      idMeal: "52975",
      strMeal: "Tuna and Egg Briks",
      strDrinkAlternate: null,
      strCategory: "Seafood",
      strArea: "Tunisian",
      strInstructions:
        "Heat 2 tsp of the oil in a large saucepan and cook the spring onions over a low heat.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg",
      strTags: null,
      strYoutube: "https://www.youtube.com/watch?v=C5n1fN8TGHs",
      strIngredient1: "Olive Oil",
      strIngredient2: "Spring Onions",
      strIngredient3: "Spinach",
      strIngredient4: "Filo Pastry",
      strIngredient5: "Tuna",
      strIngredient6: "Eggs",
      strIngredient7: "Hotsauce",
      strIngredient8: "Tomatoes",
      strIngredient9: "Cucumber",
      strIngredient10: "Lemon Juice",
      strIngredient11: "Apricot Jam",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "2 tbs",
      strMeasure2: "8",
      strMeasure3: "200g",
      strMeasure4: "4",
      strMeasure5: "1 can ",
      strMeasure6: "2",
      strMeasure7: "Dash",
      strMeasure8: "4 Chopped",
      strMeasure9: "1/4 ",
      strMeasure10: "1 tbs",
      strMeasure11: "4 tbs",
      strMeasure12: " ",
      strMeasure13: " ",
      strMeasure14: " ",
      strMeasure15: " ",
      strMeasure16: " ",
      strMeasure17: " ",
      strMeasure18: " ",
      strMeasure19: " ",
      strMeasure20: " ",
      strSource:
        "http://allrecipes.co.uk/recipe/3096/tunisian-tuna-and-egg-briks.aspx",
      dateModified: null
    };
    const itemsList = [
      {
        idMeal: "52975",
        strMeal: "Tuna and Egg Briks",
        strDrinkAlternate: null,
        strCategory: "Seafood",
        strArea: "Tunisian",
        strInstructions:
          "Heat 2 tsp of the oil in a large saucepan and cook the spring onions over a low heat.",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg",
        strTags: null,
        strYoutube: "https://www.youtube.com/watch?v=C5n1fN8TGHs",
        strIngredient1: "Olive Oil",
        strIngredient2: "Spring Onions",
        strIngredient3: "Spinach",
        strIngredient4: "Filo Pastry",
        strIngredient5: "Tuna",
        strIngredient6: "Eggs",
        strIngredient7: "Hotsauce",
        strIngredient8: "Tomatoes",
        strIngredient9: "Cucumber",
        strIngredient10: "Lemon Juice",
        strIngredient11: "Apricot Jam",
        strIngredient12: "",
        strIngredient13: "",
        strIngredient14: "",
        strIngredient15: "",
        strIngredient16: "",
        strIngredient17: "",
        strIngredient18: "",
        strIngredient19: "",
        strIngredient20: "",
        strMeasure1: "2 tbs",
        strMeasure2: "8",
        strMeasure3: "200g",
        strMeasure4: "4",
        strMeasure5: "1 can ",
        strMeasure6: "2",
        strMeasure7: "Dash",
        strMeasure8: "4 Chopped",
        strMeasure9: "1/4 ",
        strMeasure10: "1 tbs",
        strMeasure11: "4 tbs",
        strMeasure12: " ",
        strMeasure13: " ",
        strMeasure14: " ",
        strMeasure15: " ",
        strMeasure16: " ",
        strMeasure17: " ",
        strMeasure18: " ",
        strMeasure19: " ",
        strMeasure20: " ",
        strSource:
          "http://allrecipes.co.uk/recipe/3096/tunisian-tuna-and-egg-briks.aspx",
        dateModified: null
      }
    ];
    Vue.use(Vuetify);
    Vue.use(VueRouter);
    appDetailCardWrapper = shallowMount(AppDetailCard, {
      Vue,
      propsData: {
        mealDetails: mealList,
        items: itemsList
      }
    });
  });

  afterEach(() => {
    appDetailCardWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(appDetailCardWrapper.isVueInstance).toBeTruthy();
  });
  it("it should have a <v-card> element", () => {
    expect(appDetailCardWrapper.contains("v-card-stub")).toBe(true);
  });
  it("it should have a <v-img> element", () => {
    expect(appDetailCardWrapper.contains("v-img-stub")).toBe(true);
  });
  it("it should have a <v-card-text> element", () => {
    expect(appDetailCardWrapper.contains("v-card-text-stub")).toBe(true);
  });
  it("it should have a <v-chip> element", () => {
    expect(appDetailCardWrapper.contains("v-chip-stub")).toBe(true);
  });
  it("it should have a <v-icon> element", () => {
    expect(appDetailCardWrapper.contains("v-icon-stub")).toBe(true);
  });
  it("it should have a <v-col> element", () => {
    expect(appDetailCardWrapper.contains("v-col-stub")).toBe(true);
  });
  it("check image props", () => {
    expect(appDetailCardWrapper.vm.mealDetails.strMealThumb).toBe(
      "https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg"
    );
  });
  it("check Title props", () => {
    expect(appDetailCardWrapper.vm.mealDetails.strMeal).toBe(
      "Tuna and Egg Briks"
    );
  });
  it("should open the url in window", () => {
    jest.spyOn(window, "open");
    appDetailCardWrapper.vm.youtubeNavigation();
    expect(window.open).toHaveBeenCalled;
  });
});
