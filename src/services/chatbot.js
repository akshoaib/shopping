import api from "@/interceptors";
const url = "/chatbot";
const chatbotService = {};

chatbotService.initiateChat = async (body) => {
  return api.post(`${url}`, body);
};

export default chatbotService;
