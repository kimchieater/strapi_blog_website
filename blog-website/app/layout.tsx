import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./component/nav/page";
import Footer from "./component/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Codes",
  description: "Personal Journal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-700 text-stone-300">
      <body className={inter.className}>
        <div className="container p-5 h-screen flex flex-col justify-between">
        <Nav></Nav>
        {children}
        <Footer></Footer>
        </div>
        </body>
    </html>
  );
}
