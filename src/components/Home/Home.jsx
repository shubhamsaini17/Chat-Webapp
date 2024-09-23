import ChatContainer from "../ChatContainer/ChatContainer";
import Sidebar from "../SideBar/Sidebar"


export default function Home() {

  return (
    <div className="my-2 mb-6 h-[80vh] w-full max-w-7xl flex justify-between">
    <div className="ml-4">
     <Sidebar />
      </div>
      <div className="flex p-2 md:pl-4 md:ml-8 rounded-xl h-full">
      <img src="https://i.postimg.cc/4nRh04tq/girl-image-removebg.png" className="mr-0 mt-24 h-[120px] md:h-[90%]" alt="" />
      <ChatContainer/>
      </div>
    </div>
  );
}