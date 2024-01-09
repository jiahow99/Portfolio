import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

export default function VideoBtn({href}: any) {
  return (
    <Link href={href} target="_blank" className="py-4 px-10 rounded-full border-2 border-gray-300 flex items-center gap-2
    hover:bg-red-500 hover:border-transparent duration-200">
        <p>Video</p>
        <div className="text-2xl">
            <FaYoutube />
        </div>
    </Link>
  )
}