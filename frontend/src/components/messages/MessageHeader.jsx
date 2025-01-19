import React from "react";

export default function MessageHeader({ selectedConversation }) {
  return (
    <div className="p-1 pb-2 flex items-center gap-2">
      <div className="pl-2 w-11 rounded-full">
        <img src={selectedConversation.profilePic} alt="user avatar" />
      </div>
      <span className="pl-5 text-md text-white">
        {selectedConversation.fullName}
      </span>
    </div>
  );
}
