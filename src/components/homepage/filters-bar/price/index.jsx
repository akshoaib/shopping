import React from "react";
import { Checkbox, Col, Row } from "antd";
import CustomInput from "@/components/shared-components/custom-input";

const Price = ({ values, handleChange }) => {
  return (
    <>
      <h6>Price</h6>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <CustomInput
            label="Start Price"
            name="startPrice"
            value={values.startPrice}
            handleChange={handleChange}
            type="number"
          />
        </Col>
        <Col span={8}>
          <CustomInput
            label="End Price"
            name="endPrice"
            value={values.endPrice}
            handleChange={handleChange}
            type="number"
          />
        </Col>
      </Row>
    </>
  );
};

export default Price;
