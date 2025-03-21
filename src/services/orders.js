import api from "@/interceptors";
const url = "/order";
const OrderService = {};

OrderService.getAllOrders = async (body, token) => {
  return api.get(`${url}/get-all`, {
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
export default OrderService;
