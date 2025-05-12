import { IoIosCloseCircle } from "react-icons/io";
import { ChatData } from "../context/ChatContext";
import { MdDelete, MdLogout, MdAdd, MdChat } from "react-icons/md";
import { LoadingSpinner } from "./Loading";
import { UserData } from "../context/UserContext";
import { FaRobot } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { chats, createChat, createLod, setSelected, deleteChat } = ChatData();
  const { logoutHandler, user } = UserData();

  const deleteChatHandler = (id, e) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this chat?")) {
      deleteChat(id);
    }
  };

  const clickEvent = (id) => {
    setSelected(id);
    toggleSidebar();
  };

  return (
    <div
      className={`fixed inset-0 bg-dark-400 p-0 transition-transform transform md:relative md:translate-x-0 md:w-1/4 md:block z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-dark-300 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-primary-600 p-2 rounded-full mr-3">
              <FaRobot className="text-white text-xl" />
            </div>
            <h1 className="text-xl font-bold text-white">Synapse AI</h1>
          </div>

          <button
            className="md:hidden p-2 bg-dark-300 rounded-full text-xl text-gray-400 hover:text-white"
            onClick={toggleSidebar}
          >
            <IoIosCloseCircle />
          </button>
        </div>

        {/* User info */}
        {user && (
          <div className="px-4 py-3 border-b border-dark-300 bg-dark-300/50">
            <p className="text-sm text-gray-300 truncate">
              Signed in as <span className="text-primary-400 font-medium">{user.email}</span>
            </p>
          </div>
        )}

        {/* New Chat Button */}
        <div className="p-4">
          <button
            onClick={createChat}
            className="btn btn-primary w-full flex items-center justify-center"
          >
            {createLod ? <LoadingSpinner /> : (
              <>
                <MdAdd className="mr-2 text-xl" /> New Chat
              </>
            )}
          </button>
        </div>

        {/* Chat List */}
        <div className="px-4 flex-1 overflow-hidden">
          <div className="flex items-center mb-3">
            <MdChat className="text-gray-400 mr-2" />
            <p className="text-sm font-medium text-gray-300">Recent Conversations</p>
          </div>

          <div className="max-h-[calc(100vh-240px)] overflow-y-auto pr-1 thin-scrollbar">
            {chats && chats.length > 0 ? (
              chats.map((e) => (
                <button
                  key={e._id}
                  className="w-full text-left py-3 px-3 bg-dark-300 hover:bg-dark-200 rounded-lg mt-2
                  flex justify-between items-center border border-dark-200 transition-all duration-200"
                  onClick={() => clickEvent(e._id)}
                >
                  <span className="text-gray-200 truncate">
                    {e.latestMessage.slice(0, 38)}...
                  </span>
                  <button
                    className="ml-2 p-2 text-gray-400 hover:text-red-500 hover:bg-dark-100 rounded-full transition-colors"
                    onClick={(event) => deleteChatHandler(e._id, event)}
                    title="Delete chat"
                  >
                    <MdDelete />
                  </button>
                </button>
              ))
            ) : (
              <div className="text-center py-8 text-gray-400">
                <p>No conversations yet</p>
                <p className="text-sm mt-2">Start a new chat to begin</p>
              </div>
            )}
          </div>
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t border-dark-300 mt-auto">
          <button
            className="btn btn-danger w-full flex items-center justify-center"
            onClick={logoutHandler}
          >
            <MdLogout className="mr-2" /> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
