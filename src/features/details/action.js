import api from './api';

import { 
  GET_DETAILS,
  GET_DETAILS_ERROR
} from '../../redux/actionTypes';

const getDetailsGists = (payload) => ({ type: GET_DETAILS, payload: payload });
const getDetailsGistsError = (payload) => ({ type: GET_DETAILS_ERROR, payload: payload });

export const getDetails = (postId) => (dispatch) => {
  api.getDetails(postId).then(response => {
    if (response && response.status === 200) {
      dispatch(getDetailsGists(response.data));
    }
  }).catch(
    error => 
    dispatch(getDetailsGistsError(error)));
};
