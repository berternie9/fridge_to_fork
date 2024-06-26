import axios from "axios";

export async function createSpoonacularRecipe(recipeData, userId = 1) {
  let res = await axios.post(`/api/recipeSpoonacular`, { recipeData, userId });
  return res.data;
}

export async function createUserRecipe(recipeData, userId = 1) {
  let res = await axios.post(`/api/recipeUser`, { recipeData, userId });
  return res.data;
}

export async function destroySpoonacularRecipe(recipeId, userId = 1) {
  let res = await axios.delete(`/api/recipeSpoonacular/${recipeId}/${userId}`);
  return res.data;
}

export async function destroyUserRecipe(recipeId, userId = 1) {
  let res = await axios.delete(`/api/recipeUser/${recipeId}/${userId}`);
  return res.data;
}

export async function findRecipeSpoonacularById(recipeId) {
  let res = await axios.get(`/api/recipeSpoonacular/${recipeId}`);
  return res.data;
}

export async function findRecipeUserById(recipeId) {
  let res = await axios.get(`/api/recipeUser/${recipeId}`);
  return res.data;
}

export async function findManyRecipesSpoonacularByUserId(userId = 1) {
  let res = await axios.get(`/api/recipeSpoonacular/recipes/${userId}`);
  return res.data;
}

export async function findManyRecipesUserByUserId(userId = 1) {
  let res = await axios.get(`/api/recipeUser/recipes/${userId}`);
  return res.data;
}
