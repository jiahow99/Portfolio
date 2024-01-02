'use client'
import Experiences from "@/components/Home/Experiences";
import Intro from "@/components/Home/Intro";
import Navbar from "@/components/Home/Navbar";
import Overview from "@/components/Home/Overview";
import MyProjects from "@/components/Home/MyProjects";
import ProgrammingLanguages from "@/components/Home/ProgrammingLanguages";
import Footer from "@/components/Home/Footer";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  },[]);

  return (
    <>
    <main className="w-10/12 mx-auto">
      <Navbar />

      <Intro />

      <Overview />

      <Experiences />

      <MyProjects />

      <ProgrammingLanguages />

    </main>
    
    <Footer />
    </>
  )
}
