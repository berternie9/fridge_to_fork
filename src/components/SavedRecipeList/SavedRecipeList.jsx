import { useEffect, useState, Fragment } from "react";
import styles from "./SavedRecipeList.module.css";
import * as RecipeApi from "../../utils/recipe_api.js";

import { experimentalStyled as styled } from "@mui/material/styles";
import { Box, Paper, Grid, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BookmarkRemoveOutlinedIcon from "@mui/icons-material/BookmarkRemoveOutlined";

export default function SavedRecipeList({
  updateSavedRecipeList,
  savedRecipeList,
  updateSavedRecipe,
  savedRecipe,
}) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    RecipeApi.findManyRecipesSpoonacularByUserId(1) // userId
      .then(updateSavedRecipeList);
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffffcc",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "1rem",
  }));

  async function getRecipe(recipeData) {
    updateSavedRecipe(recipeData);
  }

  function handleClose(e, reason) {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  }

  async function removeBookmarkClick(recipeData) {
    await RecipeApi.destroySpoonacularRecipe(recipeData.recipe_data.id, 1); // userId
    updateSavedRecipeList(
      savedRecipeList.filter(
        (recipe) => recipe.recipe_data.id !== recipeData.recipe_data.id
      )
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
    <Box sx={{ flexGrow: 1, m: 5, bgcolor: "var(--background-colour)" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 9, md: 12 }}
      >
        {savedRecipeList.map((recipeData) => (
          <Grid item xs={2} sm={3} md={3} key={recipeData.id}>
            <Item>
              <IconButton
                className={styles.bookmark}
                onClick={() => removeBookmarkClick(recipeData)}
              >
                <BookmarkRemoveOutlinedIcon></BookmarkRemoveOutlinedIcon>
              </IconButton>
              <section
                className={styles.recipeData}
                onClick={() => getRecipe(recipeData)}
              >
                <img
                  className={styles.img}
                  src={recipeData.recipe_data.image}
                  alt="recipe_img"
                />
                <div className={styles.title}>{recipeData.title}</div>
              </section>
            </Item>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Recipe unsaved."
        action={action}
      />
    </Box>
  );
}
