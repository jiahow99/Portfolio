import { FaCode } from "react-icons/fa";
import Card from "./Card";
import { GrGithub } from "react-icons/gr";
import { TbSeo } from "react-icons/tb";
import ViewMyStack from "./ViewMyStack";

export default function Overview() {
  return (
    <div id="overview" className="w-full pt-16 md:pt-28 flex flex-col gap-3">
        {/* Titles */}
        <p data-aos="fade-left" className="font-medium">INTRODUCTION</p>
        <p data-aos="fade-left" className="text-5xl font-semibold">Overview.</p>
        <p data-aos="fade-left" className="text-slate-200 text-sm md:text-lg tracking-wider font-semibold md:font-normal">
            I’m expertise in <span className="name">Backend Development</span>. 
            I have total <span className="name text-2xl font-semibold">5 projects</span> experiences and excited to explore the 
            <span className="name"> Web 3 !</span>
        </p>
        {/* Cards */}
        <div className="grid md:flex grid-cols-2 gap-3 justify-between items-center flex-wrap pt-5">
            <Card name="Backend Developer">
                <FaCode />
            </Card>
            <Card name="5 Project Experiences" data-aos-delay="400">
                <GrGithub />
            </Card>
            <Card name="SEO Knowledge" data-aos-delay="800">
                <TbSeo />
            </Card>
            <ViewMyStack />
        </div>
    </div>
  )
}