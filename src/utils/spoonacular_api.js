import axios from 'axios';

export async function findMany (includeIngredients, cuisine, diet, titleMatch) {
    let res = await axios.get(`/spoonacularApi/recipe/?includeIngredients=${includeIngredients}&cuisine=${cuisine}&diet=${diet}&titleMatch=${titleMatch}`);
    return res.data.results;
};