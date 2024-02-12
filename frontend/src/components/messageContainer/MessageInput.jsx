import { BsSend } from "react-icons/bs";
// import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
// import { sendMessage } from "../../hooks/conversation.hook";
// import userConversation from "../../zustand/useConversation";

const MessageInput = () => {
  const [loading, setLoading] = useState(false);
  // const { authUser } = useAuthContext();
  // const { selectedConversation, messages, setMessages } = userConversation();
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // if (!message) {
    //   setLoading(false);
    //   return;
    // }
    // const data = await sendMessage(
    //   message,
    //   selectedConversation._id,
    //   authUser.token,
    // );
    // setMessages([...messages, data]);
    // setMessage("");
    // setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center justify-between gap-2 rounded-lg bg-slate-600 px-4 py-2 opacity-60 duration-500 hover:opacity-100 focus:opacity-100"
    >
      <input
        value={message}
        type="text"
        placeholder="Send a message"
        className="flex-1 bg-transparent outline-none"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">
        {loading ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          <BsSend className="scale-150 duration-500 hover:text-white" />
        )}
      </button>
    </form>
  );
};

export default MessageInput;
