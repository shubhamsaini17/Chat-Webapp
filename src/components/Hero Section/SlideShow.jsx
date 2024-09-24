import { data } from "./SlideData"; // Ensure this path is correct
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const SlideShow = () => {

  const slideLeft = () => {
    const slider = document.getElementById('slide');
    slider.scrollLeft -= 300; // Adjust scroll amount if necessary
  }

  const slideRight = () => {
    const slider = document.getElementById('slide');
    slider.scrollLeft += 300; // Adjust scroll amount if necessary
  }

  return (
    <div className='my-20'>
      <h1 className='text-3xl md:text-5xl font-extrabold my-6 ml-10'>
        Life at <span className='text-orange-700'>ChatWhiz</span>
      </h1>
      <div className='relative flex items-center'>
        <MdChevronLeft 
          className='opacity-50 cursor-pointer hover:opacity-100' 
          onClick={slideLeft} 
          size={40}
        />
        <div 
          id='slide' 
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
            <img 
              className="w-[420px] h-[420px] inline-block rounded-xl p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 object-cover" 
              key={item.id} 
              src={item.img} 
              alt={`Slide ${item.id}`} 
            />
          ))}
        </div>
        <MdChevronRight 
          className='opacity-50 cursor-pointer hover:opacity-100' 
          onClick={slideRight} 
          size={40}
        />
      </div>
    </div>
  );
}

export default SlideShow;
