'use client'
import { useState } from "react";
import TopSelect from "./TopSelect";
import SelectLink from "./SelectLink";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Database from "./Database";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function ProgrammingLanguages() {
  const [links, setLinks] = useState(['Frontend','Backend','Database'])
  const [active, setActive] = useState('Backend');

  return (
    <div id="techstacks" className="w-full my-28 flex flex-col gap-3">
      {/* Titles */}
      <p data-aos="fade-left" className="font-medium">PROGRAMMIGN LANGAUGES</p>
      <p data-aos="fade-left" className="text-5xl font-semibold">My Tech Stack.</p>

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

      <TransitionGroup>
          <CSSTransition
              key={active}
              timeout={500}
              classNames="fade"
              unmountOnExit
          >
              <div className="mt-10" data-aos="fade-up">
                {active === 'Frontend' && <Frontend />}
                {active === 'Backend' && <Backend />}
                {active === 'Database' && <Database />}
              </div>
          </CSSTransition>
      </TransitionGroup>
    </div>
  )
}