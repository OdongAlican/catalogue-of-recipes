import axios from 'axios';
import {
  FETCH_RECIPIES_REQUEST,
  FETCH_RECIPIES_SUCCESS,
  FETCH_RECIPIES_FAILURE,
  FILTER_RECIPE,
  URL,
} from './actionTypes';

export const fetchRecipiesRequest = () => ({
  type: FETCH_RECIPIES_REQUEST,
});

export const fetchRecipiesSuccess = recipies => ({
  type: FETCH_RECIPIES_SUCCESS,
  payload: recipies,
});

export const fetchRecipiesFailure = error => ({
  type: FETCH_RECIPIES_FAILURE,
  payload: error,
});

export const filterRecipe = userId => ({
  type: FILTER_RECIPE,
  payload: userId,
});

export const fetchRecipies = () => dispatch => {
  dispatch(fetchRecipiesRequest);
  axios.get(URL).then(response => {
    const recipies = response.data;
    dispatch(fetchRecipiesSuccess(recipies));
  }).catch(error => {
    const errorMsg = error.message;
    dispatch(fetchRecipiesFailure(errorMsg));
  });
};
