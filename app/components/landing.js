"use client"
import React from "react";
import image from '../assets/10.png'
import { usePathname } from "next/navigation";
import Image from "next/image";
// import { useState, useEffect } from "react";

function LandinPage() {
  const pathname  = usePathname();


  const Navlist = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "App",
        path: "/app"
    },
    {
        name: "Contact",
        path: "/contact"
    },
    {
        name: "Carrer",
        path: "/carrer"

    }
    ];

  return (
    <div >
      <main className="relative h-screen overflow-hidden bg-white dark:bg-gray-800">
        <header className="z-30 flex items-center w-full h-24 sm:h-32">
          <div className="container flex items-center justify-between px-6 mx-auto">
            <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
              trans.loom
            </div>
            <div className="flex items-center">
              <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                {
                    Navlist.map((item, index) => (
                        <a
                            key={index}
                            href={item.path}
                            className={`${
                                pathname === item.path
                                ? "border-b-2 border-gray-800 dark:border-white text-gray-800 dark:text-white"
                                : "text-white"
                            } px-4 py-2 mx-2`}
                        >
                            {item.name}
                        </a>
                    ))
                }
              </nav>
              <button className="flex flex-col ml-4 lg:hidden">
                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
              </button>
            </div>
          </div>
        </header>
        <div className="flex items-center bg-gray-800">
          <div className="container relative flex px-6 py-16 mx-auto">
            <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
              <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
              <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                Just
                <span className="text-4xl sm:text-7xl">Say it</span>
              </h1>
              <p className="text-sm text-gray-700 sm:text-base dark:text-white">
                Dimension of reality that makes change possible and
                understandable. An indefinite and homogeneous environment in
                which natural events and human existence take place.
              </p>
              <div className="flex mt-8 mb-8 ">
                <a
                  href="#"
                  className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="relative z-50 hidden sm:block sm:w-1/3 lg:w-3/5">
              <Image src={image} alt="**" className=" max-w-xs m-auto md:max-w-sm" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandinPage;
