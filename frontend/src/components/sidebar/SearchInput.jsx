import {IoSearchSharp} from 'react-icons/io5'

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search ..."
        className="input input-bordered rounded-md p-2"
      />
      <button className="btn btn-circle border-none bg-sky-500 text-white outline-none">
        <IoSearchSharp className="scale-[2]"/>
      </button>
    </form>
  );
};

export default SearchInput;
