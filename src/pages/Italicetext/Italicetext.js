import React, { useState } from "react";
import Footer from "@/Components/Footer/Footer";
import { Italic_case } from "@/Components/Json/Italic_case";
import clipboard from "copy-to-clipboard";
import { transform, getFonts } from "convert-unicode-fonts";
import Textarea from "../Textarea/Textarea";
import Header from "@/Components/Header/Header";

const Italicetext = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (text === "") {
      const fonts = getFonts();
      const italicText = transform(
        "Type or paste your content here",
        fonts["italic"]
      );
      clipboard(italicText);
      alert(`!You have copied "${italicText}"`);
    } else {
      const fonts = getFonts();
      const italicText = transform(text, fonts["italic"]);
      clipboard(italicText);
      alert(`!You have copied "${italicText}"`);
    }
  };

  const onClickDownload = () => {
    if (text === "") {
      const fonts = getFonts();
      const italicText = transform(
        "Type or Paste Your Content Here",
        fonts["italic"]
      );
      const element = document.createElement("a");
      const file = new Blob([italicText], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      document.body.appendChild(element);
      element.click();
    } else {
      const fonts = getFonts();
      const italicText = transform(text, fonts["italic"]);
      const element = document.createElement("a");
      const file = new Blob([italicText], {
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
                Italic Text Generator
              </h1>
              <p className="text-sm font-normal">
                Do you want to convert your text into an italic font? Then use
                this simple and free online italic text generator. All you have
                to do is write the words that you want to be converted into
                italics in the left hand field of the italicized generator, then
                as you write it out, you’re going to see the font get converted
                into italic text on the right. Once you are done, simply copy
                the italic text and paste it where you want.
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
              {Italic_case.map((data, i) => {
                return (
                  <div key={i} className="card p-[15px] mb-[15px] bg-white border rounded-lg">
                    <h3 className="text-[15px] font-bold mb-[10px]  text-[#e27235]">
                      {data.title}
                    </h3>
                    <p className="text-sm mb-[10px]">{data.sentence}</p>
                    <p className="text-sm mb-[10px]">{data.subtitle}</p>
                    <p className="text-sm mb-[10px]">{data.text}</p>
                    <p className="text-sm mb-[10px]">{data.textdata}</p>
                    <p className="text-sm mb-[10px]">{data.mtext}</p>
                    <p className="text-sm mb-[10px] font-normal italic">
                      {data.data}
                    </p>
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

export default Italicetext;
