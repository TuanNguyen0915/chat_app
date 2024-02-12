import Header from "./Header";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";
import userConversation from "../../zustand/useConversation";


const MessageContainer = () => {
  const { selectedConversation } = userConversation();
  

  if (!selectedConversation) {
    return (
      <div className="flexCenter md:min-w-[450px]">
        <NoChatSelected />
      </div>
    );
  }
  return (
    <div className="flex flex-col md:min-w-[450px]">
      <Header />
      <Messages />
      <div className="w-full p-2">
        <MessageInput />
      </div>
    </div>
  );
};



export default MessageContainer;
