import MessageCard from "./MessageCard";
import NoChatSelected from "./NoChatSelected";

const Messages = () => {
  const noChat = false;
  return (
    <div className="flex-1 overflow-auto p-4">
      {noChat ? (
        <NoChatSelected />
      ) : (
        <>
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
        </>
      )}
    </div>
  );
};

export default Messages;
