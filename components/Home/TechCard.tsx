/* eslint-disable @next/next/no-img-element */
export default function TechCard({language}:any) {
  const {title, src} = language;

  return (
    <div className="w-full h-40 md:h-64 bg-white/20 rounded-xl flex flex-col justify-center items-center
     border-2 hover:bg-white/10 border-transparent hover:border-gray-500 duration-300 cursor-pointer">
      {/* Logo */}
      <div className="w-7/12 md:w-6/12 h-2/5 flex justify-center items-center">
        <img src={src} alt={title} className="object-cover" />
      </div>
      {/* Title */}
      <h1 className="mt-7 text-xl md:font-medium tracking-wide">{title}</h1>
    </div>
  )
}