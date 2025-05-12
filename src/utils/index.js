import { toast } from "react-toastify";
const showToast = (message, type, timer = 5000) => {
  if (type === "success") {
    toast.success(message);
  } else if (type === "error") {
    toast.error(message, { autoClose: timer });
  } else if (type === "info") {
    toast.info(message, { autoClose: timer });
  } else if (type === "warning") {
    toast.warning(message, { autoClose: timer });
  }
};

export default showToast;
export const handleApiCall = async (
  setLoading,
  setError,
  apiFunction,
  handleSuccess,
  showSuccessMessage,
  successMessage = false,
  errorMessage,
  handleFailure = () => {}
) => {
  setLoading(true);
  setError(null);
  try {
    const resp = await apiFunction();
    if (resp.success) {
      handleSuccess(resp.data);
      if (showSuccessMessage) {
        showToast(successMessage, "success");
      }
    } else {
      setError(resp?.message || errorMessage);
      if (resp.message) {
        showToast(resp?.message, "error");
      } else {
        if (resp?.errors?.length > 0) {
          const message = resp?.errors.map((error) =>
            error.errorMessage.replace(/[\[\]"]/g, "")
          );
          showToast(arrayToHtml(message), "error");
        } else {
          showToast(resp?.message || errorMessage, "error");
        }
      }
    }
  } catch (error) {
    console.log("in catch");

    setError(error?.message || errorMessage);
    showToast(error?.message || errorMessage, "error");
    handleFailure(error);
  } finally {
    setLoading(false);
  }
};

export const isValidUrl = (str) => {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
};
