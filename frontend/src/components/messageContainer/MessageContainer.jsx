import Header from "./Header";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
// import NoChatSelected from "./NoChatSelected";
// import { useAuthContext } from "../../context/AuthContext";
// import userConversation from "../../zustand/useConversation";


const MessageContainer = () => {
  // const { authUser } = useAuthContext();
  // const { selectedConversation } = userConversation();
  // const user = authUser.user;

  // if (!selectedConversation) {
  //   return (
  //     <div className="flexCenter md:min-w-[450px]">
  //       <NoChatSelected user={user} />
  //     </div>
  //   );
  // }
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
