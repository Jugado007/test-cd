import React, { useState } from "react";
import clipboard from "copy-to-clipboard";
import Footer from "@/Components/Footer/Footer";
import Textarea from "../Textarea/Textarea";
import { sentencetext } from "@/Components/Json/sentencetext";
import Header from "@/Components/Header/Header";

const sentencecase = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (text === "") {
      const data = "Type or paste your content here";
      const splittest =
        data.charAt(0).toUpperCase() + data.substring(1).toLowerCase();

      clipboard(splittest);
      alert(`!You have copied "${splittest}"`);
    } else {
      const splittest =
        text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
      clipboard(splittest);
      alert(`!You have copied "${splittest}"`);
    }
  };

  const onClickDownload = () => {
    if (text === "") {
      const data = "Type or paste your content here";
      const splittest =
        data.charAt(0).toUpperCase() + data.substring(1).toLowerCase();

      const element = document.createElement("a");
      const file = new Blob([splittest], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      document.body.appendChild(element);
      element.click();
    } else {
      const splittest =
        text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
      const element = document.createElement("a");
      const file = new Blob([splittest], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      element.click();
    }
  };

  return (
    <>
      <div>
        <Header />
        <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>

        <div className="mainbg max-w-[1260px] m-auto px-[15px] py-[10px]">
          <div className="">
            <div>
              <h1 className="text-[16px] sm:text-[22px] md:text-2xl font-bold mb-[10px]  text-[#e27235]">
                Sentence Case Converter
              </h1>
              <p className="text-sm font-normal">
                An easy to use title capitalization tool. Convert your standard
                text into title text with this online title capitalizer. Simply
                enter your standard text into the title case converter on the
                left and see it automatically get generated on the right.
              </p>
            </div>
            <div className="h-[98px]"></div>
            <Textarea
              setCount={setCount}
              setText={setText}
              text={text}
              count={count}
              onClickCopy={handleClick}
              onClickDownload={onClickDownload}
            />
            <div className="flex items-center my-[20px] min-h-[250px]">
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="w-full lg:w-[900px] mt-[15px] m-auto">
            <div>
              {sentencetext.map((data, i) => {
                return (
                  <div key={i} className="card p-[15px] mb-[15px] bg-white border rounded-lg">
                    <h3 className="text-[15px] font-bold mb-[10px]  text-[#e27235]">
                      {data.title}
                    </h3>
                    <p className="text-sm mb-[10px]">{data.sentence}</p>
                    <p className="text-sm mb-[10px]">{data.subtitle}</p>
                    <p className="text-sm mb-[10px]">{data.text}</p>
                    <p className="text-sm mb-[10px]">{data.textdata}</p>
                    <p className="text-sm mb-[10px]">{data.simple}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default sentencecase;
