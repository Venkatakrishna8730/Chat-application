import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formFields);
  };

  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 backdrop-filter backdrop-blur-md rounded-lg bg-gray-600 bg-opacity-55">
        <h1 className=" text-3xl font-semibold text-center text-white">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className="text-base label">
            <span className="label-text text-white">Username:</span>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="input input-bordered w-full h-8"
            onChange={(e) => {
              setFormFields((currForm) => ({
                ...currForm,
                username: e.target.value,
              }));
            }}
          />
          <br />
          <label htmlFor="password" className="text-base label">
            <span className="label-text text-white">Password:</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="input input-bordered w-full h-8"
            onChange={(e) => {
              setFormFields((currForm) => ({
                ...currForm,
                password: e.target.value,
              }));
            }}
          />
          <br />
          <Link
            className=" text-sm text-white hover:underline mt-4 inline-block"
            to="/signup"
          >
            Don't have an Account?
          </Link>
          <br />
          <button
            type="submit"
            className="btn btn-block mt-4"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
