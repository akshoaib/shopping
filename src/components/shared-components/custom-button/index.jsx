import { Button } from "antd";

const CustomButton = ({
  title,
  handleClick,
  disabled = false,
  className = "",
}) => {
  return (
    <>
      <Button
        disabled={disabled}
        className={className}
        color="default"
        onClick={handleClick}
      >
        {title}
      </Button>
    </>
  );
};

export default CustomButton;
