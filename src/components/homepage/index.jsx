import { Col, Row } from "antd";
import styles from "./product-listing.module.css";
import useProduct from "@/hooks/useProduct";
import { useEffect, useState } from "react";
import ProductSlider from "./products-slider";
import useCategory from "@/hooks/useCategory";
import ProductCategories from "./product-categories";
import ProductCard from "../shared-components/product-card";
import PageLoader from "../shared-components/page-loader";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "@/config/app-routes";
const Homepage = () => {
  const { loading, getProductsByCategory } = useProduct();
  const { loading: categoryLoading, getCategories } = useCategory();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchSearchData = (body) => {
    getProductsByCategory(body, (resp) => {
      setProducts(resp.products);
    });

    getCategories((resp) => {
      setCategories(resp);
    });
  };

  useEffect(() => {
    fetchSearchData();
  }, []);
  return (
    <>
      <PageLoader loading={categoryLoading || loading} />
      <Row>
        <Col span={24} className="p-2 p-lg-4">
          <ProductSlider products={products} />
        </Col>
        <Col span={24} className={`p-lg-4 ${styles.productsListingHeader}`}>
          <ProductCategories
            categories={categories}
            loading={categoryLoading}
          />
        </Col>
        <Col span={24} className="p-2 p-lg-4">
          <Row gutter={[16, 16]} className="mb-4">
            {products.map((product) => {
              return (
                <Col
                  xs={12}
                  md={8}
                  lg={6}
                  xl={4}
                  role="button"
                  key={product._id}
                  onClick={() =>
                    navigate(APP_ROUTES.public.VIEW_PRODUCT(product._id))
                  }
                >
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

export default Homepage;
