import { OrderTypes } from "@/constants";
import { Col, Row } from "antd";
import { format } from "date-fns";
import React from "react";

const OrderCard = ({ order }) => {
  const OrderStatusBg = {
    1: "rgb(255 165 0 / 21%)",
    2: "#0000ff4d",
    3: "rgb(255 255 0 / 5%)",
    4: "rgb(0 128 0 / 19%)",
    5: "#ff00002e",
  };
  const OrderStatusBorder = {
    1: "Orange",
    2: "Blue",
    3: "Yellow",
    4: "#008000",
    5: "Red",
  };
  return (
    // <div
    //   className="card my-2"
    //   style={{ padding: "20px", borderRadius: "10px" }}
    // >
    //   <div className="d-flex justify-content-between align-items-center">
    //     <h5>Order ID: {order._id}</h5>
    //     <span
    //       style={{
    //         backgroundColor: OrderStatusBg[order.status],
    //         border: `1px solid ${OrderStatusBorder[order.status]}`,
    //         padding: "5px 10px",
    //         borderRadius: "5px",
    //       }}
    //     >
    //       {order.status}
    //     </span>
    //   </div>
    //   <p>Customer Name: {`${order.user.firstName} ${order.user.lastName}`}</p>
    //   <p>Location: {order.address}</p>
    //   <p>Total Amount: ${order.totalAmount}</p>

    // </div>
    <Row>
      <Col xs={12} sm={6} className="border d-flex justify-content-between">
        <div>
          {" "}
          <p>Order ID: </p>
          <p>
            Date:{" "}
            {order?.createdAt &&
              format(new Date(order?.createdAt), "MM/dd/yyyy")}
          </p>
        </div>
        <div>
          {" "}
          <div
            style={{
              border: `2px solid ${OrderStatusBg[order?.orderStatus]}`,
              borderRadius: "20px",
              padding: "5px 10px ",
              width: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                borderRadius: "50%",
                width: "15px",
                height: "15px",
                backgroundColor: OrderStatusBg[order?.orderStatus],
              }}
            ></span>
            <span>{OrderTypes[order?.orderStatus]}</span>
          </div>
          <p>Total: {order?.totalAmount}</p>
        </div>
      </Col>
    </Row>
  );
};

export default OrderCard;
