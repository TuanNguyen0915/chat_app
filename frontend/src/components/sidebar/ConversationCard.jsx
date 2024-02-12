// import userConversation from "../../zustand/useConversation";

// const ConversationCard = ({ user, lastIdx }) => {
//   const { selectedConversation, setSelectedConversation } = userConversation();
//   const isSelected = selectedConversation?._id === user._id;
//   return (
//     <>
//       <div
//         className={`group flex cursor-pointer items-center gap-5 rounded-md p-2 duration-500 hover:bg-sky-500 ${isSelected ? "bg-sky-500 text-white" : ""}`}
//         onClick={() => setSelectedConversation(user)}
//       >
//         {/* AVATAR */}
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img src={user.profilePhoto} alt="user avatar" />
//           </div>
//         </div>
//         <div className="flex items-center duration-300 group-hover:text-white">
//           <p>{user.fullName}</p>
//         </div>
//       </div>
//       {!lastIdx && <div className="divider my-0 h-1 py-0" />}
//     </>
//   );
// };

const ConversationCard = ()=>{
  return <div className="text-xl">Conversation Card</div>
}

export default ConversationCard;
