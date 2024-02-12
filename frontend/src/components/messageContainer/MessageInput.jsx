/* eslint-disable react-hooks/rules-of-hooks */
import { BsSend } from "react-icons/bs";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
import userConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = userConversation();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await useSendMessage(message, selectedConversation._id);
      setMessages([...messages, data.newMessage]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setMessage("");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full items-center justify-between gap-2 rounded-lg bg-slate-600 px-4 py-2 opacity-60 duration-500 hover:opacity-100 focus:opacity-100 ${message.length > 0 ? "opacity-100" : ""}`}
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
