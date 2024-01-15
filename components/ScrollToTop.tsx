'use client'
import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        // Show scroll top button
        const handleScroll = () => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          setShowButton(scrollTop > 0);
        };
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Smooth scroll top
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };

  return showButton && (
    <div className="fixed bottom-5 md:bottom-12 right-5 md:right-16 md:scale-150 duration-200">
        <div className="animate-bounce">
            <button onClick={scrollToTop} className="scroll-top-btn rotate-90">
                <div className="scroll-top-btn-box">
                    <span className="scroll-top-btn-elem">
                    <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                        ></path>
                    </svg>
                    </span>
                    <span className="scroll-top-btn-elem">
                    <svg viewBox="0 0 46 40">
                        <path
                        d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                        ></path>
                    </svg>
                    </span>
                </div>
            </button>
        </div>
    </div>
  )
}