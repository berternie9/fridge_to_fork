import { useEffect, useState, Fragment } from "react";
import styles from "./RecipeList.module.css";
import * as SpoonacularApi from "../../utils/spoonacular_api.js";
import * as RecipeApi from "../../utils/recipe_api.js";

import { experimentalStyled as styled } from "@mui/material/styles";
import { Box, Paper, Grid, IconButton, Button, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";

export default function RecipeList({
  updateRecipeList,
  recipeList,
  recipeSearchParams,
  updateRecipe,
}) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // useEffect(() => {
  //   const { includeIngredients, cuisine, diet } = recipeSearchParams;
  //   SpoonacularApi
  //     .findMany(includeIngredients, cuisine, diet)
  //     .then(updateRecipeList);
  // }, [recipeSearchParams]);

  useEffect(() => {
    const timer = setTimeout(() => {
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

      // updateRecipe({
      //   ingredients: [
      //     {
      //       name: "baking powder",
      //       image: "white-powder.jpg",
      //       amount: {
      //         metric: {
      //           value: 1,
      //           unit: "tsp",
      //         },
      //         us: {
      //           value: 1,
      //           unit: "tsp",
      //         },
      //       },
      //     },
      //     {
      //       name: "baking soda",
      //       image: "white-powder.jpg",
      //       amount: {
      //         metric: {
      //           value: 0.5,
      //           unit: "tsps",
      //         },
      //         us: {
      //           value: 0.5,
      //           unit: "tsps",
      //         },
      //       },
      //     },
      //     {
      //       name: "bourbon",
      //       image: "bourbon.png",
      //       amount: {
      //         metric: {
      //           value: 120,
      //           unit: "ml",
      //         },
      //         us: {
      //           value: 0.5,
      //           unit: "cup",
      //         },
      //       },
      //     },
      //     {
      //       name: "plus 3 tablespoons buttermilk",
      //       image: "buttermilk.jpg",
      //       amount: {
      //         metric: {
      //           value: 360,
      //           unit: "ml",
      //         },
      //         us: {
      //           value: 1.5,
      //           unit: "cups",
      //         },
      //       },
      //     },
      //     {
      //       name: "confectioners' sugar",
      //       image: "powdered-sugar.jpg",
      //       amount: {
      //         metric: {
      //           value: 6,
      //           unit: "servings",
      //         },
      //         us: {
      //           value: 6,
      //           unit: "servings",
      //         },
      //       },
      //     },
      //     {
      //       name: "eggs",
      //       image: "egg.png",
      //       amount: {
      //         metric: {
      //           value: 2,
      //           unit: "large",
      //         },
      //         us: {
      //           value: 2,
      //           unit: "large",
      //         },
      //       },
      //     },
      //     {
      //       name: "flour",
      //       image: "flour.png",
      //       amount: {
      //         metric: {
      //           value: 187.5,
      //           unit: "g",
      //         },
      //         us: {
      //           value: 1.5,
      //           unit: "cups",
      //         },
      //       },
      //     },
      //     {
      //       name: "granulated sugar",
      //       image: "sugar-in-bowl.png",
      //       amount: {
      //         metric: {
      //           value: 2,
      //           unit: "Tbsps",
      //         },
      //         us: {
      //           value: 2,
      //           unit: "Tbsps",
      //         },
      //       },
      //     },
      //     {
      //       name: "kosher salt",
      //       image: "salt.jpg",
      //       amount: {
      //         metric: {
      //           value: 6,
      //           unit: "servings",
      //         },
      //         us: {
      //           value: 6,
      //           unit: "servings",
      //         },
      //       },
      //     },
      //     {
      //       name: "light brown sugar",
      //       image: "dark-brown-sugar.png",
      //       amount: {
      //         metric: {
      //           value: 1,
      //           unit: "Tbsp",
      //         },
      //         us: {
      //           value: 1,
      //           unit: "Tbsp",
      //         },
      //       },
      //     },
      //     {
      //       name: "light brown sugar",
      //       image: "light-brown-sugar.jpg",
      //       amount: {
      //         metric: {
      //           value: 1,
      //           unit: "Tbsp",
      //         },
      //         us: {
      //           value: 1,
      //           unit: "Tbsp",
      //         },
      //       },
      //     },
      //     {
      //       name: "maple syrup",
      //       image: "maple-syrup.png",
      //       amount: {
      //         metric: {
      //           value: 6,
      //           unit: "servings",
      //         },
      //         us: {
      //           value: 6,
      //           unit: "servings",
      //         },
      //       },
      //     },
      //     {
      //       name: "molasses",
      //       image: "molasses.jpg",
      //       amount: {
      //         metric: {
      //           value: 3,
      //           unit: "Tbsps",
      //         },
      //         us: {
      //           value: 3,
      //           unit: "Tbsps",
      //         },
      //       },
      //     },
      //     {
      //       name: "pecans",
      //       image: "pecans.jpg",
      //       amount: {
      //         metric: {
      //           value: 49.5,
      //           unit: "g",
      //         },
      //         us: {
      //           value: 0.5,
      //           unit: "cup",
      //         },
      //       },
      //     },
      //     {
      //       name: "pecans",
      //       image: "pecans.jpg",
      //       amount: {
      //         metric: {
      //           value: 6,
      //           unit: "servings",
      //         },
      //         us: {
      //           value: 6,
      //           unit: "servings",
      //         },
      //       },
      //     },
      //     {
      //       name: "sea salt",
      //       image: "salt.jpg",
      //       amount: {
      //         metric: {
      //           value: 0.75,
      //           unit: "tsps",
      //         },
      //         us: {
      //           value: 0.75,
      //           unit: "tsps",
      //         },
      //       },
      //     },
      //     {
      //       name: "sugar",
      //       image: "sugar-in-bowl.png",
      //       amount: {
      //         metric: {
      //           value: 1,
      //           unit: "Tbsp",
      //         },
      //         us: {
      //           value: 1,
      //           unit: "Tbsp",
      //         },
      //       },
      //     },
      //     {
      //       name: "unsalted butter",
      //       image: "butter-sliced.jpg",
      //       amount: {
      //         metric: {
      //           value: 227,
      //           unit: "g",
      //         },
      //         us: {
      //           value: 1,
      //           unit: "cup",
      //         },
      //       },
      //     },
      //     {
      //       name: "unsalted butter",
      //       image: "butter-sliced.jpg",
      //       amount: {
      //         metric: {
      //           value: 3,
      //           unit: "Tbsps",
      //         },
      //         us: {
      //           value: 3,
      //           unit: "Tbsps",
      //         },
      //       },
      //     },
      //     {
      //       name: "split vanilla bean bean",
      //       image: "vanilla.jpg",
      //       amount: {
      //         metric: {
      //           value: 0.5,
      //           unit: "",
      //         },
      //         us: {
      //           value: 0.5,
      //           unit: "",
      //         },
      //       },
      //     },
      //     {
      //       name: "vanilla extract",
      //       image: "vanilla-extract.jpg",
      //       amount: {
      //         metric: {
      //           value: 1,
      //           unit: "tsp",
      //         },
      //         us: {
      //           value: 1,
      //           unit: "tsp",
      //         },
      //       },
      //     },
      //   ],
      //   instructions: [
      //     {
      //       name: "",
      //       steps: [
      //         {
      //           number: 1,
      //           step: "Preheat the oven to 200 degrees F.",
      //           ingredients: [],
      //           equipment: [
      //             {
      //               id: 404784,
      //               name: "oven",
      //               localizedName: "oven",
      //               image:
      //                 "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
      //               temperature: {
      //                 number: 200,
      //                 unit: "Fahrenheit",
      //               },
      //             },
      //           ],
      //         },
      //         {
      //           number: 2,
      //           step: "Whisk together the flour, pecans, granulated sugar, light brown sugar, baking powder, baking soda, and salt in a medium bowl.",
      //           ingredients: [
      //             {
      //               id: 19334,
      //               name: "light brown sugar",
      //               localizedName: "light brown sugar",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/light-brown-sugar.jpg",
      //             },
      //             {
      //               id: 10719335,
      //               name: "granulated sugar",
      //               localizedName: "granulated sugar",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png",
      //             },
      //             {
      //               id: 18369,
      //               name: "baking powder",
      //               localizedName: "baking powder",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
      //             },
      //             {
      //               id: 18372,
      //               name: "baking soda",
      //               localizedName: "baking soda",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
      //             },
      //             {
      //               id: 12142,
      //               name: "pecans",
      //               localizedName: "pecans",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/pecans.jpg",
      //             },
      //             {
      //               id: 20081,
      //               name: "all purpose flour",
      //               localizedName: "all purpose flour",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/flour.png",
      //             },
      //             {
      //               id: 2047,
      //               name: "salt",
      //               localizedName: "salt",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg",
      //             },
      //           ],
      //           equipment: [
      //             {
      //               id: 404661,
      //               name: "whisk",
      //               localizedName: "whisk",
      //               image:
      //                 "https://spoonacular.com/cdn/equipment_100x100/whisk.png",
      //             },
      //             {
      //               id: 404783,
      //               name: "bowl",
      //               localizedName: "bowl",
      //               image:
      //                 "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
      //             },
      //           ],
      //         },
      //         {
      //           number: 3,
      //           step: "Whisk together the eggs, buttermilk, butter and vanilla extract and vanilla bean in a small bowl.",
      //           ingredients: [
      //             {
      //               id: 2050,
      //               name: "vanilla extract",
      //               localizedName: "vanilla extract",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg",
      //             },
      //             {
      //               id: 93622,
      //               name: "vanilla bean",
      //               localizedName: "vanilla bean",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/vanilla.jpg",
      //             },
      //             {
      //               id: 1230,
      //               name: "buttermilk",
      //               localizedName: "buttermilk",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/buttermilk.jpg",
      //             },
      //             {
      //               id: 1001,
      //               name: "butter",
      //               localizedName: "butter",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
      //             },
      //             {
      //               id: 1123,
      //               name: "egg",
      //               localizedName: "egg",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
      //             },
      //           ],
      //           equipment: [
      //             {
      //               id: 404661,
      //               name: "whisk",
      //               localizedName: "whisk",
      //               image:
      //                 "https://spoonacular.com/cdn/equipment_100x100/whisk.png",
      //             },
      //             {
      //               id: 404783,
      //               name: "bowl",
      //               localizedName: "bowl",
      //               image:
      //                 "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
      //             },
      //           ],
      //         },
      //         {
      //           number: 4,
      //           step: "Add the egg mixture to the dry mixture and gently mix to combine. Do not overmix.",
      //           ingredients: [
      //             {
      //               id: 1123,
      //               name: "egg",
      //               localizedName: "egg",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
      //             },
      //           ],
      //           equipment: [],
      //         },
      //         {
      //           number: 5,
      //           step: "Let the batter sit at room temperature for at least 15 minutes and up to 30 minutes before using.",
      //           ingredients: [],
      //           equipment: [],
      //           length: {
      //             number: 15,
      //             unit: "minutes",
      //           },
      //         },
      //         {
      //           number: 6,
      //           step: "Heat a cast iron or nonstick griddle pan over medium heat and brush with melted butter. Once the butter begins to sizzle, use 2 tablespoons of the batter for each pancake and cook until the bubbles appear on the surface and the bottom is golden brown, about 2 minutes, flip over and cook until the bottom is golden brown, 1 to 2 minutes longer.",
      //           ingredients: [
      //             {
      //               id: 1001,
      //               name: "butter",
      //               localizedName: "butter",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
      //             },
      //           ],
      //           equipment: [
      //             {
      //               id: 404645,
      //               name: "frying pan",
      //               localizedName: "frying pan",
      //               image:
      //                 "https://spoonacular.com/cdn/equipment_100x100/pan.png",
      //             },
      //           ],
      //           length: {
      //             number: 3,
      //             unit: "minutes",
      //           },
      //         },
      //         {
      //           number: 7,
      //           step: "Transfer the pancakes to a platter and keep warm in a 200 degree F oven.",
      //           ingredients: [],
      //           equipment: [
      //             {
      //               id: 404784,
      //               name: "oven",
      //               localizedName: "oven",
      //               image:
      //                 "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
      //               temperature: {
      //                 number: 200,
      //                 unit: "Fahrenheit",
      //               },
      //             },
      //           ],
      //         },
      //         {
      //           number: 8,
      //           step: "Serve 6 pancakes per person, top each with some of the bourbon butter.",
      //           ingredients: [
      //             {
      //               id: 10014037,
      //               name: "bourbon",
      //               localizedName: "bourbon",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/bourbon.png",
      //             },
      //             {
      //               id: 1001,
      //               name: "butter",
      //               localizedName: "butter",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
      //             },
      //           ],
      //           equipment: [],
      //         },
      //         {
      //           number: 9,
      //           step: "Drizzle with warm maple syrup and dust with confectioners' sugar.",
      //           ingredients: [
      //             {
      //               id: 19336,
      //               name: "powdered sugar",
      //               localizedName: "powdered sugar",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/powdered-sugar.jpg",
      //             },
      //             {
      //               id: 19911,
      //               name: "maple syrup",
      //               localizedName: "maple syrup",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/maple-syrup.png",
      //             },
      //           ],
      //           equipment: [],
      //         },
      //         {
      //           number: 10,
      //           step: "Garnish with fresh mint sprigs and more toasted pecans, if desired.",
      //           ingredients: [
      //             {
      //               id: 2064,
      //               name: "fresh mint",
      //               localizedName: "fresh mint",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/mint.jpg",
      //             },
      //             {
      //               id: 12142,
      //               name: "pecans",
      //               localizedName: "pecans",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/pecans.jpg",
      //             },
      //           ],
      //           equipment: [],
      //         },
      //       ],
      //     },
      //     {
      //       name: "Bourbon Molasses Butter",
      //       steps: [
      //         {
      //           number: 1,
      //           step: "Combine the bourbon and sugar in a small saucepan and cook over high heat until reduced to 3 tablespoons, remove and let cool.",
      //           ingredients: [
      //             {
      //               id: 10014037,
      //               name: "bourbon",
      //               localizedName: "bourbon",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/bourbon.png",
      //             },
      //             {
      //               id: 19335,
      //               name: "sugar",
      //               localizedName: "sugar",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/sugar-in-bowl.png",
      //             },
      //           ],
      //           equipment: [
      //             {
      //               id: 404669,
      //               name: "sauce pan",
      //               localizedName: "sauce pan",
      //               image:
      //                 "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg",
      //             },
      //           ],
      //         },
      //         {
      //           number: 2,
      //           step: "Put the butter, molasses, salt and cooled bourbon mixture in a food processor and process until smooth.",
      //           ingredients: [
      //             {
      //               id: 19304,
      //               name: "molasses",
      //               localizedName: "molasses",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/molasses.jpg",
      //             },
      //             {
      //               id: 10014037,
      //               name: "bourbon",
      //               localizedName: "bourbon",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/bourbon.png",
      //             },
      //             {
      //               id: 1001,
      //               name: "butter",
      //               localizedName: "butter",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
      //             },
      //             {
      //               id: 2047,
      //               name: "salt",
      //               localizedName: "salt",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg",
      //             },
      //           ],
      //           equipment: [
      //             {
      //               id: 404771,
      //               name: "food processor",
      //               localizedName: "food processor",
      //               image:
      //                 "https://spoonacular.com/cdn/equipment_100x100/food-processor.png",
      //             },
      //           ],
      //         },
      //         {
      //           number: 3,
      //           step: "Scrape into a bowl, cover with plastic wrap and refrigerate for at least 1 hour to allow the flavors to meld.",
      //           ingredients: [
      //             {
      //               id: 10018364,
      //               name: "wrap",
      //               localizedName: "wrap",
      //               image:
      //                 "https://spoonacular.com/cdn/ingredients_100x100/flour-tortilla.jpg",
      //             },
      //           ],
      //           equipment: [
      //             {
      //               id: 404730,
      //               name: "plastic wrap",
      //               localizedName: "plastic wrap",
      //               image:
      //                 "https://spoonacular.com/cdn/equipment_100x100/plastic-wrap.jpg",
      //             },
      //             {
      //               id: 404783,
      //               name: "bowl",
      //               localizedName: "bowl",
      //               image:
      //                 "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
      //             },
      //           ],
      //           length: {
      //             number: 60,
      //             unit: "minutes",
      //           },
      //         },
      //         {
      //           number: 4,
      //           step: "Remove from the refrigerator about 30 minutes before using to soften.",
      //           ingredients: [],
      //           equipment: [],
      //           length: {
      //             number: 30,
      //             unit: "minutes",
      //           },
      //         },
      //       ],
      //     },
      //   ],
      //   image: "https://spoonacular.com/recipeImages/715538-312x231.jpg",
      //   title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      //   id: "324694",
      // });
      return () => clearTimeout(timer);
    }, 1000);
  }, [updateRecipeList]);

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

    await RecipeApi.createSpoonacularRecipe(recipeData, 1); // userId
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
