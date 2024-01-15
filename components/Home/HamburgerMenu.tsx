'use client'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { IoIosClose } from "react-icons/io";

export default function HamburgerMenu({hamburgerOpen=false, setHamBurgerOpen}: any) {
  return (
    <div className={`hamburger-menu fixed top-0 left-0 w-screen h-screen flex flex-col justify-between 
    items-center z-40 py-20 duration-200 ${hamburgerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      {/* Close */}
      <div onClick={() => setHamBurgerOpen(false)} className="text-7xl absolute top-2 right-2">
        <IoIosClose />
      </div>

      {/* Links */}
      <div className="flex flex-col text-2xl">
        <button className="py-5">
          <p>Overview</p>
        </button>
        <button className="py-5">
          <p>Experiences</p>
        </button>
        <button className="py-5">
          <p>Projects</p>
        </button>
        <button className="py-5">
          <p>Tech Stacks</p>
        </button>
      </div>

      {/* Contact Me */}
      <div>
        <p className="text-center text-gray-400 font-semibold">Contact me :</p>
        <div className="flex gap-5 justify-center mt-3">
          <a href="https://www.linkedin.com/in/kahhowliong/" target="_blank" className="text-4xl text-gray-400 hover:text-white duration-200">
              <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100003875460257" target="_blank" className="text-4xl text-gray-400 hover:text-white duration-200">
              <FaFacebook />
          </a>
          <a href="https://www.instagram.com/jia_hao316/" target="_blank" className="text-4xl text-gray-400 hover:text-white duration-200">
              <FaInstagram    />
          </a>
          <a href="mailto:jia_how99@hotmail.com" className="text-4xl text-gray-400 hover:text-white duration-200">
              <MdEmail  />
          </a>
        </div>
      </div>
    </div>
  )
}