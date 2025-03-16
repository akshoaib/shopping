import { Button, Drawer } from "antd";
import { useState } from "react";
import CustomButton from "../custom-button";

const SideDrawer = ({ title, onClose, open, children }) => {
  //   const [open, setOpen] = useState(false);

  //   const showDrawer = () => {
  //     setOpen(true);
  //   };

  //   const onClose = () => {
  //     setOpen(false);
  //   };
  return (
    <>
      <Drawer title={title} onClose={onClose} open={open}>
        {children}
      </Drawer>
    </>
  );
};

export default SideDrawer;
