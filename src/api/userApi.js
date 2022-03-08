import axiosClient from './axiosClient';

const userApi = {
  login: (params) => {
    const url = '/token/';
    return axiosClient.post(url, params);
  },
  getInfo: (params) => {
    const url = `/users/${params}/`;
    return axiosClient.get(url);
  },
};
export default userApi;
