import axios from "axios";

export async function findMany(includeIngredients, cuisine, diet) {
  let res = await axios.get(
    `${
      import.meta.env.BASE_URL
    }/spoonacularApi/recipes?includeIngredients=${includeIngredients}&cuisine=${cuisine}&diet=${diet}`
  );
  return res.data.results;
}

export async function findRecipeInstructionsById(id) {
  let res = await axios.get(
    `${import.meta.env.BASE_URL}/spoonacularApi/recipeInstructions?id=${id}`
  );
  return res.data;
}

export async function findIngredientsByRecipeId(id) {
  let res = await axios.get(
    `${import.meta.env.BASE_URL}/spoonacularApi/recipeIngredients?id=${id}`
  );
  return res.data.ingredients;
}
