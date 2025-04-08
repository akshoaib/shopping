import { useFormik } from "formik";
import CustomModal from "../shared-components/custom-modal";
import CustomSelect from "../shared-components/custom-select";
import { useEffect, useState } from "react";
import useOrder from "@/hooks/useOrder";
import { Col, Row } from "antd";
import FooterButtons from "../shared-components/footer-btns";
import PageLoader from "../shared-components/page-loader";
import LoaderButton from "../shared-components/loader-button";

const EditOrderModal = ({
  isModalOpen,
  handleCloseEditOrderModal,
  selectedOrder,
  dataState,
  setDataState,
}) => {
  const {
    loading,
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

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    handleReset,
  } = useFormik({
    initialValues: {
      orderStatus: selectedOrder?.orderStatus,
      paymentStatus: selectedOrder?.paymentStatus,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      let body = {
        ...values,
        _id: selectedOrder?._id,
      };
      updateOrder(body, (resp) => {
        setDataState({ ...dataState });
        handleCloseEditOrderModal();
      });
    },
  });

  useEffect(() => {
    handleGetDropdowns();
  }, []);

  return (
    <>
      <PageLoader loading={loading} />
      <CustomModal
        title="Edit Order"
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseEditOrderModal}
        handleSave={handleSubmit}
      >
        <form>
          <Row>
            <Col span={24}>
              <CustomSelect
                name="orderStatus"
                handleChange={handleChange}
                value={values.orderStatus}
                onBlur={handleBlur}
                touched={touched.orderStatus}
                label="Order Status"
                error={errors.orderStatus}
                data={orderStatusDropdown}
              />
            </Col>
            <Col className="mt-2" span={24}>
              <CustomSelect
                name="paymentStatus"
                handleChange={handleChange}
                value={values.paymentStatus}
                onBlur={handleBlur}
                touched={touched.paymentStatus}
                label="Payment Status"
                error={errors.paymentStatus}
                data={paymentStatusDropdown}
              />
            </Col>
            <Col className="mt-2" span={24}>
              <FooterButtons
                title={loading ? <LoaderButton /> : "Save"}
                handleSubmit={handleSubmit}
                handleReset={handleReset}
                disabled={loading}
              />
            </Col>
          </Row>
        </form>
      </CustomModal>
    </>
  );
};
export default EditOrderModal;
