import { useFormik } from "formik";
import { useEffect, useState } from "react";

import CustomInput from "../shared-components/custom-input";
import CustomButton from "../shared-components/custom-button";
import useCategory from "@/hooks/useCategory";
import { createProductSchema } from "@/utils/validationSchemas/product";
import CustomSelect from "../shared-components/custom-select";
import CustomUpload from "../shared-components/custom-upload";
import useProduct from "@/hooks/useProduct";
import LoaderButton from "../shared-components/loader-button";
import FooterButtons from "../shared-components/footer-btns";

const AddProductForm = ({ handleGetCategories, onCloseSideDrawer }) => {
  const { getCategoryDropdown } = useCategory();
  const { loading, createProduct } = useProduct();

  const [categories, setCategories] = useState([]);

  const handleGetCategoryDropdown = () => {
    getCategoryDropdown((resp) => {
      setCategories(resp);
    });
  };
  const {
    values,
    handleChange,
    handleSubmit,
    handleReset,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      price: "",
      quantity: "",
      description: "",
      category: "",
      tags: "",
      images: null,
    },
    onSubmit: (values) => {
      const formData = new FormData();
      for (const key in values) {
        if (key === "images") {
          for (let file = 0; file < values.images.length; file++) {
            formData.append("images", values.images[file]);
          }
        } else {
          formData.append(key, values[key]);
        }
      }

      createProduct(formData, (resp) => {
        handleGetCategories();
        resetForm();
        onCloseSideDrawer();
      });
    },
    validationSchema: createProductSchema,
  });

  const handleFileChange = (e) => {
    setFieldValue("image", e.currentTarget.files[0]);
  };

  useEffect(() => {
    handleGetCategoryDropdown();
  }, []);

  return (
    <div>
      <form>
        <CustomSelect
          name="category"
          handleChange={handleChange}
          value={values.category}
          onBlur={handleBlur}
          touched={touched.category}
          label="Category"
          error={errors.category}
          data={categories}
        />
        <CustomInput
          name="name"
          type="text"
          handleChange={handleChange}
          value={values.name}
          onBlur={handleBlur}
          touched={touched.name}
          label="Product Name"
          placeholder="Enter product name"
          error={errors.name}
        />
        <CustomInput
          name="description"
          type="text"
          handleChange={handleChange}
          value={values.description}
          onBlur={handleBlur}
          touched={touched.description}
          label="Description"
          placeholder="Enter product description"
          error={errors.description}
        />
        <CustomInput
          name="price"
          type="text"
          handleChange={handleChange}
          value={values.price}
          onBlur={handleBlur}
          touched={touched.price}
          label="Price"
          placeholder="Enter Price"
          error={errors.price}
        />
        <CustomInput
          name="quantity"
          type="text"
          handleChange={handleChange}
          value={values.quantity}
          onBlur={handleBlur}
          touched={touched.quantity}
          label="Quantity"
          placeholder="Enter quantity"
          error={errors.quantity}
        />
        <CustomInput
          name="tags"
          type="text"
          handleChange={handleChange}
          value={values.tags}
          onBlur={handleBlur}
          touched={touched.tags}
          label="Product Tags"
          placeholder="Enter product tags"
          error={errors.tags}
        />
        <div className="my-2"></div>
        <CustomUpload
          name="images"
          handleChange={handleChange}
          value={values.images}
          onBlur={handleBlur}
          touched={touched.images}
          label="Product Image"
          error={errors.images}
          data={categories}
        />
        <div className="my-2"></div>

        <FooterButtons
          title={loading ? <LoaderButton /> : "Add"}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default AddProductForm;
