import Image from "next/image";
import LandinPage from './components/landing'
import HowItWorks from "./components/middle";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className=" flex flex-col  bg-gray-800 ">
    <LandinPage/>
    <HowItWorks/>
    <Footer/>
    </div>
  );
}
