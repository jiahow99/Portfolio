import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

export default function SocialMediaLink({href, children}: any) {
  return (
    <Link href={href} className="text-2xl text-gray-400 hover:text-white duration-200">
        {children}
    </Link>
  )
}