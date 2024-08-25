import "./globals.css";
import SparklesIcon from "@/components/SparklesIcon";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-gradient-to-b from-[#191970] to-[#15162c] min-h-screen text-white"
        }
      >
        <main className="p-4 max-w-2xl mx-auto">
          <header className="flex justify-between my-2 sm:my-8">
            <Link href="/" className="flex gap-1">
              <Image
                alt="header text"
                src="/logo.png"
                className="sm:w-14 sm:h-14 w-9 h-9"
                width={36}
                height={36}
              />
              <h1 className="sm:text-3xl text-3xl font-bold ml-2 mt-2 tracking-tight text-white hover:text-white/50">
                CaptionFlow
              </h1>
            </Link>
            <nav className="flex items-center gap-2 sm:gap-6 text-white/80 text-sm sm:text-bas">
              <div className="flex space-x-2 items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Login
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Signup
                </button>
              </div>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
