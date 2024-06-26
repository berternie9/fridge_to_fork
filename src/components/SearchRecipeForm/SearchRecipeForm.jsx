import { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Chip,
  Stack,
  Container,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@mui/material";

import styles from "./SearchRecipeForm.module.css";

export default function SearchRecipeForm({
  updateRecipeSearchParams,
  recipeSearchParams,
  updateRecipe,
}) {
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");

  function handleAddIngredient(e) {
    if (ingredient !== "" && !ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
      setIngredient("");
    }
  }

  function deleteIngredient(ingredientToDelete) {
    setIngredients(ingredients.filter((ing) => ing !== ingredientToDelete));
  }

  //

  function handleCuisineChange(e) {
    setCuisine(e.target.value);
  }

  const cuisines = [
    "African",
    "Asian",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ];

  //

  function handleDietChange(e) {
    setDiet(e.target.value);
  }

  const diets = [
    "Gluten Free",
    "Ketogenic",
    "Vegetarian",
    "Lacto-Vegetarian",
    "Ovo-Vegetarian",
    "Vegan",
    "Pescetarian",
    "Paleo",
    "Primal",
    "Low FODMAP",
    "Whole30",
  ];

  function handleSearchClick(e) {
    const newIngredientsCsv = ingredients.join(",");
    const cuisineNormalised = cuisine.replace(/\s/g, "+").toLowerCase();
    const dietNormalised = diet.replace(/\s/g, "+").toLowerCase();
    updateRecipeSearchParams({
      ...recipeSearchParams,
      includeIngredients: newIngredientsCsv,
      cuisine: cuisineNormalised,
      diet: dietNormalised,
    });

    updateRecipe({
      ingredients: [],
      instructions: [],
      image: "",
      title: "",
    });
  }

  return (
    <Container className={styles.container} maxWidth="xl">
      <Typography className={styles.searchTitle} variant="h4" component="h4">
        🤔.. 🧑‍🍳.. 🥘.. 😋
      </Typography>

      <div className={styles.cuisineSearch}>
        <FormControl variant="outlined" sx={{ minWidth: 240 }}>
          <InputLabel id="cuisine-select-label">Cuisine</InputLabel>
          <Select
            labelId="cuisine-select-label"
            id="cuisine-select"
            value={cuisine}
            label="Cuisine"
            onChange={handleCuisineChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {cuisines.map((cuisine, idx) => (
              <MenuItem key={idx} value={cuisine}>
                {cuisine}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className={styles.dietSearch}>
        <FormControl variant="outlined" sx={{ minWidth: 240 }}>
          <InputLabel id="diet-select-label">Diet</InputLabel>
          <Select
            labelId="diet-select-label"
            id="diet-select"
            value={diet}
            label="Diet"
            onChange={handleDietChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {diets.map((diet, idx) => (
              <MenuItem key={idx} value={diet}>
                {diet}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className={styles.ingredientSearch}>
        <TextField
          label="Ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          variant="outlined"
          sx={{ minWidth: 240 }}
          className={styles.ingredientSearchField}
        />
        <Button
          onClick={handleAddIngredient}
          className={styles.addBtn}
          variant="text"
          size="small"
        >
          Add Ingredient
        </Button>
        <Stack direction="row" spacing={1} style={{ margin: 20 }}>
          {ingredients.map((ing, index) => (
            <Chip
              key={index}
              label={ing}
              onDelete={() => deleteIngredient(ing)}
            />
          ))}
        </Stack>
        <Button
          variant="outlined"
          className={styles.searchBtn}
          onClick={handleSearchClick}
        >
          Search
        </Button>
      </div>
    </Container>
  );
}
