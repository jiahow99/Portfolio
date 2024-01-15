import Image from "next/image";
import ExperienceCard from "./ExperienceCard";

export default function Experiences() {
  return (
    <div id="experiences" className="w-full pt-16 md:pt-28 flex flex-col gap-3">
        {/* Titles */}
        <p data-aos="fade-left" className="font-medium">WHAT I HAVE DONE SO FAR</p>
        <p data-aos="fade-left" className="text-5xl font-semibold">EXPERIENCE.</p>
        <p data-aos="fade-left" className="text-slate-200 text-lg tracking-wider">
            {/* I’m expertise in <span className="name">Backend Development</span>. 
            I have total <span className="name">5 projects</span> experiences and excited to explore the 
            <span className="name"> Web 3 !</span> */}
        </p>
        {/* Timeline */}
        <div className="relative mt-10">
            {/* Line */}
            <div className="absolute left-1/2 -translate-x-1/2">
                <div className="w-2 h-[2000px] md:h-[1150px] bg-white rounded-full" />
            </div>

            {/* Bachelor's */}
            <ExperienceCard>
                {/* Logo */}
                <div className="absolute w-full flex justify-center pt-10" data-aos="zoom-in" data-aos-offset="300">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex justify-center items-center">
                        <Image 
                            src="/images/sunway.png"
                            width={70} height={70}
                            className="rounded-full"
                            alt="sunway"
                        />
                    </div>
                </div>
                {/* Content */}
                <div className="flex justify-between" data-aos="fade-right" data-aos-offset="300">
                    <div className='w-5/12 h-full pt-10'>
                        <div className="w-full md:w-11/12 ml-auto bg-[#23465A] border-b-4 border-white rounded-lg p-2 md:p-4">
                            <p className="md:text-xl font-semibold">Bachelor’s Information Technology</p>
                            <p className="text-xs md:text-base">Sunway University</p>
                            <div className="mt-1 w-fit text-sm px-3 py-1 rounded-lg bg-gray-500 text-gray-200">
                                <p>CGPA 3.5</p>
                            </div>
                            <ul className="list-disc p-4 text-xs md:text-sm flex flex-col gap-3 tracking-wide md:text-justify">
                                <li>Completed core subjects such as  
                                    <span className="text-primary"> Database Engineering</span>, 
                                    <span className="text-primary"> Human-Computer Interaction</span>, 
                                    <span className="text-primary"> Website Development</span>, 
                                    <span className="text-primary"> UI/UX Design</span>, 
                                    <span className="text-primary"> UI/UX Design</span>,
                                    <span className="text-primary"> Network Security</span>,
                                    <span className="text-primary"> Linux Server Management</span>,
                                    <span className="text-primary"> Data Structures and Algorithm</span>.
                                </li>
                                <li>Build real-world projects such as 
                                    <span className="text-primary"> Website Development</span>, 
                                    <span className="text-primary"> Mobile Application</span>, and
                                    <span className="text-primary"> Networking Management (Linux)</span>.   
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-5/12 pt-14 text-xs md:text-lg font-medium">
                        <p>Jan 2021 - Dec 2023</p>
                    </div>
                </div>
            </ExperienceCard>

            {/* Web Developer Intern */}
            <ExperienceCard>
                {/* Logo */}
                <div className="absolute w-full flex justify-center pt-20" data-aos="zoom-in" >
                    <div className="w-14 h-14 md:w-20  md:h-20 rounded-full bg-white flex justify-center items-center">
                        <Image 
                            src="/images/lnworldwide.jpg"
                            width={75} height={75}
                            className="rounded-full"
                            alt="sunway"
                        />
                    </div>
                </div>
                {/* Content */}
                <div className="flex justify-between" data-aos="fade-left">
                    <div className="w-5/12 pt-24 text-xs md:text-lg font-medium text-right">
                        <p>Jan 2023 - Mar 2023</p>
                    </div>
                    <div className='w-5/12 h-full pt-20 ml-auto'>
                        <div className="w-full md:w-11/12 mr-auto bg-[#23465A] border-b-4 border-white rounded-lg p-2 md:p-4">
                            <p className="md:text-xl font-semibold">Web Developer Intern</p>
                            <p className="text-xs md:text-base">LN WorldWide Resources Company</p>
                            <ul className="list-disc p-4 text-xs md:text-sm flex flex-col gap-1 tracking-wide ">
                                <li>Interned as a <span className="text-primary"> website developer</span>, 
                                    specializing in 
                                    <span className="text-primary"> front-end development</span>.
                                </li>
                                <li>Work with <span className="text-primary"> WordPress</span> and handle <span className="text-primary"> plugins</span> and SEO updates.</li>
                                <li>Learn <span className="text-primary"> Bootstrap</span> for visually appealing and responsive designs.</li>
                                <li>Hands-on experience with <span className="text-primary"> SEO practices</span>.</li>
                                <li>Worked with the <span className="text-primary"> Laravel</span> framework, expanding skills 
                                in <span className="text-primary"> back-end development</span>.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ExperienceCard>

            {/* Ausmat */}
            <ExperienceCard>
                {/* Logo */}
                <div data-aos="zoom-in" className="absolute w-full flex justify-center pt-20">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex justify-center items-center">
                        <Image 
                            src="/images/sunway.png"
                            width={70} height={70}
                            className="rounded-full"
                            alt="sunway"
                        />
                    </div>
                </div>
                {/* Content */}
                <div className="flex justify-between" data-aos="fade-right">
                    <div className='w-5/12 h-full pt-20'>
                        <div className="w-full md:w-11/12 ml-auto bg-[#23465A] border-b-4 border-white rounded-lg p-2 md:p-4">
                            <p className="md:text-xl font-semibold">Australian Matriculation (AUSMAT)</p>
                            <p className="text-xs md:text-base">Sunway University</p>
                            <div className="mt-1 w-fit text-sm px-3 py-1 rounded-lg bg-gray-500 text-gray-200">
                                <p>ATAR 82.00</p>
                            </div>
                            <ul className="list-disc p-4 text-xs md:text-sm flex flex-col gap-1 tracking-wide ">
                                <li>Completed Australian Matriculation at Sunway University.</li>
                                <li>Studied <span className="text-primary"> mathematic methods</span> for programming.</li>
                                <li>Take course of <span className="text-primary"> General Computer Science</span>.</li>
                                <li>Learn about database fundamentals with <span className="text-primary"> Oracle SQL</span>.</li>
                                <li>Achieved ATAR score of <span className="text-primary"> 82.00 over 100</span>.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-5/12 pt-24 text-xs md:text-lg font-medium">
                        <p>Mar 2020 - Nov 2020</p>
                    </div>
                </div>
            </ExperienceCard>

        </div>
    </div>
  )
}