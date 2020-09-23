import React from 'react'
import { Link } from 'react-router-dom'

function Recipe({ recipe }){
    return (
        <div className="col-md-3 bg-warning ">
            <div className="card col-md-12 mx-2 mb-2 p-4" >
                <div  className="image-section mx-auto mb-2">
                    <img src={recipe.image} alt="boohoo" className="image-det"/>
                </div>
            <h5>{ recipe.title }</h5>
                <p>Symbol: { recipe.symbol}</p>
                <label htmlFor="site">Visit Us:
                <a href={recipe.site} target = '_blank'> { recipe.site }</a>
                </label>
                <button className="btn btn-primary mb-1">
                    <Link className="text-white" to={{ 
                        pathname: `/recipe/${recipe.title}`,
                        state: { recipe } 
                        }}>View Recipe</Link>
                </button>
            </div>
        </div>
    )
}

export default Recipe