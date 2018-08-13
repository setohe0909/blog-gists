import initialState from '../initialState';

import {
  GET_DETAILS,
  GET_DETAILS_ERROR
} from '../../../redux/actionTypes';

function DetailsReducer(state = initialState, action) {
  switch (action.type) {

    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
        error: null
      };

    case GET_DETAILS_ERROR:
      return {
        ...state,
        details: [],
        error: action.payload
      };

    default:
      return state;
  }
}

export default DetailsReducer;
