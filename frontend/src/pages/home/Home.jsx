import MessageContainer from "../../components/messages/MessageContainer";
import SideBarComponent from "../../components/sidebar/SideBarComponent";
import useListenConversations from "../../hooks/useListenConversations";

const Home = () => {
  
  // useListenConversations();
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <SideBarComponent />
      <MessageContainer />
    </div>
  );
};

export default Home;
