import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchRecipies } from '../actions/index'
import Recipe from '../components/Recipe'

function RecipeList ( { recipiesData, fetchRecipiesData } ) {

    useEffect(()=>{
        fetchRecipiesData()
      }, [])
    
      return recipiesData.loading ?  (
          <h1>Loading</h1>
      ) : recipiesData.error ? (
        <h1>{ recipiesData.error} </h1>
      ) : (
        <div>
          {
            recipiesData.recipies.map( (recipe, key) => (
                <Recipe recipe = {recipe} key = { key }/>
            ))
          }
        </div>
      )

}


const mapStateToProps = state =>({
    recipiesData: state.recipies
  })
  
  const mapDispatchToProps = dispatch => ({
    fetchRecipiesData: () => dispatch(fetchRecipies())
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(RecipeList);