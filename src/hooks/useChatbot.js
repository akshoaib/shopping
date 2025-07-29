import chatbotService from "@/services/chatbot";
import { handleApiCall } from "@/utils";
import { useCallback, useState } from "react";

const useChatbot = () => {
  const [loading, setLoading] = useState(false);

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
  const initiateChat = useCallback(
    (body, handleSuccess) =>
      createApiCaller(
        () => chatbotService.initiateChat(body),
        handleSuccess,
        false,
        "",
        "Unable to chat. please try later"
      ),

    []
  );

  return { loading, initiateChat };
};

export default useChatbot;
