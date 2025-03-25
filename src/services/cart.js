import api from "@/interceptors";
const url = "/cart";
const CartService = {};

CartService.addToCart = async (body, token) => {
  return api.post(`${url}/add-to-cart`, body, {
    headers: {
      Authorization: ` ${token}`,
    },
  });
};

CartService.getCart = async (token) => {
  return api.get(`${url}/get-cart`, {
    headers: {
      Authorization: ` ${token}`,
    },
  });
};

export default CartService;
