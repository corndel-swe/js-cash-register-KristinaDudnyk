/**
 * Given an array of recipes, return a new array of strings containing
 * the name of each recipe
 */
function listNames(recipes) {
  let recipesNames = [];
  for (let rec of recipes) {
    recipesNames.push(rec.name);
  }
  return recipesNames;
}

// array provided for debugging:
const recipes = [
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
];

// don't change below
export default listNames;
