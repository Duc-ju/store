import axios from 'axios';
import queryString from 'query-string';
const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (err) => {
    //handle error
    throw err;
  }
);
export default axiosClient;
