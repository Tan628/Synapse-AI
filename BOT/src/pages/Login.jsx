import React, { useState } from "react";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../components/Loading";
import { FaRobot } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");

  const { loginUser, btnLoading } = UserData();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(email, navigate);
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
        <p className="text-gray-300">Your intelligent chatbot assistant</p>
      </div>

      <div className="card w-full max-w-md border-primary-700/20">
        <h2 className="text-2xl font-semibold mb-6 text-white">Welcome Back</h2>

        <form onSubmit={submitHandler}>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2 font-medium" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="your@email.com"
              required
            />
          </div>

          <button
            className="btn btn-primary w-full"
            disabled={btnLoading}
          >
            {btnLoading ? <LoadingSpinner /> : "Sign In"}
          </button>

          <p className="mt-4 text-center text-gray-400 text-sm">
            We'll send a verification code to your email
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
