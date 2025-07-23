import Availability from "./availability";
import Price from "./price";
import Categories from "./category";
import Rating from "./rating";
import { useFormik } from "formik";
import { useEffect } from "react";
const FiltersBar = ({ categories, setFilterValues }) => {
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    handleReset,
    resetForm,
  } = useFormik({
    initialValues: {
      rating: [],
      minPrice: null,
      maxPrice: null,
      categories: [],
      availability: [],
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      setFilterValues(values);
    },
  });
  console.log({ values });

  useEffect(() => {
    setFilterValues(values);
  }, [values]);

  return (
    <div className="d-flex flex-column gap-3">
      <Availability values={values} handleChange={handleChange} />
      <Price values={values} handleChange={handleChange} />
      <Categories
        values={values}
        handleChange={handleChange}
        categories={categories}
      />
      <Rating values={values} handleChange={handleChange} />
    </div>
  );
};

export default FiltersBar;
