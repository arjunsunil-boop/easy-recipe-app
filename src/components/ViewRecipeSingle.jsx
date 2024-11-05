import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewRecipeSingle = () => {


    const [recipes, setRecipes] = useState(
        []
    )

    const fetchRecipes = () => {
        axios.get("http://127.0.0.1:5000/recipes").then(

            (response) => {
                setRecipes(
                    response.data
                )
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )

    }

    useEffect(
        () => { fetchRecipes() }, []
    )



    return (


        <div>


            <div className="container">

                <div className="row g-3">

                    <div className="col-12">

                        <div className="row">
                            <div className="col-12">

                                <div className="recipe-details">
                                    <img src="path/to/recipe-image.jpg" alt="Recipe" className="recipe-image" />
                                    <h2 className="recipe-title">Recipe Title</h2>
                                    <p className="cooking-time">Cooking Time: 30 minutes</p>
                                    <div className="ingredients">
                                        <h3>Ingredients</h3>
                                        <ul>
                                            <li>Ingredient 1</li>
                                            <li>Ingredient 2</li>
                                            <li>Ingredient 3</li>
                                        </ul>
                                    </div>
                                    <div className="instructions">
                                        <h3>Instructions</h3>
                                        <p>Step 1: Do this.</p>
                                        <p>Step 2: Do that.</p>
                                        <p>Step 3: Finish up.</p>
                                    </div>
                                </div>






                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewRecipeSingle