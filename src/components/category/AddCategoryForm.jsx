import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import CustomInput from "../shared-components/custom-input";
import { createCategorySchema } from "@/utils/validationSchemas/category";
import CustomButton from "../shared-components/custom-button";
import useCategory from "@/hooks/useCategory";
import CustomUpload from "../shared-components/custom-upload";
import FooterButtons from "../shared-components/footer-btns";
import LoaderButton from "../shared-components/loader-button";

const AddCategoryForm = ({ handleGetCategories, onCloseSideDrawer }) => {
  const { loading, createCategory } = useCategory();
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    handleReset,
  } = useFormik({
    initialValues: {
      name: "",
      image: null,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const formData = new FormData();

      formData.append("name", values.name);
      formData.append("image", values.image[0]);

      createCategory(formData, (resp) => {
        handleGetCategories();
        onCloseSideDrawer();
      });
    },
    validationSchema: createCategorySchema,
  });

  return (
    <div>
      <form>
        <CustomInput
          name="name"
          type="text"
          handleChange={handleChange}
          value={values.name}
          onBlur={handleBlur}
          touched={touched.name}
          label="Category"
          placeholder="Enter category name"
          error={errors.name}
        />
        <CustomUpload
          name="image"
          handleChange={handleChange}
          value={values.image}
          onBlur={handleBlur}
          touched={touched.image}
          label="Category Image"
          error={errors.image}
        />
        <div className="my-2"></div>
        {/* <CustomButton
          type="submit"
          title={"Add Category"}
          handleClick={handleSubmit}
        />{" "} */}
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

export default AddCategoryForm;
