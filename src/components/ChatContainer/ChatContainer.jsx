import { ImageUp } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { SquarePen } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { Telescope } from 'lucide-react';


const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showCards, setShowCards] = useState(true); 
  const [showGreeting, setShowGreeting] = useState(true); // State to track greeting visibility
  const isMenuOpen = useSelector(store => store.app.isMenuOpen); // Get sidebar state

  const predefinedResponses = {
    "hi": "Hello! How can I assist you today?",
    "hello": "Hi! How can I assist you today?",
    "good morning": "Good morning! How may I help you today?",
    "good afternoon": "Good afternoon! How may I help you today?",
    "i have an issue": "I'm sorry to hear that. Can you please describe the issue?",
    "no image": "No problem! Please describe the issue in detail."
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (inputValue.trim() || image) {
      const userMessage = {
        text: inputValue || "uploaded the image of issue",
        image: image,
        timestamp: new Date().toLocaleTimeString(),
        from: 'user'
      };

      setMessages((prev) => [...prev, userMessage]);

      setIsLoading(true);
      setInputValue("");
      setImage(null);
      setShowCards(false); // Hide the cards
      setShowGreeting(false); // Hide the greeting

      // Simulate bot response delay
      setTimeout(() => {
        let botResponse;

        if (image) {
          botResponse = "We are checking your issue, and our support team will connect with you regarding this issue. Thank you!";
        } else {
          botResponse = predefinedResponses[inputValue.toLowerCase()] || "Could you please provide more details?";
        }

        const botMessage = {
          text: botResponse,
          timestamp: new Date().toLocaleTimeString(),
          from: 'bot'
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, 1500); // 1 second delay
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='flex'>
    <div className={`flex flex-col max-w-full border rounded-lg shadow-lg p-4 mr-4 md:mr-auto bg-gray-800 h-6/6 md:h-full dark:bg-gray-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'ml-0' : 'ml-0'}`}>
      <h1 className="text-white text-xl md:text-2xl font-bold mb-2">Welcome to ChatWhiz AI</h1>
      {showGreeting && ( // Conditional rendering of the greeting
        <h2 className="text-gray-300 text-lg mb-4">How can I help you today?</h2>
      )}
      {showCards && ( // Conditional rendering of the cards
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="w-[80%] md:w-full p-2 md:p-4 bg-gray-700 rounded-lg hover:scale-105 transition duration-300">
          <p className='text-white'><SquarePen size={15}/></p>
            <h3 className="text-white font-bold mb-2 flex">
            Create</h3>
            <ul className="text-gray-300">
              <li className='text-sm'>- Mini Project For School</li>
              <li className='text-sm'>- How to make Fast Food</li>
              <li className='text-sm'>- How to create a dog house</li>
            </ul>
          </div>
          <div className="w-[80%] md:w-full bg-gray-700 p-2 md:p-4 rounded-lg hover:scale-105 transition duration-300">
          <p className='text-white'><BookOpenText size={15}/></p>
            <h3 className="text-white font-bold mb-2">Learn</h3>
            <ul className="text-gray-300">
              <li className='text-sm'>- How to learn English</li>
              <li className='text-sm'>- Cyber Security</li>
              <li className='text-sm'>- Women Safety Laws in India</li>
            </ul>
          </div>
          <div className="w-[80%] md:w-full bg-gray-700 p-2 md:p-4 rounded-lg hover:scale-105 transition duration-300">
          <p className='text-white'><Telescope size={15}/></p>
            <h3 className="text-white font-bold mb-2">Discover</h3>
            <ul className="text-gray-300">
              <li className='text-sm'>- Hinduism</li>
              <li className='text-sm'>- Famous places to visit</li>
              <li className='text-sm'>- Facts about science</li>
            </ul>
          </div>
        </div>
      )}
      <div className="messages overflow-y-auto flex-grow mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`message mb-2 flex ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}>
            {msg.from === 'bot' && (
              <div className="flex items-center mr-2">
                {isLoading && <div className="loader w-4 h-4 border-2 border-gray-300 rounded-full border-t-transparent animate-spin mr-2"></div>}
                <div className="bg-gray-600 text-white p-2 rounded-lg max-w-xs">
                  {msg.image && (
                    <img
                      src={msg.image}
                      alt="User Upload"
                      className="message-image mb-1 rounded-lg max-w-xs max-h-32 object-cover"
                    />
                  )}
                  <p>{msg.text}</p>
                </div>
              </div>
            )}
            {msg.from === 'user' && (
              <div className="bg-blue-500 text-white p-2 rounded-lg max-w-xs">
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="User Upload"
                    className="message-image mb-1 rounded-lg max-w-xs max-h-32 object-cover"
                  />
                )}
                <p>{msg.text}</p>
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-2">
            <div className="loader w-4 h-4 border-2 border-gray-300 rounded-full border-t-transparent animate-spin mr-2"></div>
            <div className="bg-gray-600 text-white p-2 rounded-lg max-w-xs">Generating...</div>
          </div>
        )}
      </div>

      <form onSubmit={handleSendMessage} className="flex space-x-2">
        <label className="flex items-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden" // Hide the default file input
          />
          <button
            type="button"
            onClick={() => document.querySelector('input[type="file"]').click()}
            className="bg-gray-600 text-white rounded-full p-1 md:p-2 hover:bg-gray-500 focus:outline-none"
          >
            <ImageUp />
          </button>
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="flex-grow p-1 md:p-2 border border-gray-300 rounded-lg dark:text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>

    </div>
  );
};

export default ChatComponent;