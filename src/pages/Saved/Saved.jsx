import { useState } from "react";
import SavedRecipeList from "../../components/SavedRecipeList/SavedRecipeList.jsx";
import SavedRecipe from "../../components/SavedRecipe/SavedRecipe.jsx";

export default function Saved() {
  const [savedRecipeList, setSavedRecipeList] = useState([]);
  const [savedRecipe, setSavedRecipe] = useState({
    id: "",
    isOwnedByUser: null,
    title: "",
    user_id: "",
    recipe_data: {},
  });

  function updateSavedRecipeList(savedRecipeList) {
    setSavedRecipeList(savedRecipeList);
  }

  function updateSavedRecipe(savedRecipe) {
    setSavedRecipe(savedRecipe);
  }

  return (
    <section>
      {!savedRecipe.id ? (
        <SavedRecipeList
          updateSavedRecipeList={updateSavedRecipeList}
          savedRecipeList={savedRecipeList}
          updateSavedRecipe={updateSavedRecipe}
          savedRecipe={savedRecipe}
        />
      ) : (
        <SavedRecipe savedRecipe={savedRecipe} />
      )}
    </section>
  );
}
