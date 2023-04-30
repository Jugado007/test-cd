import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-8 py-5 bg-white pt-14">
      <div className="flex items-center justify-between max-w-[1260px] m-auto">
        <div className="flex flex-wrap justify-between w-full px-4 gap-y-10">
          <div className="w-[280px]">
            <h1 className="xl:text-lg text-base uppercase font-semibold">
              Text Analysis Tools
            </h1>
            <div className="flex flex-col xl:gap-3 gap-2 xl:mt-6 mt-5">
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Small text Generator
              </Link>
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Strikethrough Text Generator
              </Link>
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Mirror Text Generator
              </Link>
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Bubble Text Generator
              </Link>
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Sentence case
              </Link>
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Capitalized Case
              </Link>
            </div>
          </div>
          <div className="w-[280px]">
            <h1 className="xl:text-lg text-base uppercase font-semibold">
              Text Generator Tools
            </h1>
            <div className="flex flex-col xl:gap-3 gap-2 xl:mt-6 mt-5">
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Morse Code Translator
              </Link>
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Title case Translator
              </Link>
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Italic Code Translator
              </Link>
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Bubble Text Generator
              </Link>
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Unicode Text Converter
              </Link>
            </div>
          </div>
          <div className="w-[280px]">
            <h1 className="xl:text-lg text-base uppercase font-semibold">
              Text Convertors Tools
            </h1>
            <div className="flex flex-col xl:gap-3 gap-2 xl:mt-6 mt-5">
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Repeat Text Generator
              </Link>
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Cursed Text Tool
              </Link>
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Facebook Font Generator
              </Link>
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                NATO Phonetic Alphabet Translator
              </Link>
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Online Notepad
              </Link>
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Online Text Tools
              </Link>
            </div>
          </div>
          <div className="w-[280px]">
            <h1 className="xl:text-lg text-base uppercase font-semibold">
              POLICY
            </h1>
            <div className="flex flex-col xl:gap-3 gap-2 xl:mt-6 mt-5">
              <Link
                href="/Policy/Policy"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/Useterms/Useterms"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Terms and Use
              </Link>
              <Link
                href="#"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                Sitemap
              </Link>
              <Link
                href="/About/About"
                className="text-[#878787] hover:underline xl:text-base text-sm"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[14px] sm:text-sm lg:text-base text-center mt-12 mb-3">
        Copyright ©2023 Small Convert Tools | Concept by | Bajrang
      </p>
    </div>
  );
};

export default Footer;
