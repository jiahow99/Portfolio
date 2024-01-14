'use client'
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FaFacebook, FaInstagram , FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    // Smooth scroll effect
    const smoothScroll = (targetId: string) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
        });
        } else {
            router.push('/#'+targetId);
        }
    };

    // Link active class
    const active = "underline underline-offset-8 text-[#37C2D4]";
    const inactive = "hover:text-[#37C2D4] duration-300 ease-out]";


    return (
        <nav className="w-11/12 mx-auto py-5 flex items-center justify-between">
            {/* Photo name */}
            <div className="flex gap-2 items-center font-medium">
                <img src="/images/profile3.png" alt="profile" className="rounded-full w-16 h-16 object-cover" />
                <p>Kah How</p>
            </div>

            {/* Links */}
            <div className="hidden md:flex gap-8 ">
                <button onClick={() => smoothScroll('')} className={pathname === '/' ? active : inactive}>
                    Overview
                </button>
                <button onClick={() => smoothScroll('experiences')} className={inactive}>
                    Experiences
                </button>
                <button onClick={() => smoothScroll('projects')} className={pathname.startsWith('/project') ? active : inactive}>
                    Projects
                </button>
                <button onClick={() => smoothScroll('techstacks')} className={inactive}>
                    Tech Stacks
                </button>
            </div>

            {/* Socials */}
            <div className="hidden md:flex gap-4">
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

            {/* Hamburger Btn */}
            <label className="hamburger">
                <input type="checkbox" />
                <svg viewBox="0 0 32 32">
                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className="line" d="M7 16 27 16"></path>
                </svg>
            </label>
        </nav>
    )
}