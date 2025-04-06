import { useFormik } from "formik";
import CustomModal from "../shared-components/custom-modal";
import CustomSelect from "../shared-components/custom-select";
import useCategory from "@/hooks/useCategory";
import { useEffect, useState } from "react";
import CustomInput from "../shared-components/custom-input";
import CustomUpload from "../shared-components/custom-upload";
import CustomButton from "../shared-components/custom-button";
import CustomImage from "../shared-components/custom-image";
import { isValidUrl } from "@/utils";
import { editProductSchema } from "@/utils/validationSchemas/product";
import useProduct from "@/hooks/useProduct";
import useOrder from "@/hooks/useOrder";
import { Col, Row } from "antd";

const EditOrderModal = ({
  isModalOpen,
  handleCloseEditOrderModal,
  selectedOrder,
  dataState,
  setDataState,
}) => {
  const { getOrderStatusDropdown, getPaymentStatusDropdown, updateOrder } =
    useOrder();

  const [orderStatusDropdown, setOrderStatusDropdown] = useState([]);
  const [paymentStatusDropdown, setPaymentStatusDropdown] = useState([]);

  const handleGetDropdowns = () => {
    getOrderStatusDropdown((res) => {
      console.log("jjjjjj", { res });
      setOrderStatusDropdown(res.orderStatusDropdown);
    });

    getPaymentStatusDropdown((res) => {
      setPaymentStatusDropdown(res.paymentStatusDropdown);
    });
  };

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        orderStatus: selectedOrder?.orderStatus,
        paymentStatus: selectedOrder?.paymentStatus,
      },
      enableReinitialize: true,
      onSubmit: (values) => {
        console.log("submit vals::: ", values);
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

  console.log("dddddddddddd", values);

  useEffect(() => {
    handleGetDropdowns();
  }, []);
  return (
    <>
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
          </Row>
        </form>
      </CustomModal>
    </>
  );
};
export default EditOrderModal;
