import useProduct from "@/hooks/useProduct";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartCard from "../shared-components/cart-card";
import { useFormik } from "formik";
import useCart from "@/hooks/useCart";
import { addToCartSchema } from "@/utils/validationSchemas/cart";
import useOrder from "@/hooks/useOrder";
import { CiStar } from "react-icons/ci";

const ViewProduct = () => {
  const { getProductById } = useProduct();
  const { addToCart } = useCart();
  const { productId } = useParams();
  const { getUserOrders } = useOrder();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const { values, handleChange, handleSubmit, errors, touched, setFieldValue } =
    useFormik({
      initialValues: {
        quantity: 1,
      },
      enableReinitialize: true,
      onSubmit: (values) => {
        const payload = {
          quantity: values.quantity,
          productId: product?._id,
        };

        addToCart(payload, (resp) => {});
      },
      validationSchema: addToCartSchema,
    });

  useEffect(() => {
    getProductById(productId, (resp) => {
      setProduct(resp);

      if (resp?._id) {
        localStorage.setItem("id", resp._id);
        localStorage.setItem("name", resp.name);
        localStorage.setItem("tags", resp.tags);
      }

      if (resp?.images?.length > 0) {
        setActiveImage(resp.images[0]);
      }
    });
  }, [productId]);

  return (
    <Row>
      <Col xs={24} lg={8} className="p-2 p-lg-4">
        <div className="d-flex flex-wrap gap-2 ">
          {product &&
            product?.images?.length > 0 &&
            product?.images?.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt="product"
                  className=" rounded"
                  width={100}
                  height={100}
                  onClick={() => setActiveImage(image)}
                />
              );
            })}
        </div>
        <p className="text-uppercase fw-bold fs-3  mt-5">Details </p>{" "}
        <p>{product?.name}</p>
        <p className="text-uppercase fw-bold ">Description </p>{" "}
        <p>{product?.description}</p>
        <p className="text-uppercase fw-bold ">Tags </p>{" "}
        <p>{product?.tags?.length > 0 && product?.tags?.toString()}</p>
      </Col>
      <Col xs={24} lg={8} className="p-2 p-lg-4">
        {activeImage && (
          <img
            src={activeImage}
            alt="product"
            className=" rounded"
            width={"100%"}
          />
        )}
      </Col>
      <Col xs={24} lg={8} className="p-2 p-lg-4">
        <CartCard
          product={product}
          values={values}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          handleSubmit={handleSubmit}
          errors={errors}
          updatingCart={false}
        />
        <p className="text-uppercase fw-bold mt-5 ">Reviews </p>{" "}
        <div style={{ minHeight: "600px", overflowY: "scroll" }}>
          {product?.reviews?.length > 0 &&
            product?.reviews?.map((review) => {
              return (
                <div
                  style={{ backgroundColor: "ButtonShadow" }}
                  className="d-flex justify-content-between align-items-center my-2 p-2 rounded "
                >
                  <div className=" gap-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CiStar
                        key={index}
                        color={index < review?.rating ? "orange" : "gray"}
                        size={20}
                      />
                    ))}
                    <p>{`${review?.user?.firstName} ${review?.user?.lastName}`}</p>
                    <p>{review?.comment}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </Col>
    </Row>
  );
};

export default ViewProduct;
