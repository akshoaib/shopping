import { Col, Row } from "antd";
import CustomInput from "@/components/shared-components/custom-input";
import CustomSelect from "@/components/shared-components/custom-select";

const FiltersBar = ({ values, handleChange, handleBlur, touched }) => {
  console.log({ values });

  const quantityDropdown = [
    {
      name: "out of stock",
      _id: 0,
    },
    {
      name: "in stock stock",
      _id: 1,
    },
    {
      name: "less than 10",
      _id: 9,
    },
    {
      name: "greater than 10",
      _id: 10,
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} lg={4}>
        <CustomInput
          name="name"
          label="Product name"
          value={values.name}
          handleChange={handleChange}
        />
      </Col>
      <Col xs={24} lg={4}>
        <CustomSelect
          data={quantityDropdown}
          label="Quantity"
          name="quantity"
          value={values.quantity}
          onBlur={handleBlur}
          handleChange={handleChange}
        />
      </Col>
      <Col xs={24} lg={4}>
        <CustomInput
          type="number"
          name="minPrice"
          label="Min Price"
          value={values.minPrice}
          handleChange={handleChange}
        />
      </Col>
      <Col xs={24} lg={4} className="ms-auto ms-lg-0">
        <CustomInput
          type="number"
          name="maxPrice"
          label="Max Price"
          value={values.maxPrice}
          handleChange={handleChange}
        />
      </Col>
      <Col xs={24} lg={4} className="ms-auto ms-lg-0">
        <CustomInput
          name="rating"
          label="Rating"
          value={values.rating}
          handleChange={handleChange}
        />
      </Col>
    </Row>
  );
};

export default FiltersBar;
