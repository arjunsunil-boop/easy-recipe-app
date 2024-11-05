import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';

const ViewRecipes = () => {

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
      <Navbar />
      <br />
      <br />
      <br />


      <div className="container">
        <div className="row g-3">

          <div className="col-12">

            <div className="row g-4">

              {

                recipes.map(


                  (i, index) => {
                    return (

                      <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                        <div class="card" id='card-hover' >
                          <img src={i.recipe_img} class="card-img-top" alt="..." />
                          <div class="card-body">
                            <h5 class="card-title">{i.name}</h5>
                            <p class="card-text">{i.description}</p>
                          </div>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cooking time : {i.cooking_time}min</li>
                            <li className="list-group-item">
                              Rating: {i.rating}/5 <i className="fas fa-star golden-star"></i>
                            </li>

                          </ul>

                          <div className="card-body">
                            <Link to={`/recipe/${i.recipe_id}`} className="card-link">View More</Link>
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
  )
}

export default ViewRecipes