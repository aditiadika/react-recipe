import React from "react";

const Recipe = props => {
  const { name, serving, cookTime, instruction } = props;
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
    </div>
  );
};

export default Recipe;
