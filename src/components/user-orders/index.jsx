import useOrder from "@/hooks/useOrder";
import { useEffect } from "react";

const UserOrders = () => {
  const { getUserOrders } = useOrder();

  const handleGetUserOrders = () => {
    getUserOrders((resp) => {
      console.log("User Orders: ", resp);
    });
  };

  useEffect(() => {
    handleGetUserOrders();
  }, []);
  return <></>;
};

export default UserOrders;
