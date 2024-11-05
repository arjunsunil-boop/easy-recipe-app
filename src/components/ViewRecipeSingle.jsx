import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const ViewRecipeSingle = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    const [reviews, setReviews] = useState({
        Recipe_ID: id,
        Rating: "",
        Review_Text: ""
    });

    const handleChange = (e) => {
        setReviews({ ...reviews, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:5000/add_review", reviews).then(
            (response) => {
                console.log(response.status);
                if (response.status === 200) {
                    console.log(response.data);
                    alert("Review added successfully");
                } else {
                    alert('Review failed. Please try again.');
                }
            }
        ).catch(
            (error) => {
                console.log(error);
                alert('An error occurred while adding the review.');
            }
        );
    };

    const fetchRecipe = () => {
        axios.get(`http://127.0.0.1:5000/recipe/${id}`).then(
            (response) => {
                setRecipe(response.data);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    };

    useEffect(() => {
        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <br /><br /><br />
            <div className="container">
                <div className="row g-3">
                    <div className="col-12">
                        <div className="row g-4">
                            <div className="col-6">
                                <img src={recipe.recipe_img} alt={recipe.name} className="recipe-image" />
                            </div>
                            <div className="col-6">
                                <div className="col-12">
                                    <div className="recipe-details">
                                        <h2 className="recipe-title">{recipe.name}</h2>
                                        <p className="cooking-time">Cooking Time: {recipe.cooking_time} minutes</p>
                                        <p className="description">{recipe.description}</p>
                                        <div className="ingredients">
                                            <h3>Ingredients</h3>
                                            <ul>
                                                {recipe.ingredients.map((ingredient, index) => (
                                                    <li key={index}>
                                                        {ingredient.name}: {ingredient.quantity} {ingredient.unit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="instructions">
                                            <h3>Instructions</h3>
                                            {recipe.instructions.map((instruction, index) => (
                                                <p key={index}>Step {instruction.step_number}: {instruction.description}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-12">
                                <h3>Add a Review</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="rating" className="form-label">Rating</label>
                                        <input type="number" className="form-control" id="rating" name="Rating" value={reviews.Rating} onChange={handleChange} min="1" max="5" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="review_text" className="form-label">Review</label>
                                        <textarea className="form-control" id="review_text" name="Review_Text" value={reviews.Review_Text} onChange={handleChange} required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit Review</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewRecipeSingle;