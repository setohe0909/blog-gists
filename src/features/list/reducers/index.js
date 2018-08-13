import initialState from '../initialState';

import {
  GET_GISTS_ALL, 
  GET_GISTS_ALL_ERROR ,
  GET_GISTS_BY_USER,
  GET_GISTS_BY_USER_ERROR
} from '../../../redux/actionTypes';

function ListReducer(state = initialState, action) {
  switch (action.type) {

    case GET_GISTS_ALL:
    case GET_GISTS_BY_USER:
      return {
        ...state,
        allGists: action.payload,
        error: null
      };

    case GET_GISTS_ALL_ERROR:
    case GET_GISTS_BY_USER_ERROR:
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
