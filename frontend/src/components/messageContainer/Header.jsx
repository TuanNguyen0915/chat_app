const Header = ({ selectedConversation }) => {
  return (
    <div className="flex w-full items-center gap-2 bg-slate-600 p-2">
      <p>To:</p>
      <p className="text-xl font-bold text-slate-800">
        {selectedConversation.fullName}
      </p>
    </div>
  );
};

export default Header;
