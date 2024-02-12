import useConversation from "../../zustand/useConversation";
const ConversationCard = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <div>
      <div
        className={`group flex cursor-pointer items-center gap-5 rounded-md p-2 duration-500 hover:bg-sky-500 ${isSelected ? "bg-sky-500 text-white" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        {/* AVATAR */}
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePhoto} alt="user avatar" />
          </div>
        </div>
        <div className="flex items-center duration-300 group-hover:text-white">
          <p>{conversation.fullName}</p>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 h-1 py-0" />}
    </div>
  );
};
export default ConversationCard;
