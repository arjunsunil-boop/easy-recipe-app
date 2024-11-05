import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Searchrecipe = () => {
    const [search, setSearch] = useState(
        {
            name: ""
        }
    )

    const [recipes, setRecipes] = useState([])

    const handleSearch = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        axios.post("http://127.0.0.1:5000//search_recipe", search).then(
            (response) => {
                console.log(response.data)
                setRecipes(response.data)
            }
        ).catch();
    }
    return (
        <div>

            <Navbar />
            <br /><br />

            <div className="container">
                <div className="row g-4">
                    <div className="col-12">
                        <label htmlFor="" className="form-label">Search recipe By Name</label>
                        <input type="text" className="form-control" onChange={handleSearch} name='name' value={search.name} />

                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" onClick={handleSubmit}>Search</button>

                    </div>
                </div>
                <br /><br /><br />

                <div className="row g-3">
                    

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
                                                    <li class="list-group-item">Cooking time : {i.cooking_time}</li>
                                                    <li class="list-group-item">Rating : {i.rating}</li>

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
    )
}

export default Searchrecipe