import React from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';

function App() {
	return <RecipeList recipes={sampleRecipe} />;
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
