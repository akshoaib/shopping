import AuthService from "@/services/auth";
import CategoryService from "@/services/category";
import ProductService from "@/services/product";
import { handleApiCall } from "@/utils";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const useProduct = () => {
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

  const createProduct = useCallback(
    (body, handleSuccess) =>
      createApiCaller(
        () => ProductService.createProduct(body, token),
        handleSuccess,
        true,
        "product added successfully",
        "Unable to add product"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const updateProduct = useCallback(
    (productId, body, handleSuccess) =>
      createApiCaller(
        () => ProductService.updateProduct(productId, body, token),
        handleSuccess,
        true,
        "product updated successfully",
        "Unable to update product"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const getProductsByCategory = useCallback(
    (body, handleSuccess) =>
      createApiCaller(
        () => ProductService.getProductsByCategory(body, token),
        handleSuccess,
        false,
        "",
        "Unable to get products"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { loading, createProduct, getProductsByCategory, updateProduct };
};

export default useProduct;
