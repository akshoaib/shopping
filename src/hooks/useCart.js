import AuthService from "@/services/auth";
import CartService from "@/services/cart";
import CategoryService from "@/services/category";
import { handleApiCall } from "@/utils";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const useCart = () => {
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

  const addToCart = useCallback(
    (body, handleSuccess) =>
      createApiCaller(
        () => CartService.addToCart(body, token),
        handleSuccess,
        true,
        "added to cart successfully",
        "Unable to add to cart"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const getCart = useCallback(
    (handleSuccess) =>
      createApiCaller(
        () => CartService.getCart(token),
        handleSuccess,
        false,
        "",
        "Unable to add to cart"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const deleteCartItem = useCallback(
    (productId, handleSuccess) =>
      createApiCaller(
        () => CartService.deleteCartItem(productId, token),
        handleSuccess,
        true,
        "Item deleted from cart successfully",
        "Unable to add to cart"
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { loading, addToCart, getCart, deleteCartItem };
};

export default useCart;
