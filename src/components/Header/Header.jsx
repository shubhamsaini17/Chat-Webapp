import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toogleMenu } from "../../../Utils/appSlice";
import { AlignJustify } from "lucide-react";
import { toggleDarkMode } from "../../../Utils/themeSlice";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

export default function Header() {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toogleMenu());
  };
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <header
      className={`shadow sticky z-50 top-0 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <nav
        className={`border-gray-200 px-4 lg:px-6 py-2.5 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center px-6 md:px-0">
            <h1
              className="text-md md:text-xl cursor-pointer mr-4 pl-20 md:pl-0 ml-12 md:ml-0"
              onClick={toggleMenuHandler}
              style={{ marginLeft: "-6rem" }}
            >
              <AlignJustify />
            </h1>
            <Link to="/" className="flex items-center">
              <img
                src="https://i.postimg.cc/XNrhV3g6/removedark.png"
                className="h-4 md:h-6"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex items-center lg:order-2">
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className="text-gray-800 bg-gray-100 ring-1 hover:bg-gray-400 focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-4 py-1 lg:py-1 mr-2 focus:outline-none"
            >
              {isDarkMode ? <Sun/> : <Moon />}
            </button>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-md px-2 lg:px-5 py-1 md:py-1 lg:py-2"
            >
              Log In
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 text-lg pl-3 duration-200 
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-500"
                                        } 
                                        border-b border-gray-100 hover:bg-gray-50 hover:scale-95 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 text-lg pr-4 pl-3 duration-200 
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-500"
                                        } 
                                        border-b border-gray-100 hover:bg-gray-50 hover:scale-95 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 text-lg pl-3 duration-200 
                                        ${
                                          isActive
                                            ? "text-orange-700"
                                            : "text-gray-500"
                                        } 
                                        border-b border-gray-100 hover:bg-gray-50 hover:scale-95 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
