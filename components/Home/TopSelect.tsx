export default function TopSelect({children}:any) {
  return (
    <div data-aos="fade-up" className="w-full flex justify-center mt-5">
        <div className="w-fit rounded-lg bg-[#35575D] font-semibold flex">
          {children}
        </div>
    </div>
  )
}