import showToast from "@/utils";
import axios from "axios";

const handleResponseError = (error) => {
  if (error?.response?.status === 401) {
    // TODO : Add Azure B2C logout function here
    window.location.href = "/";
    localStorage.clear();
    showToast("Unauthorized", "error");
  } else {
    return Promise.reject({
      message: error?.response?.data?.message || error?.response?.data,
      status: error?.response?.status,
    });
  }
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT_URL,
  timeout: 180000,
});

// API request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

// API response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle response error here
    return handleResponseError(error);
  }
);

export default api;
