import React, { useState } from "react";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../components/Loading";
import { ChatData } from "../context/ChatContext";
import { FaRobot, FaLock } from "react-icons/fa";

const Verify = () => {
  const [otp, setOtp] = useState("");

  const { verifyUser, btnLoading } = UserData();

  const { fetchChats } = ChatData();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    verifyUser(Number(otp), navigate, fetchChats);
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-dark-500 to-dark-700 px-4">
      <div className="mb-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-primary-600 p-4 rounded-full shadow-glow">
            <FaRobot className="text-white text-4xl" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Synapse AI</h1>
        <p className="text-gray-300">Verification Required</p>
      </div>

      <div className="card w-full max-w-md border-primary-700/20">
        <div className="flex items-center mb-6">
          <div className="bg-secondary-600/20 p-2 rounded-full mr-3">
            <FaLock className="text-secondary-400 text-xl" />
          </div>
          <h2 className="text-2xl font-semibold text-white">Verify Your Account</h2>
        </div>

        <p className="text-gray-300 mb-6">
          Enter the verification code sent to your email address.
        </p>

        <form onSubmit={submitHandler}>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2 font-medium" htmlFor="otp">
              Verification Code
            </label>
            <input
              type="number"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="input-field text-center text-2xl tracking-widest"
              placeholder="••••••"
              required
            />
          </div>

          <button className="btn btn-primary w-full">
            {btnLoading ? <LoadingSpinner /> : "Verify & Continue"}
          </button>

          <p className="mt-4 text-center text-gray-400 text-sm">
            Didn&apos;t receive a code? Check your spam folder
          </p>
        </form>
      </div>
    </div>
  );
};

export default Verify;
