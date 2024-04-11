import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My App",
  description: "My awesome app",
  lang: "en",
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  
};

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
