import { FaCode } from "react-icons/fa6";

export default function Card({name, children, ...props}: any) {
  return (
    <div data-aos="fade-left" data-aos-offset="400" className="e-card playing w-full h-[250px] 
    md:w-[240px] md:h-[330px]" {...props}>
        <div className="image"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="infotop top-12 md:top-[5.6em] flex flex-col justify-center items-center px-5">
            <div className="text-6xl text-white">
            {children}
            </div>
            <br />      
            <p className="font-medium">{name}</p>
            <br />
        </div>
    </div>
  )
}

