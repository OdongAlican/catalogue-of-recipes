import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Recipe({ recipe }){
    return (
        <div data-testid="recipe" className="col-md-3 ">
            <div className="card col-md-12 mx-2 mb-2 p-4" >
                <div  className="image-section mx-auto mb-2">
                    <img src={recipe.image} alt="boohoo" className="image-det"/>
                </div>
                <div>
                    <h5 className="text-secondary font-weight-bold">
                        { recipe.title.length < 30 ? `${recipe.title}` : 
                        `${recipe.title.substring(0,34)}...` }
                    </h5>
                </div>
                <p className="symbol-paragraph"> company: <b><i>{ recipe.symbol}</i></b></p>
                <label htmlFor="site" className="display-6 visit-us">Visit Us: 
                    <a href={recipe.site} target = '_blank' className="ml-1" rel="noopener noreferrer"> 
                        { recipe.site.length < 15 ? `${recipe.site}` :
                        `${recipe.site.substring(0,20)}...` }
                    </a>
                </label>
                <button className="btn btn-primary mb-1">
                    <Link className="text-white" to={{ 
                        pathname: `/recipe/${recipe.title}`,
                        state: { recipe } 
                        }}>View Details</Link>
                </button>
            </div>
        </div>
    )
}

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default Recipe