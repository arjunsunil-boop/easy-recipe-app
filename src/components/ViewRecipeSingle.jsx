import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import './ViewRecipeSingle.css'; // Import the CSS file

const ViewRecipeSingle = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    const [reviews, setReviews] = useState({
        Recipe_ID: id,
        Rating: "",
        Review_Text: ""
    });

    const [reviewfetch, setReviewfetch] = useState([]);

    const handleChange = (e) => {
        setReviews({ ...reviews, [e.target.name]: e.target.value });
    };

    const fetchreviews = async () => {

        axios.get(`https://easy-recipe-app-cpjv.onrender.com/view_review/${id}`).then(
            (response) => {
                setReviewfetch(response.data)
            }
        ).catch();



    }



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://easy-recipe-app-cpjv.onrender.com/add_review", reviews).then(
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
        axios.get(`https://easy-recipe-app-cpjv.onrender.com/recipe/${id}`).then(
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

    useEffect(
        () => { fetchreviews() }, []
    )

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <div className="row g-3 mt-5">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-md-6 mb-4">
                                <img src={recipe.recipe_img} alt={recipe.name} className="recipe-image" />
                            </div>
                            <div className="col-12 col-md-6 mb-4">
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

                        <div className="row g-3 mt-5">
                            <div className="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4>Add Reviews</h4>
                                    </div>
                                    <div class="card-body">

                                        <div className="row g-3">
                                            <div className="col-12">
                                                <p class="card-text">Rating</p>
                                                <input type="number" className="form-control" name='Rating' value={reviews.Rating} onChange={handleChange} />

                                            </div>
                                            <div className="col-12">
                                                <p class="card-text">Review</p>
                                                <textarea id="" className="form-control" name='Review_Text' value={reviews.Review_Text} onChange={handleChange}></textarea>

                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary" onClick={handleSubmit}>Submit Review</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12">
                                <h5 className="recipe-title">Reviews</h5>
                            </div>
                        </div>
                        <div className="row g-4 mt-2">
                            

                                

                                    {
                                        reviewfetch.map(

                                            (i, index) => {
                                                return (
                                                    <div className="col-12">
                                                    <div class="card" key={index} id='reviews'>
                                                        <div class="card-header">
                                                            User-name
                                                        </div>
                                                        <div class="card-body">

                                                            <p class="card-text">{i.review_text_2}</p>

                                                        </div>
                                                    </div>
                                                    </div>
                                                )
                                            }
                                        )
                                    }



                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewRecipeSingle;