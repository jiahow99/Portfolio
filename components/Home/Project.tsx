/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../PrimaryBtn";
import { PiYoutubeLogoFill } from "react-icons/pi";
import CodeButtons from "./CodeButtons";
import Tags from "./Tags";

export default function Project({project}: any) {
  const {youtube, src, title, description, href, link, techstacks} = project;

  return (
    <div className="flex flex-col justify-between bg-secondary p-5 pb-3 rounded-lg">
      <div>
        {/* Image */}
        <Link href={youtube} target="_blank" className="w-full h-56 relative group">
          <img 
              src={src} 
              alt="movie-bites" 
              className="w-full h-56 object-cover rounded-lg" 
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm text-white
            rounded-lg duration-200 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center">
              <div className="text-2xl"><PiYoutubeLogoFill /></div>
              <p>Video</p>
          </div>
        </Link>
        {/* Title */}
        <h1 className="text-2xl font-medium tracking-wide mt-4">{title}</h1>
        {/* Description */}
        <p className="text-sm mt-2 line-clamp-2 text-slate-400">{description}</p>
        {/* Tech Stacks */}
        <Tags tags={techstacks} />
      </div>
      {/* Buttons */}
      <CodeButtons href={href} link={link} />
    </div>
  )
}