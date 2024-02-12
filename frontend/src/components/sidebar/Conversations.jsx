// import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConversationCard from "./ConversationCard";
// import useGetConversation from "../../hooks/useGetConversation";
import { useEffect, useState } from "react";
// import { useAuthContext } from "../../context/AuthContext";
// import { getAllUsers } from "../../hooks/conversation.hook";

const Conversations = () => {
  const [conversations, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      setLoading(true);
      const fetchData = async () => {
        const res = await fetch("/api/users");
        const data = await res.json();
        setConversation(data.users);
      };
      fetchData();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  console.log(conversations);
  return (
    <div className="flex-1 overflow-auto">
      {loading ? (
        <div className="flexCenter h-full flex-col gap-10">
          <progress className="progress w-56"></progress>
          <p className="text-xl font-semibold text-white">Loading Data</p>
        </div>
      ) : (
        <>
          {conversations?.map((conversation) => (
            <ConversationCard
              conversation={conversation}
              key={conversation._id}
              lastIdx={Conversations.length - 1}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Conversations;
