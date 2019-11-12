import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes, handleAddRecipe, handleDeleteRecipe }) => {
	return (
		<div className="recipe-list">
			<div>
				{recipes.map((recipe) => (
					<Recipe {...recipe} key={recipe.id} handleDeleteRecipe={handleDeleteRecipe} />
				))}
			</div>
			<div className="recipe-list__add-recipe-btn-container">
				<button onClick={handleAddRecipe} className="btn btn--primary">
					Add Recipe
				</button>
			</div>
		</div>
	);
};

export default RecipeList;
