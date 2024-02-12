/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef } from "react";
import useConversation from "../../zustand/useConversation";
import MessageCard from "./MessageCard";
import NoChatSelected from "./NoChatSelected";
import useGetMessages from "../../hooks/useGetMessages";
import toast from "react-hot-toast";

const Messages = () => {
  const { selectedConversation, messages, setMessages } = useConversation();
  //fetching massages for conversations
  const lastMessageRef = useRef();
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await useGetMessages(selectedConversation._id);
        setMessages(data.messages);
      };
      fetchData();
    } catch (error) {
      toast.error(error.message);
    }
  }, [selectedConversation._id, setMessages]);
  // scrolling to last message
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-auto p-4">
      {!selectedConversation && <NoChatSelected />}
      {messages.length === 0 ? (
        <p className="mt-10 text-center text-xl font-semibold">
          Send a message to start the conversation
        </p>
      ) : (
        <>
          {messages.map((message) => (
            <div key={message._id} ref={lastMessageRef} className="mb-1">
              <MessageCard message={message} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Messages;
