// import toast from "react-hot-toast"

// const useGetMessages = async (conversationId) => {
//   try {
//     const res = await fetch(`/api/messages/${conversationId}`)
//     const data = await res.json()
//     if(data.error) {
//       toast.error(data.error)
//     }
//     return data
//   } catch (error) {
//     toast.error(error.message)
//   }
// }

// export default useGetMessages

import { useEffect, useState} from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false)
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        // console.log(data.messages)
        setMessages(data.messages);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false)
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading};
};
export default useGetMessages;
