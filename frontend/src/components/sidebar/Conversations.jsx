import ConversationCard from "./ConversationCard";

const Conversations = ({loading, conversations}) => {
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
