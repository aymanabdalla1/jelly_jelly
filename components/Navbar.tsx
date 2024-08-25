import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 border-stone-400 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-2 items-center">
        <Image
          alt="header text"
          src="/logo.png"
          className="sm:w-14 sm:h-14 w-9 h-9"
          width={36}
          height={36}
        />
        <h1 className="sm:text-5xl text-3xl font-bold ml-2 tracking-tight text-white hover:text-white/50">
          CaptionFlow
        </h1>
      </Link>
      <div className="flex space-x-2 items-center">

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Signup
        </button>
      </div>
    </header>
  );
}
