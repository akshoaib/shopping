import api from "@/interceptors";
const url = "/user";
const AuthService = {};

AuthService.signin = async (body) => {
  console.log({ body });

  return api.post(`${url}/login`, {
    ...body,
  });
};

export default AuthService;
