// import React from "react";
const PageNotFound = () => {
  return (
    <div className="md:pl-[70px] relative bg-black  h-screen w-full md:flex">
      <div className=" h-screen bg-black  flex flex-col justify-center items-center md:items-start lg:w-full px-2.5 md:px-0">
        <h3 className="text-[#F3F3F3] text-8xl md:text-[200px] font-[800px] font-poppins">
          404
        </h3>
        <h3 className="text-white text-3xl xl:text-[57px] font-semibold font-poppins whitespace-nowrap">
          Page Not Found
        </h3>
        <h3 className="text-[#F3F3F3] text-2xl  xl:text-[32px] font-[500px] font-poppins xl:w-[651px] mt-10 mb-[152px] text-center md:text-start">
          Sorry, we couldn’t find the page you ‘re looking for
        </h3>
        <div className="flex items-center bg-black ">
          <h3 className="text-[#581DFF] text-[32px] font-[500px] font-poppins w-[220px]">
            Back to home
          </h3>
          <svg
            className="pt-1"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.9375 26.375C8.625 26.0625 8.46875 25.6925 8.46875 25.265C8.46875 24.8383 8.625 24.4688 8.9375 24.1562L18.0938 15L8.90625 5.8125C8.61458 5.52083 8.46875 5.15625 8.46875 4.71875C8.46875 4.28125 8.625 3.90625 8.9375 3.59375C9.25 3.28125 9.62 3.125 10.0475 3.125C10.4742 3.125 10.8438 3.28125 11.1562 3.59375L21.6563 14.125C21.7813 14.25 21.87 14.3854 21.9225 14.5312C21.9742 14.6771 22 14.8333 22 15C22 15.1667 21.9742 15.3229 21.9225 15.4688C21.87 15.6146 21.7813 15.75 21.6563 15.875L11.125 26.4062C10.8333 26.6979 10.4742 26.8438 10.0475 26.8438C9.62 26.8438 9.25 26.6875 8.9375 26.375Z"
              fill="#581DFF"
            />
          </svg>
        </div>
      </div>
      <div className="relative right-0 h-screen hidden md:flex ">
        <img
          alt="Tailwind Icon"
          className="h-screen absolutec object-cover"
          src="/assets/components/404/errorRectangle.svg"
        />
      </div>
    </div>
  );
};
export default PageNotFound;
