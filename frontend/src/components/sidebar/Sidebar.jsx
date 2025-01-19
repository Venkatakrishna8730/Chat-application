import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";

function Sidebar() {
  return (
    <div className="flex md:min-w-[350px] w-[300px] flex-col border-r border-slate-300 p-2">
      <SearchInput />
      <div className="divider py-0 px-3"></div>
      <Conversations />
      <LogoutBtn />
    </div>
  );
}

export default Sidebar;

// //starter code
// import React from "react";
// import SearchInput from "./SearchInput";
// import Conversations from "./Conversations";
// import LogoutBtn from "./LogoutBtn";

// function Sidebar() {
//   return (
//     <div className="flex flex-col border-r border-slate-300 p-2">
//       <SearchInput />
//       <div className="divider py-0 px-3"></div>
//       <Conversations />
//       <LogoutBtn />
//     </div>
//   );
// }

// export default Sidebar;
