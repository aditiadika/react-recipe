import React from 'react';
import IngredientList from './IngredientList';

const Recipe = (props) => {
	const { name, serving, cookTime, instruction, ingredients } = props;
	return (
		<div>
			<div>
				<h3>{name}</h3>
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</div>
			<div>
				<span>Cook Time:</span>
				<span>{cookTime}</span>
			</div>
			<div>
				<span>Serving:</span>
				<span>{serving}</span>
			</div>
			<div>
				<span>Instruction:</span>
				<div>{instruction}</div>
			</div>
			<div>
				<span>Ingredients:</span>
				<IngredientList ingredients={ingredients} />
			</div>
		</div>
	);
};

export default Recipe;
