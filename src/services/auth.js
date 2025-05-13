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

AuthService.getUserReports = async (startDate, endDate, token) => {
  return api.get(
    `${url}/get-user-report?startDate=${startDate}&endDate=${endDate}`,
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
};

export default AuthService;
