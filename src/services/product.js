import api from "@/interceptors";
const url = "/product";
const ProductService = {};

ProductService.createProduct = async (body, token) => {
  return api.post(`${url}/create`, body, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

ProductService.updateProduct = async (productId, body, token) => {
  return api.put(`${url}/update/${productId}`, body, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

ProductService.getProductsByCategory = async (body, token) => {
  return api.post(`${url}/get-all`, body, {
    headers: {
      Authorization: `${token}`,
    },
  });
};
ProductService.getProductById = async (id, token) => {
  return api.get(`${url}/get/${id}`, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

ProductService.rateProduct = async (payload, productId, token) => {
  return api.put(`${url}/rate-product/${productId}`, payload, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

export default ProductService;
