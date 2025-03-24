import { Col, Row } from "antd";
import styles from "./add-to-cart.module.css";
import CustomButton from "@/components/shared-components/custom-button";
import { useFormik } from "formik";
import { useState } from "react";
const AddToCart = ({ product }) => {
  const [mainImage, setMainImage] = useState(product?.images[0]);
  const { values } = useFormik({
    initialValues: {
      quantity: "1",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log({ values });
      const formData = new FormData();

      formData.append("name", values.name);
      formData.append("image", values.image[0]);
      console.log({ formData });

      createCategory(formData, (resp) => {
        console.log({ resp });
        handleGetCategories();
        onCloseSideDrawer();
      });
    },
    // validationSchema: createCategorySchema,
  });
  console.log({ values });

  return (
    <>
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
        <Col xs={24} md={15} className=" ps-4 pt-2">
          <p className={styles.name}>{product?.name}</p>
          <p className={styles.price}>Rs. {product?.price}</p>
          <div className={`${styles.addToCartContainer} d-flex mb-2`}>
            <button className={styles.addToCartButton}>-</button>
            <input
              value={values.quantity}
              type="text"
              className={styles.addToCartInput}
            />
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
