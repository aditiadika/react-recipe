import React, { useState } from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';
import uuidv4 from 'uuid/v4';

function App() {
	const [ recipes, setRecipes ] = useState(sampleRecipe);
	function handleAddRecipe() {
		const newRecipe = {
			id: uuidv4(),
			name: 'Nasi Goreng',
			serving: 1,
			cookTime: '05:00',
			instruction: '1. Put Salt On rice\n2. Put Chicken\n3. Put ketchup On rice\n',
			ingredients: [
				{
					id: uuidv4(),
					name: 'Chicken',
					amount: '2 Pounds'
				},
				{
					id: uuidv4(),
					name: 'Rice',
					amount: '5 Pounds'
				}
			]
		};

		setRecipes([ ...recipes, newRecipe ]);
	}

	function handleDeleteRecipe(id) {
		setRecipes(recipes.filter((recipe) => recipe.id !== id));
	}

	return <RecipeList recipes={recipes} handleAddRecipe={handleAddRecipe} handleDeleteRecipe={handleDeleteRecipe} />;
}

const sampleRecipe = [
	{
		id: 1,
		name: 'Plain Chicken',
		serving: 3,
		cookTime: '1:45',
		instruction: '1. Put Salt On Chicken\n2. Put Salt On Chicken\n3. Put Salt On Chicken\n',
		ingredients: [
			{
				id: 1,
				name: 'Chicken',
				amount: '2 Pounds'
			},
			{
				id: 2,
				name: 'Salt',
				amount: '1 Pounds'
			}
		]
	},
	{
		id: 2,
		name: 'Plain Beef',
		serving: 2,
		cookTime: '5:45',
		instruction: '1. Put Salt On Chicken\n2. Put Salt On Chicken\n',
		ingredients: [
			{
				id: 1,
				name: 'Beef',
				amount: '3 Pounds'
			},
			{
				id: 2,
				name: 'Paprika',
				amount: '5 Pounds'
			}
		]
	}
];

export default App;
