import { useAuthContext } from "../../context/AuthContext";
import { convertTime } from "../../utils/converTime";
import useConversation from "../../zustand/useConversation";

const MessageCard = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromSender = authUser.user._id === message.senderId;
  const chatPosition = fromSender ? "chat-end" : "chat-start";
  const profilePhoto = fromSender
    ? authUser.user.profilePhoto
    : selectedConversation.profilePhoto;
  const formattedTime = convertTime(message.createdAt);
  return (
    <div className={`chat ${chatPosition}`}>
      <div className="avatar chat-image">
        <div className="w-10 rounded-full">
          <img alt="sender photo" src={profilePhoto} />
        </div>
      </div>
      <div
        className={`chat-bubble ${fromSender ? "bg-blue-500" : ""} text-gray-300`}
      >
        {message.message}
      </div>
      <div className="chat-footer italic opacity-50">{formattedTime}</div>
    </div>
  );
};

export default MessageCard;
