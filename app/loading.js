import { FaSpinner } from "react-icons/fa";

FaSpinner
function LoadingComp() {
  return (
    <div className="flex items-center justify-center h-screen">
      <FaSpinner className="animate-spin text-5xl text-purple-900" />
    </div>
  );
}

export default LoadingComp;
