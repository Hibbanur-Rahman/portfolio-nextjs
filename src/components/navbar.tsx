"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [isSidebarShow, setIsSidebarShow] = useState(false);
  const handleSidebar = () => {
    setIsSidebarShow(!isSidebarShow);
  };
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
              <p className="text-gray-800">Home</p>
            </Link>
            <Link href="/#about-us" className="w-auto">
              <p className="text-gray-800">About</p>
            </Link>
            <Link href="/#project" className="w-auto">
              <p className="text-gray-800">Project</p>
            </Link>
            <Link href="/#service" className="w-auto">
              <p className="text-gray-800">Service</p>
            </Link>
          </div>

          <Link href="/contact" className="w-auto">
            <div className="cursor-pointer hover:animate-bounce hover:bg-slate-500 hover:transition-all hover:ease-in-out ease-in-out hover:duration-400 duration-400 transition-all ps-4 pe-4 py-3 flex bg-zinc-800 rounded-md w-auto items-center justify-center">
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
            onClick={handleSidebar}
          >
            <i className="bi bi-list text-5xl m-0 p-0 text-black"></i>
          </button>

          <div
            className={`sidebar-ctm  bg-white ${
              isSidebarShow ? "active-ctm" : ""
            }`}
          >
            <div className="flex flex-col  items-center h-full w-full p-4">
              <div className="w-full flex justify-between align-items-center ">
                <div className="w-auto m-0 p-0">
                  <Image
                    src={logo}
                    alt="Logo"
                    className="m-0 p-0"
                    style={{ height: "55px", width: "90px" }}
                  />
                </div>
                <i
                  className="bi bi-x-lg text-black text-3xl hover:cursor-pointer"
                  onClick={handleSidebar}
                ></i>
              </div>
              <Link href="/#hero-section" className="w-full mt-9 mb-3">
                <p className="text-gray-800">Home</p>
              </Link>
              <Link href="/#about-us" className="w-full mt-3 mb-3">
                <p className="text-gray-800">About</p>
              </Link>
              <Link href="/#project" className="w-full mt-3 mb-3">
                <p className="text-gray-800">Project</p>
              </Link>
              <Link href="/#service" className="w-full mt-3 mb-3">
                <p className="text-gray-800">Service</p>
              </Link>
              <Link href="/contact" className="w-auto">
                <div className="cursor-pointer hover:animate-bounce hover:bg-slate-500 hover:transition-all hover:ease-in-out ease-in-out hover:duration-400 duration-400 transition-all ps-4 pe-4 py-3 flex bg-zinc-800 rounded-md w-auto items-center justify-center">
                  <p className="w-auto font-medium">Contact</p>
                  <i className="bi bi-arrow-up-right w-auto ps-1"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
