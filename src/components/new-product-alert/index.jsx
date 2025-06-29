import { Col, Row } from "antd";

const NewProductAlert = ({
  title,
  description,
  image,
  price,
  handleCloseAlert,
  productId,
}) => {
  return (
    <Row
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "40%",
        margin: "15px auto !important",
        zIndex: 1000,
        backgroundColor: "white",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        borderRadius: "8px",
        cursor: "pointer",
      }}
      className="new-product-alert-container"
      onClick={(e) => {
        e.stopPropagation();
        window.location.href = `/product/${productId}`;
      }}
    >
      <Col span={4} className="new-product-alert">
        <img
          width={"100%"}
          height={"100%"}
          src={image}
          alt={title}
          className="rounded"
        />
      </Col>

      <Col span={19} className="new-product-alert pt-2 ps-2">
        <h6>{title}</h6>
        <p>{description}</p>
        <p>Price: {price} Rs.</p>
      </Col>
      <Col span={1} className="d-flex justify-content-end align-items-start">
        <button
          className="rounded p-1 bg-transparent border-0"
          onClick={(e) => {
            e.stopPropagation();
            handleCloseAlert();
          }}
        >
          X
        </button>
      </Col>
    </Row>
  );
};

export default NewProductAlert;
