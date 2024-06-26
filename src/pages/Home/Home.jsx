import { useState, useEffect } from "react";
import axios from "axios";
import SearchRecipeForm from "../../components/SearchRecipeForm/SearchRecipeForm.jsx";
import RecipeList from "../../components/RecipeList/RecipeList.jsx";
import Recipe from "../../components/Recipe/Recipe.jsx";

export default function Home() {
  const [recipeSearchParams, setRecipeSearchParams] = useState({
    includeIngredients: "",
    cuisine: "",
    diet: "",
  });
  const [recipeList, setRecipeList] = useState([]);
  const [recipe, setRecipe] = useState({ ingredients: [], instructions: [] });

  function updateRecipeSearchParams(recipeSearchParams) {
    setRecipeSearchParams(recipeSearchParams);
  }

  function updateRecipeList(recipeList) {
    setRecipeList(recipeList);
  }

  function updateRecipe(recipe) {
    setRecipe(recipe);
  }

  return (
    <section>
      <SearchRecipeForm
        recipeSearchParams={recipeSearchParams}
        updateRecipeSearchParams={updateRecipeSearchParams}
      />
      {recipe.ingredients.length === 0 && recipe.instructions.length === 0 ? (
        <RecipeList
          updateRecipeList={updateRecipeList}
          recipeList={recipeList}
          recipeSearchParams={recipeSearchParams}
          updateRecipe={updateRecipe}
          recipe={recipe}
        />
      ) : (
        <Recipe />
      )}
    </section>
  );
}
