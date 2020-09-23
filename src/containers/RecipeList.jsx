import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchRecipies, filterRecipe } from '../actions/index'
import Recipe from '../components/Recipe'
import RecipeFilter from '../components/RecipeFilter'
import NavBar from '../components/NavBar'

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
          <NavBar/> 
          <div className="col-md-12 general-section">
              <RecipeFilter filterRecipe = { filterRecipe } recipiesData = { recipiesData } />
            <div className="col-md-12 d-flex row">
              {
                recipiesData.recipies
                .filter(recipe => {
                  return filter === 'All' ? true : recipe.symbol === filter}
                  )
                .map( (recipe, key) => (
                    <Recipe recipe = {recipe} key = { key }/>
                ))
              }
            </div>
          </div>
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