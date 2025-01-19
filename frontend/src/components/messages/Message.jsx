import React from "react";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConv } = useConversation();
  const from = message.sender === authUser._id;
  const time = new Date(message.createdAt).toLocaleTimeString();

  const chatClassName = from ? "chat-end" : "chat-start";
  const bgColor = from ? "bg-sky-400" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div
        className={`chat-bubble text-white break-words overflow-hidden text-wrap max-w-80 ${bgColor}`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-80 text-xs text-white">{time}</div>
    </div>
  );
};
export default Message;
