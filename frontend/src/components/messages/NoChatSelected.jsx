import React from "react";
import { MdOutlineMessage } from "react-icons/md";

export default function NoChatSelected(selectedConversation) {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="text-center flex flex-col text-sm text-white font-semibold px-4 gap-3">
        <p>Welcome! {selectedConversation.fullName}</p>
        <p>Select a Chat to Start messaging</p>
        <MdOutlineMessage className="text-center text-2xl" />
      </div>
    </div>
  );
}
