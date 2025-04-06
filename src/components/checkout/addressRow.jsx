import { Col, Row } from "antd";
import styles from "./address.module.css";
import { MdDeleteOutline } from "react-icons/md";

const AddressRow = ({
  address,
  handleSetSelectedAddress,
  handleDeleteAddress,
}) => {
  return (
    <>
      <Row className={styles.addressContainer}>
        <Col
          onClick={() => handleSetSelectedAddress(address?.addressId)}
          xs={4}
          className="d-flex align-items-center"
        >
          <input type="radio" name="address" checked={address?.selected} />
        </Col>
        <Col xs={18}>
          <p>{address?.address?.completeAddress}</p>
        </Col>
        <Col
          xs={2}
          className=" d-flex justify-content-center align-items-center"
        >
          <MdDeleteOutline
            onClick={() => handleDeleteAddress(address?.addressId)}
            size={20}
            color="red"
          />
        </Col>
      </Row>
    </>
  );
};

export default AddressRow;
