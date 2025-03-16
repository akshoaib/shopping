import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

const LoaderButton = () => {
  return (
    <Flex align="left" gap="middle">
      <Spin indicator={<LoadingOutlined spin />} size="small" />
    </Flex>
  );
};

export default LoaderButton;
