import { Col, Row } from "antd";
import CustomInput from "@/components/shared-components/custom-input";
import CustomSelect from "@/components/shared-components/custom-select";
import { VscClearAll } from "react-icons/vsc";

const FiltersBar = ({
  values,
  handleChange,
  handleBlur,
  touched,
  paymentStatusDropdown,
  orderStatusDropdown,
  handleReset,
}) => {
  console.log({ values });
  const selectOption = {
    name: "Select",
    _id: 0,
  };

  return (
    <Row gutter={[16, 16]}>
      <Col className="d-block d-lg-none ms-auto">
        {" "}
        <VscClearAll size={20} onClick={handleReset} />
      </Col>
      <Col xs={24} lg={4}>
        <CustomInput
          name="customer_name"
          label="Customer name"
          value={values.customer_name}
          handleChange={handleChange}
        />
      </Col>
      <Col xs={24} lg={4}>
        <CustomSelect
          data={[selectOption, ...orderStatusDropdown]}
          label="Order Status"
          name="orderStatus"
          value={values.orderStatus}
          onBlur={handleBlur}
          handleChange={handleChange}
        />
      </Col>
      <Col xs={24} lg={4}>
        <CustomSelect
          data={[selectOption, ...paymentStatusDropdown]}
          label="Payment Status"
          name="paymentStatus"
          value={values.paymentStatus}
          onBlur={handleBlur}
          handleChange={handleChange}
        />
      </Col>
      <Col xs={24} lg={4}>
        <CustomInput
          type="number"
          name="total"
          label="Total"
          value={values.total}
          handleChange={handleChange}
        />
      </Col>
    </Row>
  );
};

export default FiltersBar;
