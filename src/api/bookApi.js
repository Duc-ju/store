import axiosBase from './axiosBase';

const bookApi = {
  get: (params) => {
    const url = `/book/book_items/${params}/`;
    return axiosBase.get(url);
  },
};

export default bookApi;
