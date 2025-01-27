import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const login = async ({ username, password }) => {
    const success = handleErrors({ username, password });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch(
        process.env.VITE_API_BASE_URL + "/api/auth/login",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

const handleErrors = ({ username, password }) => {
  if (!username || !password) {
    toast.error("please fill all fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must contain atleast 6 charecters");
    return false;
  }
  return true;
};

export default useLogin;
