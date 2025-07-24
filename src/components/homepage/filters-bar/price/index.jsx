import React from "react";
import { Checkbox, Col, Row } from "antd";
import CustomInput from "@/components/shared-components/custom-input";

const Price = ({ values, handleChange }) => {
  const onPriceChange = (e) => {
    const { name, value } = e.target;

    handleChange({
      target: {
        name: name,
        value: value,
      },
    });
  };
  return (
    <>
      <h6>Price</h6>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <CustomInput
            label="Min"
            name="minPrice"
            value={values.minPrice}
            handleChange={onPriceChange}
            type="number"
          />
        </Col>
        <Col span={8}>
          <CustomInput
            label="Max"
            name="maxPrice"
            value={values.maxPrice}
            handleChange={onPriceChange}
            type="number"
          />
        </Col>
      </Row>
    </>
  );
};

export default Price;
