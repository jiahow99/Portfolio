import { FaCode } from "react-icons/fa6";

export default function Card({name, children, ...props}: any) {
  return (
    <div data-aos="fade-left" data-aos-offset="400" className="e-card playing" {...props}>
        <div className="image"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="infotop flex flex-col justify-center items-center px-5">
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