import { RiWechatLine } from "react-icons/ri";
import { useAuthContext } from "../../context/AuthContext";

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flexCenter w-full flex-col gap-10 p-2 text-gray-100">
      <p className="flex items-center gap-1">
        Welcome{" "}
        <span className="text-2xl font-semibold text-blue-500">
          {authUser.user.fullName}
        </span>
      </p>
      <p>Select a chat to start messaging</p>
      <RiWechatLine className="mt-4 scale-[5]" />
    </div>
  );
};

export default NoChatSelected;
