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
  let storageItem = localStorage.getItem("id");
  let name = localStorage.getItem("name");
  let tags = localStorage.getItem("tags");

  if (storageItem) {
    return api.post(
      `${url}/get-all?id=${storageItem}&name=${name}&tags=${tags}`,
      body,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
  } else {
    return api.post(`${url}/get-all`, body, {
      headers: {
        Authorization: `${token}`,
      },
    });
  }
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
