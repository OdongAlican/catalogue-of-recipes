import React from 'react'


function Recipe({ recipe }){
    return (
        <div>
            <div className="card col-md-3 mx-2 mb-2" >
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{ recipe.name }</li>
                    <li className="list-group-item"> { recipe.username }</li>
                    <li className="list-group-item"> { recipe.email } </li>
                </ul>
            </div>
        </div>
    )
}

export default Recipe