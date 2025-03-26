import { Col, Row } from "antd";
import styles from "./add-to-cart.module.css";
import CustomButton from "@/components/shared-components/custom-button";
import { useFormik } from "formik";
import { useState } from "react";
import { addToCartSchema } from "@/utils/validationSchemas/cart";
import useCart from "@/hooks/useCart";
import CartCard from "@/components/shared-components/cart-card";
import { useSelector } from "react-redux";
const AddToCart = ({ product }) => {
  const [mainImage, setMainImage] = useState(product?.images[0]);

  const { addToCart } = useCart();

  const token = useSelector((state) => state.auth.token);

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

        addToCart(payload, (resp) => {
          console.log({ resp });
        });
      },
      validationSchema: addToCartSchema,
    });
  console.log({ values });

  return (
    <>
      {/* <Row>
        <Col xs={24} md={9}>
          <div>
            <img
              src={mainImage}
              height="100%"
              width="100%"
              className="rounded"
            />
          </div>
          <div className="d-flex gap-1 flex-wrap mt-2">
            {product?.images?.length > 0 &&
              product?.images?.slice(1, product?.images.length).map((img) => {
                return (
                  <div onClick={() => setMainImage(img)}>
                    <img
                      width={90}
                      height={100}
                      className="rounded"
                      src={img}
                    />
                  </div>
                );
              })}
          </div>
        </Col>
        <Col xs={24} md={15} className=" ps-4 pt-2">
          <p className={styles.name}>{product?.name}</p>
          <p className={styles.price}>Rs. {product?.price}</p>
          <div className={`${styles.addToCartContainer} d-flex mb-2`}>
            <button
              onClick={() => setFieldValue("quantity", values.quantity - 1)}
              className={styles.addToCartButton}
            >
              -
            </button>
            <input
              name="quantity"
              onChange={handleChange}
              value={values.quantity}
              type="text"
              className={styles.addToCartInput}
            />
            <button
              onClick={() => {
                console.log("quantity", values.quantity + 1);

                setFieldValue("quantity", values.quantity + 1);
              }}
              className={styles.addToCartButton}
            >
              +
            </button>
          </div>
          {errors && <p>{errors.quantity}</p>}
          <div>
            <CustomButton title={"Add to Cart"} handleClick={handleSubmit} />
          </div>
        </Col>
      </Row> */}
      <Row>
        <Col xs={24} md={9}>
          <div>
            <img
              src={mainImage}
              height="100%"
              width="100%"
              className="rounded"
            />
          </div>
          <div className="d-flex gap-1 flex-wrap mt-2">
            {product?.images?.length > 0 &&
              product?.images?.slice(1, product?.images.length).map((img) => {
                return (
                  <div onClick={() => setMainImage(img)}>
                    <img
                      width={90}
                      height={100}
                      className="rounded"
                      src={img}
                    />
                  </div>
                );
              })}
          </div>
        </Col>
        <CartCard
          product={product}
          values={values}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          handleSubmit={handleSubmit}
          errors={errors}
          updatingCart={false}
        />
      </Row>
    </>
  );
};

export default AddToCart;
