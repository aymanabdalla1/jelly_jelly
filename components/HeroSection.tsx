import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function HeroSection() {
  const [buttonText, setButtonText] = useState("Copy");

  const copyToClipboard = (caption: string) => {
    navigator.clipboard.writeText(caption!);

    setButtonText("Copied!"); // set the button text to "Copied!" when text is copied
    setTimeout(() => {
      setButtonText("Copy"); // set the button text back to "Copy" after 2 seconds
    }, 2000);
  };

  return (
    <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-7xl text-white">
        Easily add captions to your videos
        <span className="relative whitespace-nowrap text-[#7DF9FF]">
          <span className="relative"> using AI.</span>
        </span>
      </h1>
      <p className="mx-auto mt-4 md:mt-12 max-w-xl text-lg text-stone-400 leading-7">
        Take your videos to the next level with custom captions.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          className="bg-[#1F51FF] rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-4 hover:bg-[#4b4cb7]/80"
          href="/caption"
        >
          Create a caption
        </Link>
      </div>

      <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6 text-white">
        <div className="flex flex-col space-y-10 mt-4 mb-16">
          <div className="flex sm:space-x-10 sm:flex-row flex-col">
            <div className="w-full md:w-1/2">
              <h2 className="mb-1 font-medium text-lg">Original Video</h2>
              <video height="452" width="768" controls>
                <source src="https://upcdn.io/kW15cCW/raw/mr_beast.mp4" />
                Your browser does not support the video tag...
              </video>
            </div>

            <div className="sm:mt-0 mt-8 w-full md:w-1/2">
              <h2 className="mb-1 font-medium text-lg">Generated Video</h2>
              <video height="452" width="768" controls>
                <source src="https://upcdn.io/kW15cCW/raw/generated.mp4" />
                Your browser does not support the video tag...
              </video>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
