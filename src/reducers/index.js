import { combineReducers } from 'redux';
import recipiesReducers from './Recipes'


const rootReducer = combineReducers({
    recipies: recipiesReducers
})

export default rootReducer;