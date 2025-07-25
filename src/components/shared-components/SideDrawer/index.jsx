import { Drawer } from "antd";

const SideDrawer = ({
  title,
  onClose,
  open,
  children,
  placement = "right",
}) => {
  return (
    <>
      <Drawer title={title} onClose={onClose} open={open} placement={placement}>
        {children}
      </Drawer>
    </>
  );
};

export default SideDrawer;
