import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../shared-components/product-card";
import useProduct from "@/hooks/useProduct";
import PageLoader from "../shared-components/page-loader";
import { APP_ROUTES } from "@/config/app-routes";

const ProductsListing = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { loading, getProductsByCategory } = useProduct();
  const [products, setProducts] = useState([]);

  const fetchSearchData = (categoryId) => {
    let payload = {
      categories: categoryId ? [categoryId] : [],
    };

    getProductsByCategory(payload, (resp) => {
      setProducts(resp.products);
    });
  };

  useEffect(() => {
    // getProductsByCategory({}, (resp) => {});
    fetchSearchData(categoryId);
  }, [categoryId]);

  return (
    <>
      <PageLoader loading={loading} />

      <div>
        <p className="text-center text-uppercase fw-bold fs-1 mt-5">
          Products{" "}
        </p>{" "}
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
                  key={`${product._id}`}
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
      </div>
    </>
  );
};
export default ProductsListing;
