'use client'
import { useState, useEffect } from 'react';

export default function Cursor() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (event: any) => {
        const x = event.clientX;
        const y = event.clientY;
        setCursorPosition({ x, y });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

    return (
        <div>
            {/* Cursor */}
            <div 
                className="z-50 fixed w-3 h-3 bg-white rounded-full pointer-events-none"
                style={{ transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)` }}    
            ></div>
            {/* Stalker */}
            <div 
                className="z-50 fixed w-14 h-14 -mt-[21px] -ml-[21px] bg-transparent border-2 border-gray-400 rounded-full ease-out duration-200 pointer-events-none"
                style={{ transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)` }}    
            ></div>        
        </div>
    );
}
