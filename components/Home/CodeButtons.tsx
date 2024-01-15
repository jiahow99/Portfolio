import Image from "next/image";
import PrimaryBtn from "../PrimaryBtn";
import Link from "next/link";

export default function CodeButtons({href, link}: any) {
  return !Array.isArray(href) 
  ? (
    <div className="flex gap-2 items-end">
        {/* Code Link */}
        <PrimaryBtn href={href}>
            Code 
            <Image src="/icons/code.png" width={24} height={24} alt="code" />
        </PrimaryBtn>
        {/* View */}
        <Link prefetch={false} href={link} className="border-2 border-white/40 h-fit px-6 py-2 rounded-full hover:border-white duration-300 group ease-in-out">
            <p className="font-semibold text-white/80 group-hover:text-white">View</p>
        </Link>
    </div>
  ):(
    <div className="flex gap-3 items-end">
        {/* Code link */}
        <PrimaryBtn href={href[0]}>
            Code 
            <Image src="/icons/code.png" width={24} height={24} alt="code" />
        </PrimaryBtn>
        {/* API link */}
        <PrimaryBtn href={href[1]}>
            API 
            <Image src="/icons/code.png" width={24} height={24} alt="code" />
        </PrimaryBtn>
        {/* View */}
        <Link prefetch={false} href={link} className="border-2 border-white/40 h-fit px-6 py-2 rounded-full hover:border-white duration-300 group ease-in-out">
            <p className="font-semibold text-white/80 group-hover:text-white">View</p>
        </Link>
    </div>
  )
}