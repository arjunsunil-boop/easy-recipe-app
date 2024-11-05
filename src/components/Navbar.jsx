import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/view">EaZyRecipes</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/view" id="home-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add" id="add-link">Add Recipes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search" id="search-link">Search</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view" id="view-link">View Recipes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" id="login-link">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar