import axiosClient from './axiosClient';

const cartApi = {
  addItemToCart: ({ cartId, ...params }) => {
    console.log({ cartId, ...params });
    const url = `order/carts/${cartId}/`;
    return axiosClient.post(url, params);
  },
  getCart: (cartId) => {
    const url = `order/carts/${cartId}/`;
    return axiosClient.get(url);
  },
};
export default cartApi;
