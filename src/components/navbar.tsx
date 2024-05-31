import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";

export default function Navbar() {
  return (
    <>
      <div className="shadow-lg Navbar fixed z-10 w-full md:flex lg:flex hidden align-center bg-white justify-center items-center">
        <div className="flex w-9/12 justify-between pt-3 pb-3">
          <div className="basis-2/4 flex justify-between pt-2 pb-2 items-center">
            <div className="w-auto m-0 p-0">
              <Image
                src={logo}
                alt="Logo"
                className="m-0 p-0"
                style={{ height: "35px", width: "80px" }}
              />
            </div>
            <Link href="/#hero-section" className="w-auto">
              <p className="">Home</p>
            </Link>
            <Link href="/#about-us" className="w-auto">
              <p className="">About</p>
            </Link>
            <Link href="/#project" className="w-auto">
              <p className="">Project</p>
            </Link>
            <Link href="/#service" className="w-auto">
              <p className="">Service</p>
            </Link>
          </div>

          <Link href="/contact" className="w-auto">
            <div className="cursor-pointer hover:animate-bounce hover:bg-slate-500 hover:transition-all hover:ease-in-out ease-in-out hover:duration-400 duration-400 transition-all ps-4 pe-4 flex bg-zinc-300 rounded-md w-auto items-center justify-center">
              <p className="w-auto font-medium">Contact</p>
              <i className="bi bi-arrow-up-right w-auto ps-1"></i>
            </div>
          </Link>
        </div>
      </div>

      <div className=" Navbar md:hidden lg:hidden w-full fixed p-3 z-10">
        <div className="shadow-lg  flex justify-between items-center bg-white p-2 rounded-md">
          <Image
            src={logo}
            alt="Logo"
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

          {/* <!-- drawer component --> */}
          <div
            id="drawer-example"
            className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
            tab-index="-1"
            aria-labelledby="drawer-label"
          >
            <h5
              id="drawer-label"
              className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
            >
              <svg
                className="w-4 h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              Info
            </h5>
            <button
              type="button"
              data-drawer-hide="drawer-example"
              aria-controls="drawer-example"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>

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
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Learn more
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Get access{" "}
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
