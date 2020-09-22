import axios from "axios";
import { 
    FETCH_RECIPIES_REQUEST , 
    FETCH_RECIPIES_SUCCESS, 
    FETCH_RECIPIES_FAILURE, 
    FILTER_RECIPE 
} from '../actions/actionTypes'


export const fetchRecipiesRequest = () => {
    return {
        type: FETCH_RECIPIES_REQUEST,
    }
}

export const fetchRecipiesSuccess = recipies => {
    return {
        type: FETCH_RECIPIES_SUCCESS,
        payload: recipies
    }
}

export const fetchRecipiesFailure = error => {
    return {
        type: FETCH_RECIPIES_FAILURE,
        payload: error
    }
}

export const filterRecipe = userId => ({
    type: FILTER_RECIPE,
    payload: userId,
  });

export const fetchRecipies = () => {
    return (dispatch) => {
        dispatch(fetchRecipiesRequest)
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
                const recipies = response.data;
                dispatch(fetchRecipiesSuccess(recipies))
            }).catch(error => {
                const errorMsg = error.message
                dispatch(fetchRecipiesFailure(errorMsg))
            })
    }
}