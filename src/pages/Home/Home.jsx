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
    titleMatch: "",
  });
  const [recipeList, setRecipeList] = useState([]);
  const [recipe, setRecipe] = useState({});

  function updateRecipeSearchParams(
    includeIngredients,
    cuisine,
    diet,
    titleMatch
  ) {
    setRecipeSearchParams(includeIngredients, cuisine, diet, titleMatch);
  }

  function updateRecipeList(recipeList) {
    setRecipeList(recipeList);
  }

  return (
    <section>
      <SearchRecipeForm updateRecipeSearchParams={updateRecipeSearchParams} />
      {!recipe ? <RecipeList updateRecipeList={updateRecipeList} recipeList={recipeList} recipeSearchParams={recipeSearchParams}/> : <Recipe />}
    </section>
  );
}
