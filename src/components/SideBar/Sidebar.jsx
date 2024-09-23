import { useSelector } from "react-redux";
import { CircleUserRound, CirclePlus } from 'lucide-react';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check screen width and set visibility accordingly
      if (window.innerWidth > 768) { // Adjust width as needed for your breakpoint
        setIsVisible(true); // Always show on larger screens
      } else {
        setIsVisible(isMenuOpen); // Only show if menu is open on mobile
      }
    };

    handleResize();

    // for resizing
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setIsVisible(true); // Show sidebar when opening
    } else {
      // Delay hiding to match the closing animation
      const timer = setTimeout(() => setIsVisible(false), 300); // Match the closing duration
      return () => clearTimeout(timer); 
    }
  }, [isMenuOpen]);

  return (
    isVisible && (
      <div
        className={`top-0 left-0 pt-2 w-1/3 md:w-64 h-4/6 md:h-full rounded-lg text-black absolute md:relative bg-gray-800 flex flex-col justify-between dark:bg-gray-900
        transform transition-transform duration-600 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="w-full">
          <h1 className='bg-gray-600 rounded-lg px-1 md:px-8 gap-2 md:gap-4 font-semibold py-2 cursor-pointer m-2 md:m-2 mt-16 md:mt-2 text-white flex text-md md:text-lg hover:scale-105 transition duration-300'>
            <CirclePlus /> New Chat
          </h1>
          <h1 className='bg-gray-600 rounded-lg px-4 md:px-16 font-semibold py-2 m-2 cursor-pointer text-white text-md md:text-lg hover:scale-105 transition duration-300'>
            Recent Chat
          </h1>
          <h1 className='bg-gray-600 rounded-lg px-4 md:px-16 font-semibold py-2 m-2 cursor-pointer text-white text-md md:text-lg hover:scale-105 transition duration-300'>
            Recent Chat
          </h1>
        </div>
        <div>
          <h1 className='bg-gray-600 rounded-lg px-1 md:px-8 gap-1 md:gap-2 font-semibold py-2 cursor-pointer m-1 md:m-2 text-white flex text-md md:text-lg hover:scale-105 transition duration-300'>
            <CircleUserRound /> Default User
          </h1>
        </div>
      </div>
    )
  );
};

export default Sidebar;
