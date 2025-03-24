import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../shared-components/product-card";
import useProduct from "@/hooks/useProduct";

const ProductsListing = () => {
  const { categoryId } = useParams();
  const { getProductsByCategory } = useProduct();
  const [products, setProducts] = useState([]);

  const fetchSearchData = (categoryId) => {
    let payload = {
      category: categoryId,
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
    <div>
      <p className="text-center text-uppercase fw-bold fs-1 mt-5">Products </p>{" "}
      <Col span={24} className="p-2 p-lg-4">
        <Row gutter={[16, 16]} className="mb-4">
          {products.map((product) => {
            return (
              <Col xs={12} md={8} lg={6} xl={4}>
                <ProductCard product={product} />
              </Col>
            );
          })}
        </Row>
      </Col>
    </div>
  );
};
export default ProductsListing;
