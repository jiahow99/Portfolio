import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram , FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
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
        <nav className="w-full py-5 flex items-center justify-between">
            {/* Photo name */}
            <div className="flex gap-2 items-center font-medium">
                <Image src="/images/profile.png" width={50} height={50} alt="profile" className="rounded-full" />
                {/* <div className="w-10 h-10 rounded-full bg-white"></div> */}
                <p>Kah How</p>
            </div>

            {/* Links */}
            <div className="flex gap-8 ">
                <button onClick={() => smoothScroll('overview')} className="underline underline-offset-8 text-[#37C2D4]">
                    Overview
                </button>
                <button onClick={() => smoothScroll('experiences')} className=" hover:text-[#37C2D4] duration-300 ease-out">
                    Experiences
                </button>
                <button onClick={() => smoothScroll('projects')} className=" hover:text-[#37C2D4] duration-300 ease-out">
                    Projects
                </button>
                <button onClick={() => smoothScroll('techstacks')} className=" hover:text-[#37C2D4] duration-300 ease-out">
                    Tech Stacks
                </button>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/kahhowliong/" target="_blank" className="text-2xl text-gray-400 hover:text-white duration-200">
                    <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100003875460257" target="_blank" className="text-2xl text-gray-400 hover:text-white duration-200">
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com/jia_hao316/" target="_blank" className="text-2xl text-gray-400 hover:text-white duration-200">
                    <FaInstagram    />
                </a>
                <a href="mailto:jia_how99@hotmail.com" className="text-2xl text-gray-400 hover:text-white duration-200">
                    <MdEmail  />
                </a>
            </div>
        </nav>
    )
}