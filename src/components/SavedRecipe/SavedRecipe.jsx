import { Container, Grid, Box } from "@mui/material";
import styles from "./SavedRecipe.module.css";

export default function SavedRecipe({ savedRecipe }) {
  return (
    <>
      <Container className={styles.header} maxWidth="md">
        <img
          className={styles.image}
          src={savedRecipe.recipe_data.image}
          alt="recipe-img"
        />
        <div className={styles.titleWrapper}>
          <p className={styles.title}>{savedRecipe.title}</p>
        </div>
      </Container>

      <Box>
        <Grid
          className={styles.content}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid className={styles.ingredients} item xs={12} sm={6} md={3}>
            <p className={styles.contentHeader}>Ingredients:</p>
            <ul>
              {savedRecipe.recipe_data.ingredients.map((ingredient, idx) => (
                <li
                  key={idx}
                >{`${ingredient.name}: ${ingredient.amount.metric.value} ${ingredient.amount.metric.unit}`}</li>
              ))}
            </ul>
          </Grid>
          <Grid className={styles.instructions} item xs={12} sm={6} md={3}>
            <p className={styles.contentHeader}>Instructions:</p>
            {savedRecipe.recipe_data.instructions.map((element, idx) => (
              <section key={idx}>
                <p className={styles.contentSubheader}>{element.name}</p>
                <ol>
                  {element.steps.map((step, idx) => (
                    <li key={idx} className={styles.stepsWrapper}>
                      <p>{step.step}</p>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
