import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchRecipies, filterRecipe } from '../actions/index'
import Recipe from '../components/Recipe'
import RecipeFilter from '../components/RecipeFilter'

function RecipeList ( { recipiesData, fetchRecipiesData, filterRecipe, filter } ) {

    useEffect(()=>{
      
        fetchRecipiesData()
      }, [])
    
      return recipiesData.loading ?  (
          <h1>Loading</h1>
      ) : recipiesData.error ? (
        <h1>{ recipiesData.error } </h1>
      ) : (
        <div>
          <RecipeFilter filterRecipe = { filterRecipe } recipiesData = { recipiesData } />
          {
            recipiesData.recipies
            .filter(recipe => {
              return filter === 'All' ? true : (recipe.userId).toString() === filter}
              )
            .map( (recipe, key) => (
                <Recipe recipe = {recipe} key = { key }/>
            ))
          }
        </div>
      )

}

const mapStateToProps = state =>({
    recipiesData: state.recipies,
    filter: state.filter
  })
  
  const mapDispatchToProps = dispatch => ({
    fetchRecipiesData: () => dispatch(fetchRecipies()),
    filterRecipe: userId => dispatch(filterRecipe(userId))
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(RecipeList);