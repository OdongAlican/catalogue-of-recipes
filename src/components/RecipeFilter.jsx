import React from 'react'

function RecipeFilter ({ recipiesData, filterRecipe }){
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
                    recipiesData.recipies.map( recipe => (
                        <option key={ recipe.id } value = { recipe.userId }> { recipe.userId } </option>
                    ))
                }
            </select>
        </div>
    )
}

  export default RecipeFilter