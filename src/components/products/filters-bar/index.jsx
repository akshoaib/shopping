import { Checkbox, Col, Row } from "antd";
import CustomInput from "@/components/shared-components/custom-input";
import CustomSelect from "@/components/shared-components/custom-select";
import { VscClearAll } from "react-icons/vsc";

const FiltersBar = ({
  values,
  handleChange,
  handleBlur,
  touched,
  handleReset,
}) => {
  const onStockChange = (checkedValues) => {
    handleChange({
      target: {
        name: "availability",
        value: checkedValues,
      },
    });
  };

  return (
    <Row gutter={[16, 16]}>
      <Col className="d-block d-lg-none ms-auto">
        {" "}
        <VscClearAll size={20} onClick={handleReset} />
      </Col>
      <Col xs={24} lg={4}>
        <CustomInput
          name="name"
          label="Product name"
          value={values.name}
          handleChange={handleChange}
        />
      </Col>
      <Col xs={24} lg={4}>
        <Checkbox.Group style={{ width: "100%" }} onChange={onStockChange}>
          <Row>
            <Col span={24}>
              <Checkbox value={true}>In Stock</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value={false}>Out of Stock</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
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
