'use client'
import Aos from "aos";
import { useEffect } from "react";

export default function Layout({children}: any) {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
  },[]);

  return (
    <div>
      
      {children}
    </div>
  )
}