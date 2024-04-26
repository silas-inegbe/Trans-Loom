import Image from "next/image";
import LandinPage from './components/landing'
import HowItWorks from "./components/middle";
import Footer from "./components/footer";
import AuthCheck2 from "./components/authCheck2";


export default function Home() {
  return (
    <AuthCheck2>
      <div className=" flex flex-col  bg-gray-800 ">
        <LandinPage />
        <HowItWorks />
        <Footer />
      </div>
    </AuthCheck2>
  );
}
