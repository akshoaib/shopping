import { Col, Row } from "antd";
import styles from "./add-to-cart.module.css";
import CustomButton from "@/components/shared-components/custom-button";
const AddToCart = ({ product }) => {
  return (
    <>
      <Row>
        <Col xs={24} md={9}>
          <div>
            <img
              src={product.images[0]}
              height="100%"
              width="100%"
              className="rounded"
            />
          </div>
          <div className="d-flex gap-1 flex-wrap mt-2">
            {product?.images?.length > 0 &&
              product?.images?.slice(1, product?.images.length).map((img) => {
                return (
                  <div>
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
            <button className={styles.addToCartButton}>-</button>
            <input type="text" className={styles.addToCartInput} />
            <button className={styles.addToCartButton}>+</button>
          </div>
          <div>
            <CustomButton title={"Add to Cart"} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AddToCart;
