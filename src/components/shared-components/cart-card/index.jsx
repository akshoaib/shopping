import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import styles from "./add-to-cart.module.css";
import CustomButton from "../custom-button";
import { MdDeleteOutline } from "react-icons/md";
import DialogBox from "../dialog-box";
import { useSelector } from "react-redux";

const CartCard = ({
  product,
  values,
  handleChange,
  handleSubmit,
  errors,
  setFieldValue,
  updatingCart = true,
  productNumber,
  handleUpdateCart,
  handleDeleteCartItem,
}) => {
  const [mainImage, setMainImage] = useState(product?.images[0]);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    setMainImage(product?.images[0]);
  }, [product]);
  return (
    // <Row>
    <>
      <Col className=" ps-4 pt-2">
        <p className={styles.name}>{product?.name}</p>
        {product?.reviews?.length > 0 && (
          <p className={styles.name}>
            Rating {product?.rating?.toFixed(1)} ({product?.reviews?.length})
          </p>
        )}

        <p className={styles.price}>Rs. {product?.price}</p>
        <div className="d-flex gap-2">
          <div className={`${styles.addToCartContainer} d-flex mb-2`}>
            <button
              onClick={() => {
                if (updatingCart) {
                  setFieldValue(
                    `cart.${productNumber}.quantity`,
                    values.quantity - 1
                  );

                  handleUpdateCart(product?._id, values.quantity == 1 ? 0 : -1);
                } else {
                  setFieldValue("quantity", values.quantity - 1);
                }
              }}
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
                if (updatingCart) {
                  setFieldValue(
                    `cart.${productNumber}.quantity`,
                    values.quantity + 1
                  );
                  handleUpdateCart(product?._id, 1);
                } else {
                  setFieldValue("quantity", values?.quantity + 1);
                }
              }}
              className={styles.addToCartButton}
            >
              +
            </button>
          </div>
          {updatingCart && (
            <div>
              <MdDeleteOutline
                onClick={() => handleDeleteCartItem(product?._id)}
                cursor="pointer"
                size={20}
              />
            </div>
          )}
        </div>
        {errors && <p>{errors.quantity}</p>}
        {!updatingCart && (
          <div>
            {token ? (
              <CustomButton title="Add to Cart" handleClick={handleSubmit} />
            ) : (
              <DialogBox />
            )}
          </div>
        )}
      </Col>
    </>
    // </Row>
  );
};

export default CartCard;
