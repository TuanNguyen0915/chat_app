import MessageContainer from "../components/messageContainer/MessageContainer";
import Sidebar from "../components/sidebar/SideBar";

const Home = () => {
  return  <main className="flex overflow-hidden rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding backdrop-blur-lg backdrop-filter sm:h-[450px] md:h-[550px]">
  <Sidebar />
  <MessageContainer />
</main>;
};

export default Home;
