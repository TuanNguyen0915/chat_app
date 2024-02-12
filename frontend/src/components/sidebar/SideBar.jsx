/* eslint-disable react-hooks/rules-of-hooks */
import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import logOut from "../../hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import userConversation from "../../zustand/useConversation";
import { useEffect, useState } from "react";
import useGetConversation from "../../hooks/useGetConversation";

const Sidebar = () => {
  const { setSelectedConversation } = userConversation();
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const [conversations, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      setLoading(true);
      const fetchData = async () => {
        const data = await useGetConversation();
        setConversation(data.users);
      };
      fetchData();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogOut = (e) => {
    try {
      e.preventDefault();
      logOut();
      setAuthUser(null);
      setSelectedConversation(null);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col border-r border-slate-600 p-2 pr-8 ">
      <SearchInput conversations={conversations} />
      <div className="divider px-3" />
      <Conversations loading={loading} conversations={conversations} />
      <div className="my-4 flex items-center">
        <BiLogOut
          onClick={handleLogOut}
          className="scale-[2] duration-500 hover:scale-[2.5] hover:text-white"
        />
      </div>
    </div>
  );
};

export default Sidebar;
