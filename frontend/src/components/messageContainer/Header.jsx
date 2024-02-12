// import userConversation from "../../zustand/useConversation";

const Header = () => {
  // const { selectedConversation} = userConversation();

  return (
    <div className="bg-slate-600 p-2 flex items-center gap-2 w-full">
      <p>To:</p>
      {/* <p className="font-bold text-slate-800 text-xl">{selectedConversation.fullName}</p> */}
      <p className="font-bold text-slate-800 text-xl">Testing</p>

    </div>
  )
}

export default Header