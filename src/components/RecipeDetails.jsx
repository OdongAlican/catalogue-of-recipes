import React from 'react'
import { Link } from 'react-router-dom'


const RecipeDetails = (props) => {

    const recipeData = props.location.state.recipe
return (
    <div>
        <div className="card p-2 col-6 border" >
            <div className="card-body">
                <h5 className="card-title"> {recipeData.title} </h5>
                <p className="card-text"> {recipeData.title} </p>
               
            </div>
            <button className="col-md-2 btn btn-primary">
                <Link to = {{ pathname: '/'}}>
                     Home 
                </Link>
            </button>
        </div>
</div>
)

}


export default RecipeDetails;