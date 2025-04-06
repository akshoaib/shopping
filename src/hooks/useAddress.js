import AddressService from "@/services/address";
import { handleApiCall } from "@/utils";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const useAddress = () => {
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

  // Jobs
  const getAddresses = useCallback(
    (handleSuccess) =>
      createApiCaller(
        () => AddressService.getAddresses(token),
        handleSuccess,
        false,
        "",
        "Unable to get addresses"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const addAddress = useCallback(
    (body, handleSuccess) =>
      createApiCaller(
        () => AddressService.addAddress(body, token),
        handleSuccess,
        true,
        "Address Added Successfully",
        "Unable to add addresses"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const deleteAddress = useCallback(
    (id, handleSuccess) =>
      createApiCaller(
        () => AddressService.deleteAddress(id, token),
        handleSuccess,
        true,
        "Address deleted Successfully",
        "Unable to delete addresses"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { loading, getAddresses, addAddress, deleteAddress };
};

export default useAddress;
