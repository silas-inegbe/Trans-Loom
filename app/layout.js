import { Inter } from "next/font/google";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });;

export const metadata = {
  title: "TransLoom",
  description: "Your top translation App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        {children}
        <ToastContainer />
        <Analytics/>
        </body>
    </html>
  );
}
