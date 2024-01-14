'use client'
import { GiClick } from "react-icons/gi";

export default function ViewMyStack() {
  // Smooth scroll effect
  const smoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button 
      onClick={() => smoothScroll('techstacks')} 
      data-aos="fade-left" data-aos-delay="1200" data-aos-offset="400"
      className="w-full h-[250px] md:w-[240px] md:h-[330px] rounded-xl bg-white/20 flex flex-col justify-center 
      items-center text-lg font-medium hover:bg-white/10 border-2 border-transparent duration-300
      hover:border-gray-500"
    >
        <p>View My</p>
        <p>Tech Stack</p>
        <div className="text-4xl mt-1">
            <GiClick />
        </div>
    </button>
  )
}