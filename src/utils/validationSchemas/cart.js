import * as yup from "yup";

export const addToCartSchema = yup.object({
  quantity: yup
    .number()
    .min(0.01, "Price Must be Greater than 0")
    .max(999.99, "Price Must be Less than 999.99")
    .required("Price is Required"),
});
