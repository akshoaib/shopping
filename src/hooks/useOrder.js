import AuthService from "@/services/auth";
import CategoryService from "@/services/category";
import OrderService from "@/services/orders";
import { handleApiCall } from "@/utils";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const useOrder = () => {
  const [loading, setLoading] = useState(false);

  // loading state for getting the installation overview

  const [error, setError] = useState(null);

  const token = useSelector((state) => state.auth.token);

  const createApiCaller = (
    apiFunction,
    successFunction,
    showSuccessMessage,
    successMessage,
    errorMessage,
    handleFailure
  ) =>
    handleApiCall(
      setLoading,
      setError,
      apiFunction,
      successFunction,
      showSuccessMessage,
      successMessage,
      errorMessage,
      handleFailure
    );

  const getAllOrders = useCallback(
    (body, handleSuccess) =>
      createApiCaller(
        () => OrderService.getAllOrders(body, token),
        handleSuccess,
        false,
        "",
        "Unable to fetch orders"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const getOrderStatusDropdown = useCallback(
    (handleSuccess) =>
      createApiCaller(
        () => OrderService.getOrderStatusDropdown(token),
        handleSuccess,
        false,
        "",
        "Unable to fetch orders status dropdown"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const getPaymentStatusDropdown = useCallback(
    (handleSuccess) =>
      createApiCaller(
        () => OrderService.getPaymentStatusDropdown(token),
        handleSuccess,
        false,
        "",
        "Unable to fetch payment status dropdown"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const updateOrder = useCallback(
    (body, handleSuccess) =>
      createApiCaller(
        () => OrderService.updateOrder(body, token),
        handleSuccess,
        true,
        "order updated",
        "Unable to update order"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    loading,
    getAllOrders,
    getOrderStatusDropdown,
    getPaymentStatusDropdown,
    updateOrder,
  };
};

export default useOrder;
