import React from "react";
import { Button, Popconfirm } from "antd";
import CustomButton from "../custom-button";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "@/config/app-routes";

const DialogBox = () => {
  const navigate = useNavigate();
  const confirm = () => {
    navigate(APP_ROUTES.public.LOGIN);
  };

  return (
    <Popconfirm
      title="Please login to proceed!"
      description="Do you want to proceed?"
      onConfirm={confirm}
      onOpenChange={() => console.log("open change")}
      okButtonProps={{ style: { backgroundColor: "black", color: "white" } }} // Change color here
      cancelButtonProps={{
        style: { backgroundColor: "white", color: "black" },
      }}
    >
      <Button>Add to Cart</Button>
    </Popconfirm>
  );
};

export default DialogBox;
