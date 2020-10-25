import { FETCH_RECIPIES_REQUEST, FETCH_RECIPIES_SUCCESS, FETCH_RECIPIES_FAILURE } from '../actions/actionTypes';

const initialState = {
  loading: false,
  recipies: [],
  error: '',
  filter: 'All',
};

const recipiesReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_RECIPIES_SUCCESS:
      return {
        ...state,
        loading: false,
        recipies: action.payload,
        error: '',
      };
    case FETCH_RECIPIES_FAILURE:
      return {
        ...state,
        loading: false,
        recipies: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default recipiesReducers;
