import React from 'react'

const AddRecipes = () => {
  return (

    <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Description</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Servings</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Cooking Time</label>
              <input type="time" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Recipe Image</label>
              <input type="file" className="form-control" />
            </div>
            
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <button className="btn btn-primary">Submit</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AddRecipes