import { useEffect, useState, Fragment } from "react";
import styles from "./RecipeList.module.css";
import * as SpoonacularApi from "../../utils/spoonacular_api.js";
import * as RecipeApi from "../../utils/recipe_api.js";

import { experimentalStyled as styled } from "@mui/material/styles";
import { Box, Paper, Grid, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";

export default function RecipeList({
  updateRecipeList,
  recipeList,
  recipeSearchParams,
  updateRecipe,
}) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const { includeIngredients, cuisine, diet } = recipeSearchParams;
    SpoonacularApi.findMany(includeIngredients, cuisine, diet).then(
      updateRecipeList
    );
  }, [recipeSearchParams]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffffcc",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "1rem",
  }));

  async function getRecipe(recipeItem) {
    const recipeInstructions = await SpoonacularApi.findRecipeInstructionsById(
      recipeItem.id
    );
    const recipeIngredients = await SpoonacularApi.findIngredientsByRecipeId(
      recipeItem.id
    );
    updateRecipe({
      ingredients: recipeIngredients,
      instructions: recipeInstructions,
      image: recipeItem.image,
      title: recipeItem.title,
      id: recipeItem.id,
    });
  }

  function handleClose(e, reason) {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  }

  async function addBookmarkClick(recipeItem) {
    const recipeInstructions = await SpoonacularApi.findRecipeInstructionsById(
      recipeItem.id
    );
    const recipeIngredients = await SpoonacularApi.findIngredientsByRecipeId(
      recipeItem.id
    );
    const recipeData = {
      ingredients: recipeIngredients,
      instructions: recipeInstructions,
      image: recipeItem.image,
      title: recipeItem.title,
      id: recipeItem.id,
    };

    await RecipeApi.createSpoonacularRecipe(
      recipeData,
      localStorage.getItem("userId")
    );
    setSnackbarOpen(true);
  }

  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <Box sx={{ flexGrow: 1, m: 5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 9, md: 12 }}
      >
        {recipeList.map((recipeItem) => (
          <Grid item xs={2} sm={3} md={3} key={recipeItem.id}>
            <Item>
              <IconButton
                className={styles.bookmark}
                onClick={() => addBookmarkClick(recipeItem)}
              >
                <BookmarkAddOutlinedIcon></BookmarkAddOutlinedIcon>
              </IconButton>
              <section
                className={styles.recipeItem}
                onClick={() => getRecipe(recipeItem)}
              >
                <img
                  className={styles.img}
                  src={recipeItem.image}
                  alt="recipe_img"
                />
                <div className={styles.title}>{recipeItem.title}</div>
              </section>
            </Item>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Recipe saved."
        action={action}
      />
    </Box>
  );
}
