import React from "react";
import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { MdOutlineMessage } from "react-icons/md";
import NoChatSelected from "./NoChatSelected";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";

export default function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col p-2 md:min-w-[450px]">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <MessageHeader selectedConversation={selectedConversation} />
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}
