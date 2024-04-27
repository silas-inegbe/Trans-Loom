"use client"
import React, { useState } from "react";
import image from '../assets/10.png'
import image2 from '../assets/ui-transloom.svg'
import image3 from '../assets/9731553.png'
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { IoClose, IoMenuOutline } from "react-icons/io5";



// import { useState, useEffect } from "react";

function LandinPage() {
  const pathname = usePathname();
  const router = useRouter();
  const [show, setShow] = useState(false);

  const Navlist = [

    {
      name: "Login",
      path: "/login"
    },

  ];


  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div >
      <main className="relative overflow-hidden bg-gray-800">
        <header className="z-30  flex items-center w-full h-24 sm:h-32 ">
          <div className="container flex items-center justify-between px-6 mx-auto">
            <div className="text-3xl font-black uppercase text-white">
              <Link href="/"> trans.<span className="text-[#52796f]">loom</span></Link>
            </div>
            <div className="flex items-center gap-3">
              <nav className="items-center hidden text-lg uppercase font-sen text-white lg:flex">
                {
                  Navlist.map((item, index) => (
                    <a
                      key={index}
                      href={item.path}
                      className={`${pathname === item.path
                          ? "border-b-2  border-white text-white"
                          : "text-white border-[#52796f] border-2 rounded hover:bg-[#52796f] "
                        } px-4 py-1 mx-2`}
                    >
                      {item.name}
                    </a>
                  ))
                }
              </nav>
              <IoMenuOutline className={`lg:hidden ${show ? "hidden" : "block"} text-4xl text-[#52796f] hover:cursor-pointer`} onClick={handleClick} />
              <IoClose className={`${show ? "block" : "hidden"} text-4xl text-[#52796f] hover:cursor-pointer`} onClick={handleClick} />

              <button onClick={() => router.push('/signup')} 
              className="hidden px-4 py-2 text-white uppercase bg-[#52796f] border-2 border-transparent rounded-lg text-md lg:block">
                Get started
              </button>
            </div>
          </div>
        </header>
        <div className={`${show ? "opacity-100" : "opacity-0"} transition-all duration-500 ease-in-out 
        absolute top-24 w-full h-[20vh] flex items-center justify-evenly bg-gray-800 z-50`}>
          {/* login and get started buttons */}
            <button onClick={() => router.push('/signup')}
            disabled={!show} 
            className="px-4 py-2 text-white uppercase bg-[#52796f] border-2 border-transparent rounded-lg text-md">
              Get started
            </button>
            <button onClick={() => router.push('/login')}
            disabled={!show} 
            className="px-4 py-2 text-white uppercase bg-[#52796f] border-2 border-transparent rounded-lg text-md">
              Login
            </button>
        </div>
        <div className="flex items-center bg-gray-800">
          <div className="container relative flex px-6 py-16 mx-auto">
            <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
              <span className="w-20 h-2 mb-12 bg-[#52796f]"></span>
              <h1 className="flex flex-col text-6xl font-black leading-none uppercase font-bebas-neue sm:text-8xl text-white">
                Just
                <span className="text-4xl sm:text-7xl">Type it</span>
              </h1>
              <p className="text-sm sm:text-base text-white">
              Dimension of communication that makes understanding across 
              cultures possible and accessible. An indefinite and 
              diverse environment in which language translation and 
              human interaction take place.
              </p>
              <div className="flex mt-8 mb-8 ">
                <button onClick={() => router.push('/signup')}
                  className="px-4 py-2 mr-4 text-white uppercase bg-[#52796f] border-2 border-transparent rounded-lg lg:text-md hover:bg-[#52796f] text-sm"
                >
                  Get started
                </button>
                <button
                  onClick={() => {
                    toast("This feature is coming soon", {
                      type: "info",
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    })
                  }}

                  className=" px-4 py-2 uppercase bg-transparent border-2 border-[#52796f] rounded-lg text-white hover:bg-[#52796f] hover:text-white lg:text-md text-sm"
                >
                  Read more
                </button>
              </div>
            </div>
            <div className="relative z-50 hidden sm:block sm:w-1/3 lg:w-3/5">
              <Image src={image3} draggable={false} alt="**" className=" absolute -top-16 left-32 object-fill h-[auto] object-bottom w-[500px] m-auto" />
            </div>
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}

export default LandinPage;2