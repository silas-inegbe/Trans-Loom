import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "./context/usercontext";



const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "TransLoom",
  description: "Your top translation App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
        {children}
        </UserProvider>
        </body>
    </html>
  );
}
