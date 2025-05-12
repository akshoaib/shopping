import CustomButton from "@/components/shared-components/custom-button";
import CustomInput from "@/components/shared-components/custom-input";
import FooterButtons from "@/components/shared-components/footer-btns";
import { rateProductSchema } from "@/utils/validationSchemas/product";
import { Col, Row } from "antd";
import { useFormik } from "formik";

const RatingForm = ({
  rating,
  handleRateProduct,
  setShowRatingForm,
  savedRating,
  setRate,
}) => {
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
    handleBlur,
  } = useFormik({
    initialValues: {
      comment: "",
      rating: rating,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      handleRateProduct(values);
    },
    validationSchema: rateProductSchema,
  });
  return (
    <div className="rating-form">
      <Row>
        <Col span={24}>
          <CustomInput
            name="comment"
            type="text"
            handleChange={handleChange}
            value={values.comment}
            onBlur={handleBlur}
            touched={touched.comment}
            label="Write a Review:"
            placeholder="Enter your review here..."
            error={errors.comment}
          />
        </Col>
        <Col span={24} className="d-flex justify-content-start">
          {/* <CustomButton handleClick={handleSubmit} title={"Add Review"} /> */}
          <FooterButtons
            handleSubmit={handleSubmit}
            title={"Add Review"}
            ResetTitle="Cancel"
            handleReset={() => {
              setShowRatingForm(false);
              setRate(savedRating);
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default RatingForm;
