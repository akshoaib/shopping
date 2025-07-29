import React, { useEffect, useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import ChatbotWindow from "./chatbot-window";
import useChatbot from "@/hooks/useChatbot";

const Chatbot = () => {
  const [chat, setChat] = useState("");
  const [messages, setMessages] = useState([]);
  const [openChat, setOpenChat] = useState(false);
  const { loading, initiateChat } = useChatbot();
  // const handleChat = () => {};
  const handleChatbot = () => {
    let senderMessage = chat;
    setChat("");
    let payload = {
      message: senderMessage,
    };
    senderMessage &&
      initiateChat(payload, (resp) => {
        let newMessage = {
          sender: senderMessage,
          receiver: resp,
        };
        setMessages((prev) => [...prev, newMessage]);
      });
  };

  console.log({ messages });

  const handleSetChat = (chatMessage) => {
    setChat(chatMessage);
  };

  return (
    <>
      {openChat && (
        <ChatbotWindow
          chat={chat}
          handleSetChat={handleSetChat}
          handleChatbot={handleChatbot}
          messages={messages}
          responseLoading={loading}
        />
      )}
      <div
        style={{
          position: "fixed",
          left: "90%",
          top: "90%",
          background: "black",
          borderRadius: "50%",
          padding: "15px",

          zIndex: "10000",
        }}
        onClick={() => setOpenChat((prev) => !prev)}
      >
        {openChat ? (
          <MdClose color="white" size={40} />
        ) : (
          <IoChatbubbleEllipsesOutline color="white" size={40} />
        )}
      </div>
    </>
  );
};

export default Chatbot;
