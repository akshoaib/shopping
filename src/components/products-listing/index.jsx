import { Col, Row } from "antd";
import styles from "./product-listing.module.css";
import useProduct from "@/hooks/useProduct";
import { useFormik } from "formik";
import { useEffect } from "react";
const ProductsListing = () => {
  const { getProductsByCategory } = useProduct();

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
      categoryId: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("submit vals::: ", values);
    },
  });
  const fetchSearchData = (body) => {
    console.log("xxxxxxxx", body);

    getProductsByCategory(body, (resp) => {
      console.log("oooooooooo ", resp.products);
    });
  };

  useEffect(() => {
    // getProductsByCategory({}, (resp) => {});
    fetchSearchData();
  }, []);
  return (
    <>
      <Row>
        <Col span={24} className={styles.productsListingHeader}>
          Products
        </Col>
        <Col span={8}>filters</Col>
        <Col span={16}>display</Col>
      </Row>
    </>
  );
};

export default ProductsListing;
