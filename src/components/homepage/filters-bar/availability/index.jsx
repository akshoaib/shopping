import React from "react";
import { Checkbox, Col, Row } from "antd";

const Availability = ({ values, handleChange }) => {
  const onCategoriesChange = (checkedValues) => {
    console.log({ checkedValues });
    handleChange({
      target: {
        name: "availability",
        value: checkedValues,
      },
    });
  };
  return (
    <>
      <h6>Availability</h6>
      <Checkbox.Group style={{ width: "100%" }} onChange={onCategoriesChange}>
        <Row>
          <Col span={24}>
            <Checkbox value={true}>In Stock</Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value={false}>Out of Stock</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </>
  );
};

export default Availability;
