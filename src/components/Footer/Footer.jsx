import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Github } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function Footer() {
    const isDarkMode = useSelector((state)=>state.theme.isDarkMode);

    return (
        <footer className="bg-gray-100 border-y dark:bg-black">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={isDarkMode ? "https://i.postimg.cc/HnBFnFLZ/day-mode.png" : "https://i.postimg.cc/XNrhV3g6/removedark.png" }
                                className="mr-3 h-6 md:h-7"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="mx-8 md:mx-0 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-2 md:mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-300">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-2 md:mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-2 md:mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-300">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-2 md:mb-4">
                                    <a
                                        href="https://github.com/"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-2 md:mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-300">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-2 md:mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="flex flex-col-rev sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm md:text-sm text-gray-500 sm:text-center">
                        © 
                        <a href="#" className="hover:underline">
                        ChatWhiz AI 
                        </a>
                        .  All Rights Reserved.
                    </span>
                    <div className="flex mx-8 justify-center md:mt-4 space-x-8 md:space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                        <Facebook/>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <Twitter/>
                        </Link>
                        <Link to="#" className="text-gray-500">
                        <Github/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
