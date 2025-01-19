import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetConversation from "../../hooks/useGetConversation";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    if (search.length < 3) {
      return toast.error("length must be greater than 3");
    }

    const conversation = conversations.find((c) => {
      console.log(c.fullName.toLowerCase().includes(search.toLowerCase()));
      return c.fullName.toLowerCase().includes(search.toLowerCase());
    });

    if (!conversation) {
      toast.error("No such user found");
    }

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-3"
    >
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full outline-none"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />
      <button type="submit" className="btn btn-circle bg-sky-400 text-white">
        <FaSearch className="w-4 h-4 outline-none" />
      </button>
    </form>
  );
}

//starter code snippet
// import React from "react";
// import { FaSearch } from "react-icons/fa";

// export default function SearchInput() {
//   return (
//     <form className="flex justify-center items-center gap-3">
//       <input
//         type="text"
//         placeholder="Search"
//         className="input input-bordered rounded-full outline-none"
//       />
//       <button className="btn btn-circle bg-sky-400 text-white">
//         <FaSearch className="w-4 h-4 outline-none" />
//       </button>
//     </form>
//   );
// }
