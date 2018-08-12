import axios from "axios/index";

const api = {

  getAll() {
    return axios.get(`${process.env.API_URL}/gists/public`);
  }

};

export default api;
