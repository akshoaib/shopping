import api from "@/interceptors";
const url = "/order";
const OrderService = {};

OrderService.getAllOrders = async (limit, page, token) => {
  return api.get(`${url}/get-all?limit=${limit}&page=${page}`, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

OrderService.getUserOrders = async (token) => {
  return api.get(`${url}/get-user-orders`, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

OrderService.getPaymentStatusDropdown = async (token) => {
  return api.get(`${url}/get-payment-dropdown`, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

OrderService.getOrderStatusDropdown = async (token) => {
  return api.get(`${url}/get-order-dropdown`, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

OrderService.updateOrder = async (body, token) => {
  return api.put(`${url}/update-order`, body, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

OrderService.placeOrder = async (body, token) => {
  return api.post(`${url}/place-order`, body, {
    headers: {
      Authorization: `${token}`,
    },
  });
};
export default OrderService;
