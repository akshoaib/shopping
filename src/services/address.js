import api from "@/interceptors";
const url = "/address";
const AddressService = {};

AddressService.getAddresses = async (token) => {
  return api.get(`${url}/get`, {
    headers: {
      Authorization: ` ${token}`,
    },
  });
};

AddressService.addAddress = async (body, token) => {
  return api.post(`${url}/add`, body, {
    headers: {
      Authorization: ` ${token}`,
    },
  });
};

AddressService.deleteAddress = async (id, token) => {
  return api.delete(`${url}/delete/${id}`, {
    headers: {
      Authorization: ` ${token}`,
    },
  });
};

export default AddressService;
