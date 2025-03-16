import AuthService from "@/services/auth";
import { handleApiCall } from "@/utils";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
  const [loading, setLoading] = useState(false);

  // loading state for getting the installation overview

  const [error, setError] = useState(null);

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
  const signin = useCallback(
    (body, handleSuccess) =>
      createApiCaller(
        () => AuthService.signin(body),
        handleSuccess,
        true,
        "Loggedin successfully",
        "Unable to signin"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return { loading, signin };
};

export default useAuth;
