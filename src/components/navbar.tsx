import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
export default function Navbar() {
  return (
    <div className="Navbar fixed w-full flex align-center bg-white justify-center items-center">
      <div className="flex w-5/6 justify-between pt-3 pb-3">
        <div className="basis-2/4 flex justify-between pt-2 pb-2 items-center">
          <div className="w-auto m-0 p-0">
            <Image src={logo} alt="" className="m-0 p-0" style={{height:'35px',width:'80px'}}/>
          </div>
          <Link href="/home"className="w-auto" >
            <p className="">Home</p>
          </Link>
          <Link href="/home"className="w-auto">
            <p className="">About</p>
          </Link>
          <Link href="/home"className="w-auto">
            <p className="">Project</p>
          </Link>
          <Link href="/home"className="w-auto">
            <p className="">Testimonial</p>
          </Link>
        </div>

        <div className="cursor-pointer hover:animate-bounce hover:bg-slate-500 hover:transition-all hover:ease-in-out ease-in-out hover:duration-400  duration-400 transition-all ps-4 pe-4 flex bg-zinc-300 rounded-md w-auto items-center justify-center">
          <p className="w-auto font-medium">Contact</p>
          <i className="bi bi-arrow-up-right w-auto ps-1"></i>
        </div>
      </div>
    </div>
  );
}
