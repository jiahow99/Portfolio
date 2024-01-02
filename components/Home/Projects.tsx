import Project from "./Project";

export default function Projects({projects}: any) {
  return (
    <div className="w-full grid grid-cols-3 gap-10 px-7">
        {projects.map((project: any,i: any) => (
            <Project 
              key={i}
              project={project}
            />
        ))}
    </div>
  )
}