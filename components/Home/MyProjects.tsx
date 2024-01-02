'use client'
import { useRef, useState } from "react"
import SelectLink from "./SelectLink"
import TopSelect from "./TopSelect"
import Projects from "./Projects";
import { allProjects, mobileProjects, websiteProjects } from "@/utils/projects";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function MyProjects() {
    // Links
    const [links, setLinks] = useState(['All','Website','Mobile']);
    const [active, setActive] = useState('All')

    return (
        <div id="projects" className="w-full mt-28 flex flex-col gap-3">
            {/* Titles */}
            <p data-aos="fade-left" className="font-medium">MY WORK</p>
            <p data-aos="fade-left"  className="text-5xl font-semibold">Projects.</p>
            
            {/* Links */}
            <TopSelect>
                {links.map((link,i) => (
                    <SelectLink 
                        key={i} 
                        active={active}
                        onClick={() => setActive(link)}
                    >
                        {link}
                    </SelectLink>
                ))}
            </TopSelect>
            
            {/* Projects */}
            <TransitionGroup>
                <CSSTransition
                    key={active}
                    timeout={500}
                    classNames="fade"
                    unmountOnExit
                >
                    <div className="mt-10" data-aos="fade-up">
                        {active === 'All' && <Projects projects={allProjects} />}
                        {active === 'Website' && <Projects projects={websiteProjects} />}
                        {active === 'Mobile' && <Projects projects={mobileProjects} />} {/* Add your mobile projects */}
                    </div>
                </CSSTransition>
            </TransitionGroup>

        </div>
    )
}