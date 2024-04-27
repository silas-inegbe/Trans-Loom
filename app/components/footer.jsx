import Link from "next/link";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="px-4 pt-10 pb-18 flex items-center lg:h-[25vh] bg-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col mb-5 items-center justify-between space-y-4 lg:flex-row lg:space-y-0">
        <div className="flex flex-col items-center space-x-0 space-y-4 lg:flex-row lg:space-x-14 lg:space-y-0">
          {/* Logo */}
          <div className="h-7 text-heading">
            <Link href="/app">
              <h3 className="uppercase text-white text-center text-2xl font-bold">
                trans.<span className="text-[#52796f]">loom</span>
              </h3>
            </Link>
          </div>

          <div className="flex flex-col text-white space-y-2 text-center text-sm font-medium lg:flex-row lg:space-x-6 lg:space-y-0 lg:text-left">
            <span>Copyright &copy; {year}</span>
            <a href="/contact" className=" text-text hover:text-heading">
              Contact Us
            </a>
            <a href="#" className=" text-text hover:text-heading">
              Terms of Service
            </a>
            <a href="#" className=" text-text hover:text-heading">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="flex space-x-4 lg:mx-3">
          <a 
          target="_blank"
          href="https://www.linkedin.com/in/silas-inegbe">
            
            {/* linkedin X svg */}
            <FaLinkedin className="text-white text-2xl hover:text-[#52796f]" />
          </a>
          <a 
          target="_blank"
          href="https://www.twitter.com/silaskings1">
            {/* twitter X svg */}
            <FaTwitter className="text-white text-2xl hover:text-[#52796f]" />
          </a>
         
        </div>
      </div>
    </footer>
  );
};
export default Footer;
