import { useEffect } from "react";
import styles from "./RecipeList.module.css";
import * as spoonacularApi from "../../utils/spoonacular_api.js";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function RecipeList({
  updateRecipeList,
  recipeList,
  recipeSearchParams,
  updateRecipe,
  recipe,
}) {
  // useEffect(() => {
  //   const { includeIngredients, cuisine, diet } = recipeSearchParams;
  //   spoonacularApi
  //     .findMany(includeIngredients, cuisine, diet)
  //     .then(updateRecipeList);
  // }, [recipeSearchParams]);

  setTimeout(() => {
    updateRecipeList([
      {
        id: 324694,
        title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        calories: 584,
        carbs: "84g",
        fat: "20g",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        imageType: "jpg",
        protein: "19g",
      },
      {
        id: 715538,
        title:
          "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
        calories: 521,
        carbs: "69g",
        fat: "10g",
        image: "https://spoonacular.com/recipeImages/715538-312x231.jpg",
        imageType: "jpg",
        protein: "35g",
      },
      {
        id: 716428,
        title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        calories: 584,
        carbs: "84g",
        fat: "20g",
        image: "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        imageType: "jpg",
        protein: "19g",
      },
      {
        id: 715537,
        title:
          "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
        calories: 521,
        carbs: "69g",
        fat: "10g",
        image: "https://spoonacular.com/recipeImages/715538-312x231.jpg",
        imageType: "jpg",
        protein: "35g",
      },
    ]);
  }, 1000);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffffcc",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "1rem",
  }));

  async function getRecipe(recipeItemId) {
    const recipeInstructions = await spoonacularApi.findRecipeInstructionsById(
      recipeItemId
    );
    const recipeIngredients = await spoonacularApi.findIngredientsByRecipeId(
      recipeItemId
    );
    updateRecipe({
      ingredients: recipeIngredients,
      instructions: recipeInstructions,
    });
  }

  return (
    <Box sx={{ flexGrow: 1, m: 5, bgcolor: "var(--background-colour)" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 9, md: 12 }}
      >
        {recipeList.map((recipeItem) => (
          <Grid
            item
            xs={2}
            sm={3}
            md={3}
            key={recipeItem.id}
            onClick={() => getRecipe(recipeItem.id)}
            className={styles.recipeItem}
          >
            <Item>
              <img
                className={styles.img}
                src={recipeItem.image}
                alt="recipe_img"
              />
              <div className={styles.title}>{recipeItem.title}</div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
