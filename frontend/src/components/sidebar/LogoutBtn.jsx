import React from "react";
import { TbLogout2 } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";

export default function LogoutBtn() {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <TbLogout2
          className="h-5 w-5 cursor-pointer text-white"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}

//starter code

// import React from "react";
// import { TbLogout2 } from "react-icons/tb";

// export default function LogoutBtn() {
//   return (
//     <span className="mt-auto">
//       <TbLogout2 className="h-5 w-5 cursor-pointer text-white" />
//     </span>
//   );
// }
