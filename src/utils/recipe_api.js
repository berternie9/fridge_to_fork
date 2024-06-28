import axios from "axios";

export async function createSpoonacularRecipe(recipeData, userId) {
  let res = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/api/recipeSpoonacular`,
    { recipeData, userId }
  );
  return res.data;
}

export async function createUserRecipe(recipeData, userId) {
  let res = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/api/recipeUser`,
    {
      recipeData,
      userId,
    }
  );
  return res.data;
}

export async function destroySpoonacularRecipe(recipeId, userId) {
  let res = await axios.delete(
    `${
      import.meta.env.VITE_BASE_URL
    }/api/recipeSpoonacular/${recipeId}/${userId}`
  );
  return res.data;
}

export async function destroyUserRecipe(recipeId, userId) {
  let res = await axios.delete(
    `${import.meta.env.VITE_BASE_URL}/api/recipeUser/${recipeId}/${userId}`
  );
  return res.data;
}

export async function findRecipeSpoonacularById(recipeId) {
  let res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/recipeSpoonacular/${recipeId}`
  );
  return res.data;
}

export async function findRecipeUserById(recipeId) {
  let res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/recipeUser/${recipeId}`
  );
  return res.data;
}

export async function findManyRecipesSpoonacularByUserId(userId) {
  let res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/recipeSpoonacular/recipes/${userId}`
  );
  return res.data;
}

export async function findManyRecipesUserByUserId(userId) {
  let res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/recipeUser/recipes/${userId}`
  );
  return res.data;
}
