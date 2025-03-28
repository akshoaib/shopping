import useAddress from "@/hooks/useAddress";
import { createAddressSchema } from "@/utils/validationSchemas/address";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import AddressForm from "./addressForm";
import { Row } from "antd";
import AddressRow from "./AddressRow";
import CustomButton from "../shared-components/custom-button";
import styles from "./address.module.css";
import useCart from "@/hooks/useCart";
import { useSelector } from "react-redux";
const Checkout = () => {
  const { loading, getAddresses, addAddress, deleteAddress } = useAddress();
  const token = useSelector((state) => state.auth.token);

  const { getCart } = useCart();

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
      handleGetAddress();
      handleGetCart();
    }
  }, []);

  return (
    <>
      <Row className="w-75 w-lg-50 mx-auto d-flex flex-column">
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
      </Row>

      <Row className="w-75 w-lg-50 mx-auto d-flex flex-column">
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
      </Row>
      <Row className="w-75 w-lg-50 mx-auto d-flex flex-column">
        <div>
          <p className={styles.newAddressHeader}>Order Summary</p>
        </div>
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
      </Row>
    </>
  );
};
export default Checkout;
