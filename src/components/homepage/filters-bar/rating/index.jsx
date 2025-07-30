import React from "react";
import { Checkbox, Col, Row } from "antd";
import { CiStar } from "react-icons/ci";

const Rating = ({ values, handleChange }) => {
  const onRatingChange = (checkedValues) => {
    console.log({ checkedValues });
    handleChange({
      target: {
        name: "rating",
        value: checkedValues,
      },
    });
  };
  return (
    <>
      <h6>Rating</h6>
      <Row>
        <Col span={24}>
          <Checkbox.Group style={{ width: "100%" }} onChange={onRatingChange}>
            {Array.from({ length: 5 }, (_, index1) => (
              <Col span={24} key={index1}>
                <Checkbox value={5 - index1}>
                  {Array.from({ length: 5 }, (_, index2) => (
                    <CiStar
                      key={index2}
                      color={5 - (index2 + 1) >= index1 ? "orange" : "gray"}
                      size={20}
                    />
                  ))}
                </Checkbox>
              </Col>
            ))}
          </Checkbox.Group>
        </Col>
      </Row>
    </>
  );
};

export default Rating;
