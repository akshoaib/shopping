import useOrder from "@/hooks/useOrder";
import { useEffect, useState } from "react";
import OrderCard from "./order-card";

const UserOrders = () => {
  const { getUserOrders } = useOrder();
  const [orders, setOrders] = useState([]);

  const handleGetUserOrders = () => {
    getUserOrders((resp) => {
      console.log("User Orders: ", resp);
      setOrders(resp?.orders);
    });
  };
  console.log({ orders });

  useEffect(() => {
    handleGetUserOrders();
  }, []);

  return (
    <>
      {orders?.map((order) => {
        return <OrderCard key={order._id} order={order} />;
      })}
    </>
  );
};

export default UserOrders;
