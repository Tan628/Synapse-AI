import React from "react";
import { ChatData } from "../context/ChatContext";
import { FaRobot } from "react-icons/fa";
import { UserData } from "../context/UserContext";

const Header = () => {
  const { chats } = ChatData();
  const { user } = UserData();

  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="flex items-center mb-4">
        <div className="bg-primary-600 p-2 rounded-full shadow-glow mr-3">
          <FaRobot className="text-white text-xl" />
        </div>
        <h1 className="text-2xl font-bold text-white">Synapse AI</h1>
      </div>

      <div className="bg-dark-400/50 p-4 rounded-xl border border-dark-300 mb-6 w-full max-w-2xl">
        {user && (
          <p className="text-gray-300 mb-2 text-sm">
            Hello <span className="text-primary-400">{user.email.split('@')[0]}</span>, welcome back!
          </p>
        )}
        <p className="text-lg text-white font-medium">How can I help you today?</p>
        {chats && chats.length === 0 && (
          <p className="mt-2 text-gray-300">Create a new chat to get started</p>
        )}
      </div>
    </div>
  );
};

export default Header;
