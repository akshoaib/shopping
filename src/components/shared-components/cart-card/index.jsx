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
}) => {
  const [mainImage, setMainImage] = useState(product?.images[0]);
  console.log(product?.images[0]);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    setMainImage(product?.images[0]);
  }, [product]);
  return (
    // <Row>
    <>
      <Col xs={6} className=" ps-4 pt-2">
        <p className={styles.name}>{product?.name}</p>
        <p className={styles.price}>Rs. {product?.price}</p>
        <div className="d-flex gap-2">
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
          {updatingCart && (
            <div>
              <MdDeleteOutline cursor="pointer" size={20} />
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
