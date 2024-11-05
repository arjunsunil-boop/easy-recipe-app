import React, { useState } from 'react';
import axios from 'axios';

const AddRecipes = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    servings: "",
    cooking_time: "",
    instructions: "",
    ingredients: ""
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      ...recipe,
      servings: parseInt(recipe.servings),
      cooking_time: parseInt(recipe.cooking_time),
      instructions: recipe.instructions.split('\n').map((desc, index) => ({
        step_number: index + 1,
        description: desc
      })),
      ingredients: recipe.ingredients.split('\n').map((ingredient) => {
        const [name, quantity, unit] = ingredient.split(',');
        return { name, quantity: parseFloat(quantity), unit };
      })
    };

    axios.post("http://127.0.0.1:5000/add_recipe", newRecipe, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      alert("Recipe added successfully");
    }).catch((error) => {
      console.error(error);
      alert("Error occurred while adding the recipe");
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" name="name" value={recipe.name} onChange={handleChange} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" name="description" value={recipe.description} onChange={handleChange} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="servings" className="form-label">Servings</label>
                <input type="text" className="form-control" name="servings" value={recipe.servings} onChange={handleChange} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="cooking_time" className="form-label">Cooking Time</label>
                <input type="text" className="form-control" name="cooking_time" value={recipe.cooking_time} onChange={handleChange} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="instructions" className="form-label">Instructions (one per line)</label>
                <textarea className="form-control" name="instructions" value={recipe.instructions} onChange={handleChange} />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="ingredients" className="form-label">Ingredients (name,quantity,unit per line)</label>
                <textarea className="form-control" name="ingredients" value={recipe.ingredients} onChange={handleChange} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRecipes;