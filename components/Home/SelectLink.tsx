export default function SelectLink({active, children, onClick}:any) {
  return (
    <div data-aos="fade-up" onClick={onClick} className={`w-28 text-center py-2 font-medium cursor-pointer rounded-lg 
      hover:bg-primary/60 duration-200 tracking-wide ${children===active && 'bg-primary/70'}`}
    >
        {children}
    </div>
  )
}