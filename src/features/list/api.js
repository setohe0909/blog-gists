import axios from 'axios/index';

const api = {

  getAll() {
    return axios.get(`${process.env.API_URL}/gists/public`);
  },

  getByUser(user) {
    return axios.get(`${process.env.API_URL}/users/${user}/gists`);
  }

};

export default api;
