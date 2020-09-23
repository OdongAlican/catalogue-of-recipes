import React from 'react'
import { Link } from 'react-router-dom'


const RecipeDetails = (props) => {

    const recipeData = props.location.state.recipe
    const dateArray = recipeData.publishedDate.split(' ')
    const dateValue = new Date(dateArray[0])
return (
    <div data-testid="recipeDetails">
        <div className="card p-2 col-6 border mx-auto mt-3 border" >
        <div  className="image-section-details mx-auto mb-2 border p-2">
            <img src={recipeData.image} alt="boohoo" className="image-detail"/>
        </div>
            <div className="card-body card-section">
                <h5 className="card-title text-underline"> {recipeData.title} </h5>
                <p className="card-text text-secondary">{ recipeData.text }</p>
                <p className="card-text text-underline"> Published Date: {
                dateValue.toDateString()} </p>
                <p className="card-text text-underline"> Web-site:                     
                <a href={recipeData.site} target = '_blank' className="ml-1" rel="noopener noreferrer"> {recipeData.site}</a>
                </p>
            </div>
            <button className="col-md-2 btn btn-primary">
                <Link to = {{ pathname: '/'}} className="text-white">
                     Home 
                </Link>
            </button>
        </div>
    </div>
)

}


export default RecipeDetails;