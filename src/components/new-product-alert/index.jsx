import { Col, Row } from "antd";

const NewProductAlert = ({
  title,
  description,
  image,
  price,
  handleCloseAlert,
}) => {
  return (
    <Row
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "40%",
        margin: "10px auto !important",
        zIndex: 1000,
        backgroundColor: "white",
        padding: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        borderRadius: "8px",
      }}
      className="new-product-alert-container"
    >
      <Col span={6} className="new-product-alert">
        <img
          width={50}
          height={50}
          src={image}
          alt={title}
          className="rounded"
        />
      </Col>

      <Col span={16} className="new-product-alert">
        <h6>{title}</h6>
        <p>{description}</p>
        <p>Price: {price} Rs.</p>
      </Col>
      <Col span={2}>
        <button onClick={() => handleCloseAlert()}>X</button>
      </Col>
    </Row>
  );
};

export default NewProductAlert;
