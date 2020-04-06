import httpClient from "@/services/common/http-client/http-client.js";

const getRandomMeal = () => {
  return httpClient.get("/random.php").then(res => res.data);
};
const getAllMealsBySearch = mealSearch => {
  return httpClient.get(`/search.php?f=${mealSearch}`).then(res => res.data);
};
export { getRandomMeal, getAllMealsBySearch };
