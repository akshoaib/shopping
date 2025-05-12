import * as yup from "yup";

export const createProductSchema = yup.object({
  name: yup.string().required("Product Name is required"),
  price: yup.number().required("Product Price is required"),
  quantity: yup.number().required("Product Quantity is required"),
  category: yup.string().required("Product Category is required"),
  description: yup.string().required("Product Description is required"),
  tags: yup.string().required("Product tags are required"),
  images: yup.array().required("Product Image is required"),
});

export const editProductSchema = yup.object({
  name: yup.string().required("Product Name is required"),
  price: yup.number().required("Product Price is required"),
  description: yup.string().required("Product Description is required"),
  quantity: yup.number().required("Product Quantity is required"),
  tags: yup.string().required("Product tags are required"),
  images: yup.array(),
});
export const rateProductSchema = yup.object({
  comment: yup.string().required("Required"),
});
