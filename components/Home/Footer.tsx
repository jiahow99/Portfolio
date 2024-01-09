/* eslint-disable @next/next/no-img-element */
'use client'
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import SocialMediaLink from "./SocialMediaLink";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export default function Footer() {
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
    <footer className="bg-secondary w-full py-7">
      <div className="w-10/12 mx-auto flex justify-between">
        {/* Profile */}
        <div className="flex flex-col gap-3">
          {/* Image */}
          <img 
            src="/images/profile3.png" 
            className="rounded-full w-16 h-16 object-cover" 
            alt="profile" 
          />

          {/* Email */}
          <div className="flex gap-2 items-center">
            <div className="text-2xl text-white">
              <HiOutlineMail />
            </div>
            <p>jia_how99@hotmail.com</p>
          </div>
          {/* Contact */}
          <div className="flex gap-2 items-center">
            <div className="text-2xl text-white">
              <LuPhone />
            </div>
            <p>018 7754338</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3  text-slate-400">
          <h1 className="font-semibold text-lg text-white">Links</h1>
          <button onClick={() => smoothScroll('overview')} className="hover:text-white w-fit tracking-wider">Overview</button>
          <button onClick={() => smoothScroll('experiences')} className="hover:text-white w-fit tracking-wider">Experiences</button>
          <button onClick={() => smoothScroll('projects')} className="hover:text-white w-fit tracking-wider">Projects</button>
          <button onClick={() => smoothScroll('techstacks')} className="hover:text-white w-fit tracking-wider">Tech Stacks</button>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-3  text-slate-400">
          <h1 className="font-semibold text-lg text-white">Projects</h1>
          <button onClick={() => smoothScroll('projects')} className="hover:text-white w-fit tracking-wider">DreamBid</button>
          <button onClick={() => smoothScroll('projects')} className="hover:text-white w-fit tracking-wider">Biobutton</button>
          <button onClick={() => smoothScroll('projects')} className="hover:text-white w-fit tracking-wider">MovieBites</button>
          <button onClick={() => smoothScroll('projects')} className="hover:text-white w-fit tracking-wider">Location-Based App</button>
        </div>

        {/* Contacts */}
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Contacts</p>
          <div className="flex gap-4">
            <SocialMediaLink href="https://www.facebook.com/profile.php?id=100003875460257">
              <FaFacebook />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.linkedin.com/in/kahhowliong/">
              <FaLinkedin />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.instagram.com/jia_hao316/">
              <FaInstagram />
            </SocialMediaLink>
            <SocialMediaLink href="mailto:jia_how99@hotmail.com">
              <MdEmail />
            </SocialMediaLink>
          </div>
        </div>
      </div>
    </footer>
  )
}