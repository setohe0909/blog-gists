import initialState from '../initialState';

import {
  GET_GISTS_ALL, 
  GET_GISTS_ALL_ERROR 
} from '../../../redux/actionTypes';

function ListReducer(state = initialState, action) {
  switch (action.type) {

    case GET_GISTS_ALL:
      return {
        ...state,
        allGists: action.payload,
        error: null
      };

    case GET_GISTS_ALL_ERROR:
      return {
        ...state,
        allGists: [],
        error: action.payload
      };
    
    default:
      return state;
  }
}

export default ListReducer;
