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
        <div>
            <select onChange={handleFilter}>
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