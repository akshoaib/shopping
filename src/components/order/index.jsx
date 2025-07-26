import { useEffect, useState } from "react";
import PaginatedTable from "../shared-components/table/paginated-table";
import { useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import useOrder from "@/hooks/useOrder";
import EditOrderModal from "./edit-order-modal";
import CustomBadge from "../shared-components/custom-badge";
import { OrderTypes, PaymentTypes } from "@/constants";
import SideDrawer from "../shared-components/SideDrawer";
import { useFormik } from "formik";
import FiltersBar from "./filters-bar";
import { Col, Row } from "antd";
import { CiFilter } from "react-icons/ci";
import { VscClearAll } from "react-icons/vsc";

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
  const [showFiltersBar, setShowFiltersBar] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const {
    loading: dropDownsLoading,
    getOrderStatusDropdown,
    getPaymentStatusDropdown,
    updateOrder,
  } = useOrder();

  const [orderStatusDropdown, setOrderStatusDropdown] = useState([]);
  const [paymentStatusDropdown, setPaymentStatusDropdown] = useState([]);

  const handleGetDropdowns = () => {
    getOrderStatusDropdown((res) => {
      setOrderStatusDropdown(res.orderStatusDropdown);
    });

    getPaymentStatusDropdown((res) => {
      setPaymentStatusDropdown(res.paymentStatusDropdown);
    });
  };

  const OrderStatusBg = {
    1: "rgb(255 165 0 / 21%)",
    2: "#0000ff4d",
    3: "#80808054",
    4: "rgb(0 128 0 / 19%)",
    5: "#ff00002e",
  };
  const OrderStatusBorder = {
    1: "Orange",
    2: "Blue",
    3: "Grey",
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
    // {
    //   title: "Location",
    //   dataIndex: "address",
    //   key: "address",
    //   render: (address) => <>{address?.city}</>,
    // },
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
      ...dataState,
      ...values,
      limit: 10,
    };
  };

  const fetchSearchData = (body) => {
    // const { limit, page, customer_name, paymentStatus, orderStatus, total } =
    //   body;

    getAllOrders(body, (resp) => {
      setData({
        data: resp.orders,
        total: resp.total,
      });
    });
    setShowFiltersBar(false);
  };

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    handleReset,
    resetForm,
  } = useFormik({
    initialValues: {
      customer_name: "",
      paymentStatus: 0,
      orderStatus: 0,
      total: 0,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      // setFilterValues(values);
    },
  });

  useEffect(() => {
    fetchSearchData(defaultBody({ ...values }));
  }, [dataState]);

  useEffect(() => {
    // setDataState({ ...dataState, page: 1 });

    const handler = setTimeout(() => {
      fetchSearchData(defaultBody({ ...values, page: 1 }));
    }, 400);

    return () => clearTimeout(handler);
  }, [values]);
  return (
    <>
      <EditOrderModal
        isModalOpen={isOrderModalOpen}
        handleCloseEditOrderModal={handleCloseEditOrderModal}
        selectedOrder={selectedOrder}
        dataState={dataState}
        setDataState={setDataState}
        handleGetDropdowns={handleGetDropdowns}
        orderStatusDropdown={orderStatusDropdown}
        paymentStatusDropdown={paymentStatusDropdown}
      />
      <SideDrawer
        open={showFiltersBar}
        onClose={() => setShowFiltersBar(false)}
      >
        <FiltersBar
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          paymentStatusDropdown={paymentStatusDropdown}
          orderStatusDropdown={orderStatusDropdown}
          handleReset={handleReset}
        />
      </SideDrawer>
      <Row>
        {showFilters && (
          <Col span={18} className="d-none d-lg-block">
            <FiltersBar
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              paymentStatusDropdown={paymentStatusDropdown}
              orderStatusDropdown={orderStatusDropdown}
            />
          </Col>
        )}
        <Col
          // span={2}
          className="p-2 p-lg-4 d-flex justify-content-end d-block d-lg-none ms-auto"
        >
          <CiFilter
            cursor="pointer"
            size={20}
            onClick={() => setShowFiltersBar(true)}
          />
        </Col>
        <Col
          span={1}
          className="p-2 p-lg-4 d-flex justify-content-center d-none d-lg-block ms-auto"
        >
          <CiFilter
            cursor="pointer"
            size={30}
            onClick={() => setShowFilters(!showFilters)}
          />
        </Col>
        <Col
          span={1}
          className=" d-flex justify-content-center align-items-center"
        >
          <VscClearAll cursor="pointer" size={20} onClick={handleReset} />
        </Col>
      </Row>

      <PaginatedTable
        data={data}
        columns={columns}
        handlePageChange={handlePageChange}
        loading={loading}
        currentPage={dataState.page}
      />
    </>
  );
};

export default Order;
