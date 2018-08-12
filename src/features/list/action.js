import api from './api';

import { 
  GET_GISTS_ALL, 
  GET_GISTS_ALL_ERROR 
} from '../../redux/actionTypes';

const getGisttsAll = (payload) => ({ type: GET_GISTS_ALL, payload: payload });
const getGisttsAllError = (payload) => ({ type: GET_GISTS_ALL_ERROR, payload: payload });

export const getAllGists = () => (dispatch) => {
  api.getAll().then(response => {
    if (response && response.status === 200) {
      dispatch(getGisttsAll(response.data));
    }
  }).catch(
    error => 
    dispatch(getGisttsAllError(error)));
};
