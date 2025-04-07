import { useEffect, useState } from "react";
import PaginatedTable from "../shared-components/table/paginated-table";
import { useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import useOrder from "@/hooks/useOrder";
import EditOrderModal from "./edit-order-modal";
import CustomBadge from "../shared-components/custom-badge";
import { OrderTypes, PaymentTypes } from "@/constants";

const Order = () => {
  const { loading, getAllOrders } = useOrder();
  const { categoryId } = useParams();

  const [dataState, setDataState] = useState({
    page: 1,
  });
  const [data, setData] = useState({
    data: [],
    total: 0,
  });

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const OrderStatusBg = {
    1: "rgb(255 165 0 / 21%)",
    2: "#0000ff4d",
    3: "rgb(255 255 0 / 5%)",
    4: "rgb(0 128 0 / 19%)",
    5: "#ff00002e",
  };
  const OrderStatusBorder = {
    1: "Orange",
    2: "Blue",
    3: "Yellow",
    4: "#008000",
    5: "Red",
  };
  const PaymentStatusBg = {
    1: "rgb(255 165 0 / 21%)",
    2: "rgb(0 128 0 / 19%)",
    3: "#ff00002e",
  };
  const PaymentStatusBorder = {
    1: "Orange",
    2: "#008000",
    3: "Red",
  };

  const handlePageChange = (page) => {
    setDataState({ ...dataState, page });
  };

  const handleEditOrder = (order) => {
    setIsOrderModalOpen(true);
    setSelectedOrder(order);
  };

  const handleCloseEditOrderModal = () => {
    setDataState({ ...dataState });

    setIsOrderModalOpen(false);
  };
  const columns = [
    {
      title: "Customer",
      dataIndex: "user",
      key: "user",
      render: (user) => <>{`${user?.firstName} ${user?.lastName}`}</>,
    },
    {
      title: "Location",
      dataIndex: "address",
      key: "address",
      render: (address) => <>{address?.city}</>,
    },
    {
      title: "Order Status",
      dataIndex: "orderStatus",
      key: "orderStatus",
      render: (orderStatus) => (
        <CustomBadge
          bg={OrderStatusBg[orderStatus]}
          border={OrderStatusBorder[orderStatus]}
          title={OrderTypes[orderStatus]}
        />
      ),
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (paymentStatus) => (
        <CustomBadge
          bg={PaymentStatusBg[paymentStatus]}
          border={PaymentStatusBorder[paymentStatus]}
          title={PaymentTypes[paymentStatus]}
        />
      ),
    },

    {
      title: "Total",
      dataIndex: "totalAmount",
      key: "totalAmount",
      fixed: "right",
      width: 100,
    },
    {
      title: "Action",
      key: "total",
      fixed: "right",
      width: 100,
      render: (order) => (
        <FiEdit onClick={() => handleEditOrder(order)} cursor="pointer" />
      ),
    },
  ];
  const body = {
    category: categoryId,
  };

  const defaultBody = (values) => {
    return {
      ...body,
      ...values,
      ...dataState,
      limit: 10,
    };
  };

  const fetchSearchData = (body) => {
    getAllOrders({}, (resp) => {
      setData({
        data: resp.orders,
        total: resp.total,
      });
    });
  };

  useEffect(() => {
    fetchSearchData(defaultBody({}));
  }, [dataState]);
  return (
    <>
      <EditOrderModal
        isModalOpen={isOrderModalOpen}
        handleCloseEditOrderModal={handleCloseEditOrderModal}
        selectedOrder={selectedOrder}
        dataState={dataState}
        setDataState={setDataState}
      />
      <PaginatedTable
        data={data}
        columns={columns}
        handlePageChange={handlePageChange}
        loading={loading}
      />
    </>
  );
};

export default Order;
