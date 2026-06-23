import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const Slider = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Summer Sale"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
        title: "Winter Sale"    
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        title: "Autumn Sale"
    }
    
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide= () =>{
    const isFirstSlide = currentIndex ===slides.length - 1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return ( 
    <div className="w-full h-[300px] md:h-[450px] relative group overflow-hidden bg-gray-200">
        {/* slider BACKGROUND */}
        <div style={{backgroundImage: `url(${slides[currentIndex].image})`}} 
        className="h-full w-full bg-cover duration-1000 flex items-center justify-center" >
        
        <div className="bg-black/40 w-full h-full flex flex-col justify-center items-center text-white px-8">
        <h1 className="text-2xl md:text-5xl font-bold mb-3 text-center">
            {slides[currentIndex].title}
        </h1>

        <p className="text-sm md:text-lg text-gray-200 mb-6 text-center">
            {slides[currentIndex].subtitle}
        </p>

        <button
            className="
            bg-indigo-600
            hover:bg-indigo-700
            text-white
            font-semibold
            px-8
            py-3
            rounded-lg
            shadow-lg
            hover:shadow-xl
            transition-all
            duration-300
            hover:scale-105
            "
            >
            Shop Now
            </button>
            </div>
                </div>
                {/* Left Arrow */}
                <button 
                onClick={prevSlide} // <-- ক্লিক করলে prevSlide ফাংশন কল হবে
                className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50"
            >
                <ChevronLeft size={30} />
            </button>
            <button 
                onClick={nextSlide} // <-- ক্লিক করলে nextSlide ফাংশন কল হবে
                className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50"
            >
        <ChevronRight size={30} />
      </button>
    </div>
    
    
  )
}

export default Slider
