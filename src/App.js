import React from "react";
import RecipeList from "./RecipeList";

function App() {
  return <RecipeList recipes={sampleRecipe} />;
}

const sampleRecipe = [
  {
    id: 1,
    name: "Plain Chicken",
    serving: 3,
    cookTime: "1:45",
    instruction:
      "1. Put Salt On Chicken\n2. Put Salt On Chicken\n3. Put Salt On Chicken\n"
  },
  {
    id: 2,
    name: "Plain Beef",
    serving: 2,
    cookTime: "5:45",
    instruction: "1. Put Salt On Chicken\n2. Put Salt On Chicken\n"
  }
];

export default App;
