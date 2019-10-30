import React from "react";
import Recipe from "./Recipe";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map(recipe => (
        <Recipe {...recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RecipeList;
