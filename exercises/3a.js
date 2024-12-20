/**
 * Given a recipeBook containing recipes, returns the title of the last recipe
 * in the array
 */
function lastRecipe(recipeBook) {
  if (!recipeBook.recipes.length) {
    return undefined;
  }
  let lastRecipe = recipeBook.recipes[recipeBook.recipes.length - 1];
  return lastRecipe.name;
}

// we've provided a sample object for debugging:
const recipeBook = {
  title: "My Recipe Book",
  recipes: [
    {
      name: "Spaghetti Bolognese",
      ingredients: ["spaghetti", "beef", "tomato sauce"],
      servings: 4,
      isVegetarian: false,
    },

    {
      name: "Vegetable Stir Fry",
      ingredients: ["broccoli", "carrots", "bell peppers", "soy sauce"],
      servings: 2,
      isVegetarian: true,
    },
  ],
};

// don't change below
export default lastRecipe;
