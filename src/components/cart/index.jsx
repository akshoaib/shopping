import { useNavigate } from "react-router-dom";
import CustomButton from "../shared-components/custom-button";
import { APP_ROUTES } from "@/config/app-routes";
import useCart from "@/hooks/useCart";
import { useEffect, useState } from "react";
import { FieldArray, Formik, useFormik } from "formik";
import { addToCartSchema, cartSchema } from "@/utils/validationSchemas/cart";
import { Col, Row } from "antd";
import CartCard from "../shared-components/cart-card";
import { useSelector } from "react-redux";

const Cart = () => {
  const navigate = useNavigate();
  const { loading, getCart } = useCart();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.loggedInUser);

  const [userCart, setUserCart] = useState({
    cart: [],
    total: 0,
  });

  const handleGetCart = () => {
    getCart((resp) => {
      if (resp?.cart && resp?.cart?.length > 0) {
        setUserCart({
          cart: resp.cart,
          total: resp.total,
        });
      }
    });
  };

  useEffect(() => {
    if (token) {
      handleGetCart();
    }
  }, [token]);

  const ImagesComponent = ({ images = [] }) => {
    const [mainImage, setMainImage] = useState();
    useEffect(() => {
      images && images?.length > 0 && setMainImage(images[0]);
    }, []);
    return (
      <>
        <div className="ps-2">
          <img src={mainImage} height={150} width={100} className="rounded" />
        </div>
        {/* <div className="d-flex gap-1 flex-wrap mt-2">
          {images?.length > 0 &&
            images?.slice(1, images.length).map((img) => {
              return (
                <div onClick={() => setMainImage(img)}>
                  <img width={90} height={100} className="rounded" src={img} />
                </div>
              );
            })}
        </div> */}
      </>
    );
  };
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          cart: userCart.cart,
        }}
        onSubmit={(values) => {}}
        validationSchema={cartSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <>
            {/* <Row> */}
            {!token && values?.cart?.length === 0 && (
              <div className="my-5">
                <p className="text-center text-uppercase fw-bold fs-3">
                  Shopping Cart
                </p>
                <p className="text-center text-uppercase fw-bold fs-1 mt-5">
                  Your cart is empty
                </p>
                <div className="d-flex justify-content-center my-4">
                  <CustomButton
                    handleClick={() => navigate(APP_ROUTES.public.CART)}
                    title="Continue shopping"
                  />
                </div>
              </div>
            )}

            <div>
              <FieldArray name="pricing">
                {({}) => (
                  <>
                    {values.cart &&
                      values.cart?.length > 0 &&
                      values.cart.map((cartItem, index) => (
                        <Row key={`cart-${index}`} className="mb-2">
                          <Col xs={9} md={3}>
                            <ImagesComponent
                              images={cartItem?.product?.images}
                            />
                          </Col>
                          <CartCard
                            product={cartItem.product}
                            updatingCart={true}
                            values={
                              (values.cart &&
                                values.cart.length > 0 &&
                                values.cart[index] &&
                                values.cart[index]) ||
                              {}
                            }
                            handleChange={handleChange}
                            setFieldValue={setFieldValue}
                            handleSubmit={handleSubmit}
                            errors={
                              (errors.cart &&
                                errors.cart.length > 0 &&
                                errors.cart[index] &&
                                errors.cart[index]) ||
                              {}
                            }
                          />
                        </Row>
                      ))}
                  </>
                )}
              </FieldArray>
            </div>
            {/* </Col> */}
            {/* </Row> */}
          </>
        )}
      </Formik>

      {/*  */}
    </>
  );
};

export default Cart;
