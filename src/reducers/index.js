import { combineReducers } from 'redux';
import recipiesReducers from './Recipes';
import filter from './filter';

const rootReducer = combineReducers({
  recipies: recipiesReducers,
  filter,
});

export default rootReducer;
