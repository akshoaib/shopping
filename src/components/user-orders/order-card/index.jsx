import { OrderTypes } from "@/constants";
import { Col, Row } from "antd";
import { format } from "date-fns";
import React from "react";
import { CiStar } from "react-icons/ci";
import Rating from "./rating";
import { useSelector } from "react-redux";

const OrderCard = ({ order }) => {
  const user = useSelector((state) => state.auth.loggedInUser);

  const OrderStatusBg = {
    1: "rgb(255 165 0 / 21%)",
    2: "#0000ff4d",
    3: "rgb(255 255 0 / 5%)",
    4: "rgb(0 128 0 / 19%)",
    5: "#ff00002e",
  };
  const OrderStatusBorder = {
    1: "rgb(255 165 0 / 21%)",
    2: "Blue",
    3: "Yellow",
    4: "#008000",
    5: "Red",
  };

  return (
    <Row>
      <Col
        xs={12}
        lg={12}
        className="rounded p-2 mx-auto my-2"
        style={{ border: `2px solid ${OrderStatusBorder[order?.orderStatus]}` }}
      >
        <div className=" d-flex justify-content-between ">
          <div>
            <p>Order ID: {order?._id}</p>
            <p>
              Date:{" "}
              {order?.createdAt
                ? format(new Date(order.createdAt), "MM/dd/yyyy")
                : "N/A"}
            </p>
          </div>
          <div>
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
        </div>
        <div>
          <p>Products:</p>
          {order?.items?.map((product) => {
            return (
              <div className="d-flex justify-content-between align-items-center my-2">
                <div className="d-flex gap-2 ">
                  <img
                    src={product?.productId?.images[0]}
                    className="rounded"
                    alt="product"
                    width={50}
                    height={50}
                  />
                  <p>{product?.productId?.name}</p>
                </div>
                {order?.orderStatus == 4 && (
                  <div className="d-flex gap-2">
                    <div className="d-flex gap-1">
                      <Rating
                        rating={
                          product?.productId?.reviews
                            ?.map((review) => {
                              if (review?.user == user?.userId) {
                                return review?.rating;
                              }
                            })
                            ?.reverse()?.[0]
                        }
                        productId={product?.productId?._id}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};

export default OrderCard;
