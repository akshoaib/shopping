import { Button } from "antd";

const CustomButton = ({ title, handleClick, disabled = false }) => {
  return (
    <>
      <Button
        disabled={disabled}
        className=""
        color="default"
        onClick={handleClick}
      >
        {title}
      </Button>
    </>
  );
};

export default CustomButton;
