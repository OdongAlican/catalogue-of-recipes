import React from 'react'

function RecipeFilter ({ recipiesData, filterRecipe }){

    let userIdArry = []

    recipiesData.recipies.map(value => {
        userIdArry.push(value.symbol)
    })    

    let filteredArry = Array.from(new Set(userIdArry))

    const handleFilter = ({ target }) => {
        filterRecipe(target.value)
    }

    return (
        <div className="bg-secondary my-2 p-2 d-flex justify-content-center align-items-center">
            <label htmlFor="filter" className=" text-white mr-1 mt-1 font-weight-bold">SELECT COMPANY:</label>
            <select className="form-control col-md-3 p-1" onChange={handleFilter}>
                <option value="All" key="All">
                    All
                </option>
                {
                    filteredArry.map( recipe => (
                        <option key={ recipe } value = { recipe }> { recipe } </option>
                    ))
                }
            </select>
        </div>
    )
}

  export default RecipeFilter