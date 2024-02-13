// import Header from "./Header";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";
import userConversation from "../../zustand/useConversation";
import { useEffect } from "react";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = userConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col md:min-w-[450px]">
      {!selectedConversation ? (
        <div className="flexCenter h-full md:min-w-[450px]">
          <NoChatSelected />
        </div>
      ) : (
        <>
          {/* <Header /> */}
          <Messages />
          <div className="w-full p-2">
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;
