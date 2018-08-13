import axios from 'axios/index';

const api = {

  getDetails(postId) {
    return axios.get(`${process.env.API_URL}/gists/${postId}`);
  }

};

export default api;
