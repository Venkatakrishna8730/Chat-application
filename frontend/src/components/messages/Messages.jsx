import React, { useRef, useEffect } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";

export default function Messages() {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const messageEndRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1);
  }, [messages]);
  return (
    <div className="flex flex-col h-full px-2 py-2 overflow-auto border-t border-slate-300">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => {
          // console.log(message);
          return <Message message={message} key={message._id} />;
        })}
      {!loading && messages.length === 0 && (
        <p className="text-center text-white">Send a message</p>
      )}
      <div ref={messageEndRef} />
    </div>
  );
}
