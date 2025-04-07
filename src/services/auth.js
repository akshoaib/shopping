import api from "@/interceptors";
const url = "/user";
const AuthService = {};

AuthService.signin = async (body) => {
  return api.post(`${url}/login`, {
    ...body,
  });
};

AuthService.registerUser = async (body) => {
  return api.post(`${url}/create`, {
    ...body,
  });
};

export default AuthService;
