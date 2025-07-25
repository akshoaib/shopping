import api from "@/interceptors";
const url = "/order";
const OrderService = {};

OrderService.getAllOrders = async (body, token) => {
  console.log({ body });
  const { limit, page, customer_name, paymentStatus, orderStatus, total } =
    body;

  return api.get(
    `${url}/get-all?limit=${limit}&page=${page}&customer_name=${customer_name}&paymentStatus=${paymentStatus}&orderStatus=${orderStatus}&total=${total}`,
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
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

OrderService.getOrderStatusReports = async (startDate, endDate, token) => {
  return api.get(
    `${url}/order-status-report?startDate=${startDate}&endDate=${endDate}`,
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
};

export default OrderService;
