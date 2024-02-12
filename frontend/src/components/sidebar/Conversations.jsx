// import { useEffect, useState } from "react";
import ConversationCard from "./ConversationCard";

// import { useAuthContext } from "../../context/AuthContext";
// import { getAllUsers } from "../../hooks/conversation.hook";

const Conversations = () => {
  // const [users, setUsers] = useState(null);
  // const { authUser } = useAuthContext();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getAllUsers(authUser.token);
  //     setUsers(data.users);
  //   };
  //   fetchData();
  // }, [authUser]);

  return (
    <div className="flex-1 overflow-auto">
      {/* {users?.map((user, idx) => (
        <ConversationCard
          key={user._id}
          user={user}
          lastIdx={idx === users.length - 1}
        />
      ))} */}
      <ConversationCard />
    </div>
  );
};

export default Conversations;
