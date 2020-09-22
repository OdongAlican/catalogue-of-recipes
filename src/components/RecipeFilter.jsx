import React from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = state =>({
    recipiesData: state.recipies
  })

  export default connect(mapStateToProps)(RecipeFilter)