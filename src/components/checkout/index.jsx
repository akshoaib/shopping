import useAddress from "@/hooks/useAddress";
import { createAddressSchema } from "@/utils/validationSchemas/address";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import AddressForm from "./addressForm";
import { Col, Row } from "antd";
import AddressRow from "./AddressRow";
import CustomButton from "../shared-components/custom-button";
import styles from "./address.module.css";
import useCart from "@/hooks/useCart";
import { useSelector } from "react-redux";
import OrderSummary from "./orderSummary";
import PageLoader from "../shared-components/page-loader";
import useOrder from "@/hooks/useOrder";
const Checkout = () => {
  const { loading, getAddresses, addAddress, deleteAddress } = useAddress();
  const { placeOrder } = useOrder();
  const token = useSelector((state) => state.auth.token);

  const { loading: cartLoading, getCart } = useCart();

  const [userAddresses, setUserAddresses] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(null);
  const [userCart, setUserCart] = useState({
    cart: [],
    total: 0,
  });

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    handleReset,
  } = useFormik({
    initialValues: {
      city: "",
      town: "",
      completeAddress: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      addAddress(values, (resp) => {
        handleGetAddress();
      });
    },
    validationSchema: createAddressSchema,
  });

  const handleGetAddress = () => {
    getAddresses((resp) => {
      let addresses =
        resp?.address &&
        resp?.address?.addressList?.length > 0 &&
        resp?.address?.addressList?.map((item, index) => {
          return {
            selected: index === 0 ? true : false,
            addressId: item?._id,
            address: {
              town: item?.town,
              city: item?.city,
              completeAddress: item?.completeAddress,
            },
          };
        });

      if (resp?.address?.addressList?.length > 0) {
        setUserAddresses(addresses);
      } else {
        setUserAddresses([]);
      }
      if (resp?.address?.addressList?.length < 1) {
        setShowAddressForm(true);
      } else {
        setShowAddressForm(false);
      }
    });
  };

  const handleSetSelectedAddress = (addressId) => {
    let updatedAddress = userAddresses?.map((item, index) => {
      return {
        ...item,
        selected: item?.addressId === addressId ? true : false,
      };
    });

    setUserAddresses(updatedAddress);
  };

  const handleDeleteAddress = (id) => {
    deleteAddress(id, (resp) => {
      handleGetAddress();
    });
  };

  const handleGetCart = () => {
    getCart((resp) => {
      if (resp?.cart) {
        setUserCart({
          cart: resp.cart,
          total: resp.total,
        });
      }
    });
  };

  const handlePlaceOrder = () => {
    let selectedAddress = userAddresses?.filter((item) => item?.selected)[0];
    let payload = {
      address: selectedAddress?.addressId,
    };
    placeOrder(payload, (resp) => {
      handleGetCart();
    });
  };

  useEffect(() => {
    if (token) {
      handleGetAddress();
      handleGetCart();
    }
  }, []);

  return (
    <>
      <PageLoader loading={loading || cartLoading} />

      <Row className="px-auto">
        <Col xs={24} md={7} className="mx-auto">
          {userAddresses && userAddresses?.length > 0 && (
            <>
              <div>
                <p className={styles.savedAddressHeader}>
                  Saved Addresses (please select)
                </p>
              </div>
              {userAddresses?.map((item, index) => {
                return (
                  <AddressRow
                    key={index}
                    address={item}
                    handleSetSelectedAddress={handleSetSelectedAddress}
                    handleDeleteAddress={handleDeleteAddress}
                  />
                );
              })}
            </>
          )}
          <div className="">
            <CustomButton
              title="Add New address"
              className="ms-1"
              handleClick={() => setShowAddressForm(true)}
            />
            {showAddressForm && (
              <>
                <div>
                  <p className={styles.newAddressHeader}>New Address</p>
                </div>
                <AddressForm
                  values={values}
                  handleBlur={handleBlur}
                  touched={touched}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  errors={errors}
                  loading={loading}
                  handleReset={handleReset}
                />
              </>
            )}
          </div>
        </Col>
        <Col xs={24} md={13} className="mx-auto">
          <div>
            <p className={styles.newAddressHeader}>Order Summary</p>
            <OrderSummary cart={userCart} handlePlaceOrder={handlePlaceOrder} />
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Checkout;
