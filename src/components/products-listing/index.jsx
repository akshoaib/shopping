import { Col, Row } from "antd";
import styles from "./product-listing.module.css";
import useProduct from "@/hooks/useProduct";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import ProductSlider from "./products-slider";
import useCategory from "@/hooks/useCategory";
import ProductCategories from "./product-categories";
import ProductCard from "./product-card";
import { Footer } from "antd/es/layout/layout";
const ProductsListing = () => {
  const { getProductsByCategory } = useProduct();
  const { loading: categoryLoading, getCategories } = useCategory();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

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
      setProducts(resp.products);
    });

    getCategories((resp) => {
      console.log("categories", resp);
      setCategories(resp);
    });
  };

  useEffect(() => {
    // getProductsByCategory({}, (resp) => {});
    fetchSearchData();
  }, []);
  return (
    <>
      <Row>
        <Col span={24} className="p-2 p-lg-4">
          <ProductSlider products={products} />
        </Col>
        <Col span={24} className={` p-lg-4 ${styles.productsListingHeader}`}>
          <ProductCategories
            categories={categories}
            loading={categoryLoading}
          />
        </Col>
        <Col span={24} className="p-2 p-lg-4">
          <Row gutter={[16, 16]}>
            {products.map((product) => {
              return (
                <Col xs={12} md={8} lg={6} xl={4}>
                  <ProductCard product={product} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProductsListing;
