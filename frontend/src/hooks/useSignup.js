import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);
    try {
      console.log(1);
      const res = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      console.log(1);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

const handleErrors = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("please fill all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords doesn't match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must contain atleast 6 charecters");
    return false;
  }
  return true;
};

export default useSignup;
