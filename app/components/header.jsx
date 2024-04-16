import { usePathname } from "next/navigation";
import { useState } from "react";
// import { useLocation } from "react-router-dom";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const Navlist = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "App",
      path: "/app",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Career",
      path: "/career",
    },
  ];

  return (
    // make the header sticky

    <div className="sticky z-50 ">
      {/* gradient purple bg */}
      {/* <div className="h-1 bg-gradient-to-r from-purple-700 via-pink-800 to-red-700"></div> */}
      <nav className="bg-white dark:bg-gray-700 shadow fixed w-full ">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="w-full justify-between flex items-center">
              <a className="flex-shrink-0" href="/">
                <img
                  className="w-8 h-8"
                  src="/icons/rocket.svg"
                  alt="Workflow"
                />
              </a>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4 ">
                  {Navlist.map((item, index) => (
                    <a href={item.path} 
                    key={index}
                    className={`text-white p-1 text-lg ${
                        pathname === item.path
                        ? " border-b font-bold"
                        : " border-b-0"
                    }`}  
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="block">
              <div className="flex items-center ml-4 md:ml-6"></div>
            </div>
            <div className="flex -mr-2 md:hidden" onClick={toggleMenu}>
              <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            toggle
              ? "block transition-transform transform -translate-x-0"
              : "hidden transition-transform transform -translate-x-full"
          }
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 z-[999] ">
            {
                Navlist.map((item, index) => (
                    <a
                    className={` hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base  ${
                        pathname === item.path
                        ? "text-white font-bold"
                        : " text-gray-300 font-medium"
                    }`}
                    href={item.path}
                    key={index}
                  >
                    {item.name}
                  </a>
                ))
            }

            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
