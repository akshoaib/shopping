import { useNavigate } from "react-router-dom";
import ProductCategoriesSkeleton from "./product-categories-skeleton";
import { APP_ROUTES } from "@/config/app-routes";
import { Col, Row } from "antd";

const ProductCategories = ({ loading, categories }) => {
  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        <ProductCategoriesSkeleton />
      ) : (
        <Row className="w-100 justify-content-around justify-content-md-center">
          {categories?.map((category) => (
            <Col xs={9} md={4}>
              <div key={category.id} className="">
                {console.log("category", category)}
                <div
                  onClick={() =>
                    navigate(APP_ROUTES.public.PRODUCTS_LISTING(category._id))
                  }
                  className="p-2 d-flex flex-column justify-content-center"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    width={100}
                    height={100}
                    className="rounded-circle mx-auto"
                  />
                  <p className="text-center">{category.name}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default ProductCategories;
