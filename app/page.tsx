'use client'
import Experiences from "@/components/Home/Experiences";
import Intro from "@/components/Home/Intro";
import Navbar from "@/components/Home/Navbar";
import Overview from "@/components/Home/Overview";
import MyProjects from "@/components/Home/MyProjects";
import ProgrammingLanguages from "@/components/Home/ProgrammingLanguages";
import Footer from "@/components/Home/Footer";
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import Aos from "aos";

export default function Home() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
    });
  },[]);

  return (
    <main className="w-11/12 md:w-10/12 mx-auto">
      <Intro />

      <Overview />

      <Experiences />

      <MyProjects />

      <ProgrammingLanguages />

    </main>
  )
}
