// Import intercepted by Jest to return mock getMeals function
import {
  getRandomMeal,
  getAllMealsBySearch
} from "@/services/meal-recipes/meal-recipes.js";
import httpClient from "@/services/common/http-client/http-client.js";

// Mock module with Jest mock functions
jest.mock("@/services/common/http-client/http-client.js");

describe("In Employee service, ", () => {
  it("getRandomMeal api should call", () => {
    const randomMeals = ["chicken", "Mutton", "Fish"];
    httpClient.get.mockResolvedValue(randomMeals);
    getRandomMeal().then(result => {
      expect(result).toEqual(randomMeals);
    });
  });

  it("getAllMealsBySearch api should call", () => {
    const initialMeal = "Fish fry";
    httpClient.get.mockResolvedValue(initialMeal);
    getAllMealsBySearch().then(result => {
      expect(result).toEqual(initialMeal);
    });
  });
});
