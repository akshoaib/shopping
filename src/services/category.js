import api from "@/interceptors";
const url = "/category";
const CategoryService = {};

CategoryService.getCategories = async (token) => {
  return api.get(`${url}/get-all`, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

CategoryService.getCategoryDropdown = async (token) => {
  return api.get(`${url}/dropdown`, {
    headers: {
      Authorization: `${token}`,
    },
  });
};
CategoryService.createCategory = async (body, token) => {
  return api.post(`${url}/create`, body, {
    headers: {
      Authorization: ` ${token}`,
    },
  });
};

export default CategoryService;
