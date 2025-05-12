import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "../components/Header";
import { ChatData } from "../context/ChatContext";
import { CgProfile } from "react-icons/cg";
import { FaRobot } from "react-icons/fa";
import { LoadingBig, LoadingSmall } from "../components/Loading";
import { IoMdSend } from "react-icons/io";
import { UserData } from "../context/UserContext";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = UserData();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const {
    fetchResponse,
    messages,
    prompt,
    setPrompt,
    newRequestLoading,
    loading,
    chats,
  } = ChatData();

  const submitHandler = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      fetchResponse();
    }
  };

  const messagecontainerRef = useRef();

  useEffect(() => {
    if (messagecontainerRef.current) {
      messagecontainerRef.current.scrollTo({
        top: messagecontainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="flex h-screen bg-gradient-to-br from-dark-500 to-dark-700 text-white overflow-hidden">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 flex-col relative">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center p-4 border-b border-dark-300">
          <button
            onClick={toggleSidebar}
            className="p-2 bg-dark-300 rounded-full text-xl text-gray-400 hover:text-white mr-3"
          >
            <GiHamburgerMenu />
          </button>
          <h1 className="text-xl font-bold text-white">Synapse AI</h1>
        </div>

        <div className="flex-1 p-4 md:p-6 overflow-hidden">
          <div className="md:block hidden">
            <Header />
          </div>

          {loading ? (
            <LoadingBig />
          ) : (
            <div
              className="h-[calc(100vh-220px)] md:h-[calc(100vh-240px)] overflow-y-auto pr-1 thin-scrollbar"
              ref={messagecontainerRef}
            >
              {messages && messages.length > 0 ? (
                messages.map((e, i) => (
                  <div key={i} className="mb-6">
                    {/* User Message */}
                    <div className="mb-6 flex">
                      <div className="w-10 h-10 rounded-full bg-primary-600 flex-shrink-0 flex items-center justify-center mr-3 shadow-glow">
                        <CgProfile className="text-white text-xl" />
                      </div>
                      <div className="bg-primary-600/10 border border-primary-600/20 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                        <p className="text-sm text-gray-400 mb-1">
                          {user ? user.email.split('@')[0] : 'You'}
                        </p>
                        <p className="text-white">{e.question}</p>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex justify-end">
                      <div className="bg-dark-300 border border-dark-200 rounded-2xl rounded-tr-none p-4 max-w-[85%]">
                        <div className="flex items-center mb-1">
                          <div className="w-5 h-5 rounded-full bg-secondary-600 flex items-center justify-center mr-2">
                            <FaRobot className="text-white text-xs" />
                          </div>
                          <p className="text-sm text-gray-400">Synapse AI</p>
                        </div>
                        <div
                          className="text-white prose prose-invert prose-sm max-w-none"
                          dangerouslySetInnerHTML={{ __html: e.answer }}
                        />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="bg-dark-300/50 p-8 rounded-2xl border border-dark-200 max-w-md">
                    <div className="bg-primary-600/20 p-4 rounded-full inline-block mb-4">
                      <FaRobot className="text-primary-400 text-3xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No conversations yet</h3>
                    <p className="text-gray-400 mb-4">
                      Start a new chat by typing a message below or create a new chat from the sidebar.
                    </p>
                  </div>
                </div>
              )}

              {newRequestLoading && (
                <div className="flex justify-end mb-6">
                  <div className="bg-dark-300 border border-dark-200 rounded-2xl rounded-tr-none p-4">
                    <LoadingSmall />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      {chats && chats.length === 0 ? (
        ""
      ) : (
        <div className="fixed bottom-0 right-0 left-0 p-4 bg-dark-400/80 backdrop-blur-sm border-t border-dark-300 md:left-[25%]">
          <form
            onSubmit={submitHandler}
            className="flex items-center max-w-4xl mx-auto"
          >
            <input
              className="input-field rounded-r-none py-3"
              type="text"
              placeholder="Type your message here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
            />
            <button
              className="btn btn-primary rounded-l-none px-5 h-full"
              type="submit"
              disabled={!prompt.trim()}
            >
              <IoMdSend className="text-xl" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
