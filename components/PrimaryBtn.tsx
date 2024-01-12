import Image from "next/image";
import Link from "next/link";

export default function PrimaryBtn({href, children, classes='', ...props}:any) {
  return (
    <Link href={href} {...props} target="_blank" className={`buttonn w-fit px-5 ${classes ? classes : 'py-2 mt-4'}`}>
        <p className="text-gray-300 z-10 flex items-center gap-2">
            {children}
        </p>
        <div className="hoverEffect">
            <div>
            </div>
        </div>
    </Link>
  )
}