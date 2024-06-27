import * as RecipeApi from "../../utils/recipe_api.js";
import styles from "./UserRecipes.module.css";
import { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

export default function UserRecipes() {
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [title, setTitle] = useState("");
  const [userRecipes, setUserRecipes] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [recipe, setRecipe] = useState({
    id: "",
    title: "",
    user_id: "",
    is_owned_by_user: null,
    recipe_data: {},
  });

  useEffect(() => {
    RecipeApi.findManyRecipesUserByUserId(localStorage.getItem("userId")).then(
      setUserRecipes
    );
  }, []);

  async function handleAddClick(e) {
    const userRecipe = {
      ingredients: ingredients.split("\n").map((ingredient) => {
        const [item, amount] = ingredient.split(" ");
        return { item, amount };
      }),
      instructions: instructions.split("\n"),
      title,
    };

    let recipe = await RecipeApi.createUserRecipe(
      userRecipe,
      localStorage.getItem("userId")
    );
    setUserRecipes([...userRecipes, recipe]);
    setIngredients("");
    setInstructions("");
    setTitle("");

    setSnackbarOpen(true);
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ffffffcc",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "1rem",
  }));

  async function getRecipe(recipeItem) {
    const recipeData = await RecipeApi.findRecipeUserById(recipeItem.id);
    setRecipe(recipeData);
  }

  function handleClose(e, reason) {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  }

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1, m: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 9, md: 12 }}
        >
          {userRecipes.map((recipeItem) => (
            <Grid item xs={2} sm={3} md={3} key={recipeItem.id}>
              <Item>
                <section
                  className={styles.recipeItem}
                  onClick={() => getRecipe(recipeItem)}
                >
                  <img
                    className={styles.img}
                    src={
                      "https://static.vecteezy.com/system/resources/previews/002/621/029/non_2x/chef-recipe-book-kitchen-utensil-line-style-icon-free-vector.jpg"
                    }
                    alt="recipe_img"
                  />
                  <div className={styles.recipeTitle}>{recipeItem.title}</div>
                </section>
              </Item>
            </Grid>
          ))}
        </Grid>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Recipe added."
          action={action}
        />
      </Box>

      <Container className={styles.header} maxWidth="xl">
        <div className={styles.titleWrapper}>
          <p className={styles.title}>Add a recipe</p>
        </div>
      </Container>

      <Box className={styles.contentBox}>
        <TextField
          className={styles.recipeTitle}
          id="outlined-multiline-flexible"
          label="Title"
          multiline
          maxRows={3}
          minRows={1}
          placeholder={`e.g. Butter Pesto Pasta`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Grid
          className={styles.content}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6} md={6}>
            <TextField
              className={styles.ingredients}
              id="outlined-multiline-flexible"
              label="Ingredients"
              multiline
              maxRows={10}
              minRows={8}
              placeholder={`e.g. Butter 50g\nPasta 100g\nPesto 2 tbsp`}
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              className={styles.instructions}
              id="outlined-multiline-flexible"
              label="Instructions"
              multiline
              maxRows={10}
              minRows={8}
              placeholder={`e.g. Boil pasta in water\nAdd butter\nAdd pesto`}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          variant="outlined"
          className={styles.addBtn}
          onClick={handleAddClick}
        >
          Add recipe
        </Button>
      </Box>
    </>
  );
}
