import * as yup from "yup";

export const createCategorySchema = yup.object({
  name: yup.string().required("Category Name is required"),
  image: yup.array().required("Category Image is required"),
});
