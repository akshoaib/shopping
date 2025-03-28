import { Col, Row } from "antd";
import CustomInput from "../shared-components/custom-input";
import FooterButtons from "../shared-components/footer-btns";
import LoaderButton from "../shared-components/loader-button";
import styles from "./address.module.css";

const AddressForm = ({
  values,
  handleChange,
  handleSubmit,
  touched,
  handleBlur,
  errors,
  loading,
  handleReset,
}) => {
  return (
    <>
      <div>
        <CustomInput
          name="town"
          type="text"
          handleChange={handleChange}
          value={values.town}
          onBlur={handleBlur}
          touched={touched.town}
          label="Town"
          placeholder="Enter town"
          error={errors.town}
        />

        <CustomInput
          name="city"
          type="text"
          handleChange={handleChange}
          value={values.city}
          onBlur={handleBlur}
          touched={touched.city}
          label="City"
          placeholder="Enter city"
          error={errors.city}
        />

        <CustomInput
          name="completeAddress"
          type="text"
          handleChange={handleChange}
          value={values.completeAddress}
          onBlur={handleBlur}
          touched={touched.completeAddress}
          label="Address"
          placeholder="Enter address"
          error={errors.completeAddress}
        />

        <FooterButtons
          title={loading ? <LoaderButton /> : "Add"}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
          disabled={loading}
        />
      </div>
    </>
  );
};

export default AddressForm;
