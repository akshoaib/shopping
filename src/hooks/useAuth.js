import AuthService from "@/services/auth";
import { handleApiCall } from "@/utils";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
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

  const registerUser = useCallback(
    (body, handleSuccess) =>
      createApiCaller(
        () => AuthService.registerUser(body),
        handleSuccess,
        true,
        "Signup successfully",
        "Unable to signup"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const getUserReports = useCallback(
    (startDate, endDate, handleSuccess) =>
      createApiCaller(
        () => AuthService.getUserReports(startDate, endDate, token),
        handleSuccess,
        false,
        "",
        "Unable to fetch user reports"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { loading, signin, registerUser, getUserReports };
};

export default useAuth;
