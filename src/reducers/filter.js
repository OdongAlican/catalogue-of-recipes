import { FILTER_RECIPE } from '../actions/actionTypes';

const filter = (state = 'All', action) => {
  switch (action.type) {
    case FILTER_RECIPE:
      return action.payload;
    default:
      return state;
  }
};

export default filter;
