import * as yup from "yup";

export const createAddressSchema = yup.object({
  town: yup.string().required("Town is required"),
  city: yup.string().required("City is required"),
  completeAddress: yup.string().required("Address is required"),
});
