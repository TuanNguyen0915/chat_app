import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation";
// import useGetConversation from "../../hooks/useGetConversation";

const SearchInput = ({ conversations }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedConversation } = useConversation();
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    if (searchTerm.length < 3) {
      return toast.error("Search term must be at lest 3 characters long");
    } else {
      const filterConversation = conversations.find((c) =>
        c.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      if (filterConversation) {
        setSelectedConversation(filterConversation);
        setSearchTerm("");
      } else {
        toast.error("No such user found");
        setSearchTerm("");
      }
    }
  };

  return (
    <form onSubmit={handleSubmitSearch} className="flex items-center gap-2">
      <input
        value={searchTerm}
        type="text"
        placeholder="Search ..."
        className="input input-bordered rounded-md p-2"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-circle border-none bg-sky-500 text-white outline-none">
        <IoSearchSharp className="scale-[2]" />
      </button>
    </form>
  );
};

export default SearchInput;
