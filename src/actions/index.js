import { FETCH_RECIPIES_REQUEST , FETCH_RECIPIES_SUCCESS, FETCH_RECIPIES_FAILURE } from '../actions/actionTypes'


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