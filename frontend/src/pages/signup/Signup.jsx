import React, { useState } from "react";
import Gender from "./Gender";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [formFields, setFormFields] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckbox = (gender) => {
    setFormFields({ ...formFields, gender });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    await signup(formFields);
  };

  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 backdrop-filter backdrop-blur-md rounded-lg bg-gray-600 bg-opacity-55">
        <h1 className=" text-3xl font-semibold text-center text-white">
          SignUp
        </h1>
        <form onSubmit={handleForm}>
          <label htmlFor="fullName" className="text-base label">
            <span className="label-text text-white">Fullname:</span>
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="input input-bordered w-full h-8"
            onChange={(e) => {
              setFormFields((currForm) => ({
                ...currForm,
                fullName: e.target.value,
              }));
            }}
          />
          <br />
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
          <label htmlFor="confirm-password" className="text-base label">
            <span className="label-text text-white">Confirm Password:</span>
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            className="input input-bordered w-full h-8"
            onChange={(e) => {
              setFormFields((currForm) => ({
                ...currForm,
                confirmPassword: e.target.value,
              }));
            }}
          />
          <br />
          <Gender
            handleCheckbox={handleCheckbox}
            selectedGender={formFields.gender}
          />
          <Link
            to="/login"
            className="text-sm text-white hover:underline mt-2 inline-block"
          >
            Already have an Account?
          </Link>
          <br />
          <div>
            <button
              type="submit"
              className="btn btn-block mt-4"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Signup"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
