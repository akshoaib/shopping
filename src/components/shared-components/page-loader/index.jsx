import React from "react";
import { Button, Flex, Spin } from "antd";

const PageLoader = ({ loading }) => {
  const [percent, setPercent] = React.useState(0);

  const showLoader = () => {
    setSpinning(true);
    let ptg = -10;

    const interval = setInterval(() => {
      ptg += 5;
      setPercent(ptg);

      if (ptg > 120) {
        clearInterval(interval);
        setSpinning(false);
        setPercent(0);
      }
    }, 100);
  };

  return (
    <>
      <Flex align="center" gap="middle">
        <Spin size="large" spinning={loading} fullscreen />
      </Flex>
    </>
  );
};

export default PageLoader;
