import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
export default function Navbar() {
  return (
    <>
      <div className=" Navbar fixed w-full md:flex lg:flex hidden align-center bg-white justify-center items-center">
        <div className="flex w-5/6 justify-between pt-3 pb-3">
          <div className="basis-2/4 flex justify-between pt-2 pb-2 items-center">
            <div className="w-auto m-0 p-0">
              <Image
                src={logo}
                alt=""
                className="m-0 p-0"
                style={{ height: "35px", width: "80px" }}
              />
            </div>
            <Link href="/home" className="w-auto">
              <p className="">Home</p>
            </Link>
            <Link href="/home" className="w-auto">
              <p className="">About</p>
            </Link>
            <Link href="/home" className="w-auto">
              <p className="">Project</p>
            </Link>
            <Link href="/home" className="w-auto">
              <p className="">Testimonial</p>
            </Link>
          </div>

          <div className="cursor-pointer hover:animate-bounce hover:bg-slate-500 hover:transition-all hover:ease-in-out ease-in-out hover:duration-400  duration-400 transition-all ps-4 pe-4 flex bg-zinc-300 rounded-md w-auto items-center justify-center">
            <p className="w-auto font-medium">Contact</p>
            <i className="bi bi-arrow-up-right w-auto ps-1"></i>
          </div>
        </div>
      </div>

      <div className="Navbar  md:hidden lg:hidden w-full fixed p-3">
        <div className="flex justify-between items-center bg-white p-2 rounded-md">
          <Image
            src={logo}
            alt=""
            style={{ height: "50px", width: "100px !important" }}
          />
          <button
            className="border border-3 w-auto rounded-md"
            type="button"
            data-drawer-target="drawer-example"
            data-drawer-show="drawer-example"
            aria-controls="drawer-example"
          >
            <i className="bi bi-list text-5xl m-0 p-0"></i>
          </button>
        
        </div>
          {/* <!-- drawer component --> */}
          <div
            id="drawer-example"
            className="fixed top-0 left-0 z-60 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
            tab-index="-1"
            aria-labelledby="drawer-label"
          >
           
            
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              Supercharge your hiring by taking advantage of our{" "}
              <a
                href="#"
                className="text-blue-600 underline dark:text-blue-500 hover:no-underline"
              >
                limited-time sale
              </a>{" "}
              for Flowbite Docs + Job Board. Unlimited access to over 190K
              top-ranked candidates and the #1 design job board.
            </p>
           
          </div>
      </div>
    </>
  );
}
