import ChatContainer from "../ChatContainer/ChatContainer";
import SlideShow from "../Hero Section/SlideShow";
import ProductSlide from "../Products/ProductSlide";
import Sidebar from "../SideBar/Sidebar";

export default function Home() {
  return (
    <>
      <div className="h-[90vh] md:w-auto md:p-2 absolute md:absolute">
        <Sidebar />
      </div>
      <div className="md:flex md:items-center md:justify-end">
        <div>
          <h1 className="mb-12 ml-20 mt-10 md:mt-0 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white relative border-l-8 border-orange-700 pl-4 hover:transition duration-300 ease-in-out transform hover:scale-105">
            Hello,
            <br />
            <span className="text-orange-700 block hover:text-orange-800 transition duration-300 ease-in-out">
              Welcome to <br /> ChatWhiz AI Services
            </span>
          </h1>
        </div>
        <div className="ml-8 md:flex md:w-4/6">
          <div className="md:h-[80vh]">
            <img
              src="https://i.postimg.cc/4nRh04tq/girl-image-removebg.png"
              className="mr-0 hidden md:block mt-24 h-[10%] md:h-[90%] hover:scale-105 transition duration-300"
              alt=""
            />
          </div>
          <div className="md:h-[90vh] w-full md:flex pr-5 md:p-4">
            <ChatContainer />
          </div>
        </div>
      </div>

      <div className="px-4">
        <ProductSlide />
      </div>
      <div>
        <SlideShow />
      </div>
    </>
  );
}
