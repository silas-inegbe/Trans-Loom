import { FaSpinner } from "react-icons/fa";

FaSpinner
function LoadingComp() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <FaSpinner className="animate-spin text-6xl text-[#52796f]" /> */}
      <h3 className="uppercase animate-ping text-xl md:text-2xl lg:text-3xl">trans.<span className="text-[#52796f]">loom</span></h3>
    </div>
  );
}

export default LoadingComp;
