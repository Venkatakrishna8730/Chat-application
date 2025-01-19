import React, { useState } from "react";
import useConversation from "../../zustand/useConversation";

export default function Conversation({ conversation, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-5 items-center hover:bg-sky-400 p-2 py-1 rounded cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="w-10 rounded-full">
          <img src={conversation.profilePic} alt="user avatar" />
        </div>
        <div className="flex justify-between flex-1">
          <p className="font-bold text-white">{conversation.fullName}</p>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-1 h-1" />}
    </>
  );
}

//Starter code snippet

// import React from "react";

// export default function Conversation() {
//   const isSelected = true;
//   return (
//     <>
//       <div
//         className={`flex gap-5 items-center hover:bg-sky-400 px-2 py-1 rounded cursor-pointer ${
//           isSelected ? "bg-sky-400" : ""
//         }`}
//       >
//         <div className="w-10 rounded-full">
//           <img
//             src="https://avatar.iran.liara.run/public/boy?username=vk"
//             alt="user avatar"
//           />
//         </div>
//         <div className="flex justify-between flex-1">
//           <p className="font-bold text-white">Venkatakrishna</p>
//         </div>
//       </div>
//       <div className="divider my-0 py-1 h-1" />
//     </>
//   );
// }
