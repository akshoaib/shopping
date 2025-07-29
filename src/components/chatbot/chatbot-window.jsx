import { Col, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import LogoImage from "../../assets/logo.png";

const ChatbotWindow = ({
  chat,
  handleSetChat,
  handleChatbot,
  messages,
  responseLoading,
}) => {
  const bottomRef = useRef(null);
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollToBottom();
    }, 0);

    return () => clearTimeout(timeout);
  }, [messages]);
  return (
    <div
      style={{
        position: "fixed",
        left: "85%",
        top: "70%",
        transform: "translate(-50%, -50%)",
        background: "white",
        height: "350px",
        width: "300px",
        zIndex: "10000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className="rounded shadow"
    >
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "0.5rem",
        }}
      >
        {messages?.length > 0 &&
          messages.map((text, idx) => (
            <div key={idx}>
              <p
                style={{ width: "fit-content" }}
                className="text-end bg-dark text-light rounded shadow p-2 ms-auto"
              >
                {text.sender}
              </p>
              <div className="d-flex gap-1">
                <span>
                  <img src={LogoImage} width={20} height={50} />
                </span>{" "}
                <p
                  style={{ background: "#f1f5f9", width: "fit-content" }}
                  className="text-start  text-dark rounded shadow p-2"
                >
                  {text.receiver}
                </p>
              </div>
            </div>
          ))}
        <div ref={bottomRef} />
      </div>

      <div
        className="d-flex justify-content-center align-items-center gap-1 p-2 border-top"
        style={{
          backgroundColor: "#fff",
        }}
      >
        <input
          type="text"
          value={chat}
          onChange={(e) => handleSetChat(e.target.value)}
          className="form-control"
          placeholder={responseLoading ? "bot is typing..." : ""}
        />
        <IoSend
          size={25}
          color="black"
          onClick={() => {
            handleChatbot();
          }}
          style={{ cursor: "pointer" }}
          aria-disabled={responseLoading}
        />
      </div>
    </div>
  );
};

export default ChatbotWindow;
