import AuthService from "@/services/auth";
import CategoryService from "@/services/category";
import { handleApiCall } from "@/utils";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const useCategory = () => {
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

  const getCategories = useCallback(
    (handleSuccess) =>
      createApiCaller(
        () => CategoryService.getCategories(token),
        handleSuccess,
        false,
        "",
        "Unable to fetch categories"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const getCategoryDropdown = useCallback(
    (handleSuccess) =>
      createApiCaller(
        () => CategoryService.getCategoryDropdown(token),
        handleSuccess,
        false,
        "",
        "Unable to fetch categories"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const createCategory = useCallback(
    (body, handleSuccess) =>
      createApiCaller(
        () => CategoryService.createCategory(body, token),
        handleSuccess,
        true,
        "Category added successfully",
        "Unable to add category"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { loading, getCategories, createCategory, getCategoryDropdown };
};

export default useCategory;
