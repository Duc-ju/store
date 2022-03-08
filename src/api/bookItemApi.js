import axiosClient from './axiosClient';

const bookItemApi = {
  getAll: (params) => {
    const url = '/book/book_items/';
    return axiosClient.get(url, params);
  },
};

export default bookItemApi;
