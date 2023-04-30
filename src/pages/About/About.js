import React from "react";
import Header from "@/Components/Header/Header";
import Link from "next/link";

const About = () => {
  
  return (
    <>
      <Header />
      <div>
        <div className="max-w-[1260px] m-auto bg-[#ffede461]  pb-5 px-[15px]">
          <h1 className="text-3xl my-5 font-bold">About</h1>
          <p className="text-sm">
            Convert Case is designed to be a free to use online text manipulator
            that you can use for efficiency and productivity gains (and in some
            cases just a bit of fun as well). Whether you have mistakenly
            written all your text in capital or you want to quickly align the
            correct capitalisation structure for titles. Convert Case allows you
            to quickly fix any errors as well as produce an array of outcomes
            from the tools above.
          </p>
          <p className="text-sm">
            There are also a range of converters to explore as well such as the
            binary code and morse code translators that will allow you to write
            up standard text and have it translated into the necessary code.
          </p>
          <p className="text-sm">
            You can also use the text manipulators to allow your text to stand
            out. Whether that’s for social media purposes or you want to bring
            some attention to an advertisement, these tools are a great solution
            for fixing those issues too.
          </p>
          <div className="my-5">
            <Link href="/Outlinetext/Outlinetext" className="underline">
              Explore the full set of tools
            </Link>
          </div>
          <p className="text-sm">
            Of course, if you have any suggestions over new tools that should be
            added and created that could help benefit, then by all means, please
            get in touch with us and we will be more than happy to help you.
          </p>
          <div className="mt-[20px]">
            <Link
              href="/Convertext/Converttext"
              className="bg-[#ff5f37] text-white py-[10px] px-[30px] text-lg rounded-lg"
            >
              Return To conver case
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
