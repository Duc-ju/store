import axiosClient from './axiosClient';

const cartApi = {
  addItemToCart: ({ cartId, ...params }) => {
    const url = `order/carts/${cartId}/`;
    return axiosClient.post(url, params);
  },
  getCart: (cartId) => {
    const url = `order/carts/${cartId}/`;
    return axiosClient.get(url);
  },
  deleteItem: ({ cartId, ...params }) => {
    const url = `order/carts/${cartId}/`;
    return axiosClient.delete(url, params);
  },
  updateItem: ({ cartId, ...params }) => {
    const url = `order/carts/${cartId}/`;
    return axiosClient.put(url, params);
  },
};
export default cartApi;
