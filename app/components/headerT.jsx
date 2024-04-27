"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { supabase } from "../lib/helper/supabaseClient";
import { ToastContainer, toast } from "react-toastify";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const Navlist = [
    {
      name: "Translator",
      path: "/app",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      router.replace("/");
    }
  };
  return (
    // make the header sticky

    <div className="sticky z-50">
      {/* gradient purple bg */}
      {/* <div className="h-1 bg-gradient-to-r from-purple-700 via-pink-800 to-red-700"></div> */}
      <nav className="bg-gray-800 shadow fixed w-full h-20 ">
        <div className="px-3 md:px-5 w-full h-full flex items-center justify-between">
          <div className="flex items-center w-full m-0 justify-between">
            <div className="w-full justify-between flex items-center">
              <Link href="/app">
                <h3 className="uppercase text-white text-center text-2xl font-bold">
                  trans.<span className="text-[#52796f]">loom</span>
                </h3>
              </Link>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 gap-8 ">
                  {Navlist.map((item, index) => (
                    <Link
                      href={item.path}
                      key={index}
                      className={`text-white p-1 font-medium uppercase  ${
                        pathname === item.path
                          ? " border-b font-bold border-[#52796f]"
                          : " border-b-0"
                      } ${
                        item.name === "Translator"
                          ? "bg-[#52796f] text-white rounded-md px-2 py-1"
                          : " "
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <button 
                  onClick={logout}
                  className="border-[#52796f] bg-transparent px-4 py-1 text-white font-semibold border-2 rounded-md">
                    Logout
                  </button>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="flex items-center ml-4 md:ml-6 "></div>
            </div>
            {/* button */}
            <div className="flex -mr-2 md:hidden">
              <IoMenuOutline
                className={`lg:hidden ${
                  toggle ? "hidden" : "block"
                } text-4xl text-[#52796f] hover:cursor-pointer`}
                onClick={toggleMenu}
              />
              <IoClose
                className={`${
                  toggle ? "block" : "hidden"
                } text-4xl text-[#52796f] hover:cursor-pointer`}
                onClick={toggleMenu}
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            toggle ? "opacity-100 z-50 absolute" : "opacity-0 z-0 hidden"
          } transition-all duration-500 ease-in-out 
           top-20 w-full h-[22vh] pb-5 flex items-center justify-evenly bg-gray-800`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 z-[999] ">
            {Navlist.map((item, index) => (
              <Link
                className={` block px-3 py-2 rounded-md text-base  ${
                  pathname === item.path
                    ? "text-white font-bold text-center"
                    : " text-gray-300 font-medium"
                } ${
                  item.name === "Translator"
                    ? "bg-[#52796f] text-white rounded-md px-2 py-1"
                    : " "
                } ${toggle ? "block" : "hidden"}`}
                href={item.path}
                key={index}
              >
                {item.name}
              </Link>
            ))}
            <button 
            onClick={logout}
            className={`border-[#52796f] bg-transparent px-4 py-1 text-white font-semibold border-2 rounded-md
            ${toggle ? "block" : "hidden"}`}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
