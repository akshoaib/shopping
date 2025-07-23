import React from "react";
import { Checkbox, Col, Row } from "antd";

const Category = ({ values, handleChange, categories }) => {
  const onCategoriesChange = (checkedValues) => {
    console.log({ checkedValues });
    handleChange({
      target: {
        name: "categories",
        value: checkedValues,
      },
    });
  };
  return (
    <>
      <h6>Categories</h6>
      <Checkbox.Group style={{ width: "100%" }} onChange={onCategoriesChange}>
        <Row>
          {categories.map((category) => (
            <Col span={24} key={category.id}>
              <Checkbox value={category.name}>{category.name}</Checkbox>
            </Col>
          ))}
          {/* <Col span={8}>
          <Checkbox value="A">In Stock</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="B">Out of Stock</Checkbox>
        </Col> */}
        </Row>
      </Checkbox.Group>
    </>
  );
};

export default Category;
