import PrimaryBtn from "@/components/PrimaryBtn";
import Feature from "@/components/Project/Feature";
import VideoBtn from "@/components/Project/VideoBtn";
import { dreambidFeatures } from "@/utils/features";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

export default function page() {
  const githubLink = "https://github.com/jiahow99/Vue-Listing-App";
  const videoLink = "https://www.youtube.com/watch?v=-whHhK3ceSc";

  return (
    <div className="w-11/12 mx-auto pt-10">
      {/* Title */}
      <h1 className="font-medium text-2xl tracking-wider">DreamBid</h1>
      <h1 className="font-medium text-5xl mt-3">Features</h1>

      {/* Feature */}
      {dreambidFeatures.map((feature, i) => (
        <Feature feature={feature} key={feature.title} right={i % 2 === 1} />
      ))}

      {/* Buttons */}
      <div className="flex justify-center items-center gap-5 my-20">
        <PrimaryBtn classes="px-10 py-4 text-lg" href={githubLink}>
          Code 
          <Image src="/icons/code.png" width={24} height={24} alt="code" />
        </PrimaryBtn>

        <VideoBtn href={videoLink} />
      </div>

    </div>
  )
}