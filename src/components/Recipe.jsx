import React from 'react'


function Recipe({ recipe }){
    return (
        <div>
            <div className="card col-md-3 mx-2 mb-2" >
            <h4>{ recipe.id }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> { recipe.title }</li>
                    <li className="list-group-item"> { recipe.userId }</li>
                </ul>
                <p>{ recipe.body}</p>
            </div>
        </div>
    )
}

export default Recipe