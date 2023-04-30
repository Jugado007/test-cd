import React, { useState } from "react";
import clipboard from "copy-to-clipboard";
import { transform, getFonts } from "convert-unicode-fonts";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import { Bubbletext } from "@/Components/Json/Bubbletext";
import Textarea from "../Textarea/Textarea";

const Buubletext = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (text === "") {
      const fonts = getFonts();
      const typeData = transform(
        "Type or paste your content here",
        fonts["circled"]
      );
      const typeDataNagetive = transform(
        "Type or paste your content here",
        fonts["negativeCircledCapital"]
      );
      clipboard(`${typeData}${typeDataNagetive}`);
      alert(`!You have copied`);
    } else {
      const fonts = getFonts();
      const typeData = transform(text, fonts["circled"]);
      const typeDataNagetive = transform(text, fonts["negativeCircledCapital"]);
      clipboard(`${typeData}${typeDataNagetive}`);
      alert(`!You have copied`);
    }
  };

  const onClickDownload = () => {
    if (text === "") {
      const fonts = getFonts();
      const typeData = transform(
        "Type or paste your content here",
        fonts["circled"]
      );
      const typeDataNagetive = transform(
        "Type or paste your content here",
        fonts["negativeCircledCapital"]
      );
      const element = document.createElement("a");
      const file = new Blob([`${typeData}${typeDataNagetive}`], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      document.body.appendChild(element);
      element.click();
    } else {
      const fonts = getFonts();
      const typeData = transform(text, fonts["circled"]);
      const typeDataNagetive = transform(text, fonts["negativeCircledCapital"]);
      const element = document.createElement("a");
      const file = new Blob([`${typeData}${typeDataNagetive}`], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      document.body.appendChild(element);
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
              <h1 className="text-[16px] sm:text-[22px] md:text-2xl font-bold mb-[10px] text-[#e27235]">
                Bubble Text Generator
              </h1>
              <p className="text-sm font-normal">
                Do you want a quick online tool that transforms your normal text
                into a bubble format? Simply write out the normal text in the
                left panel and see it get converted into the bubble font.
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
              {Bubbletext.map((data, i) => {
                return (
                  <div key={i} className="card p-[15px] mb-[15px] bg-white border rounded-lg">
                    <h3 className="text-[15px] font-bold mb-[10px]  text-[#e27235]">
                      {data.title}
                    </h3>
                    <p className="text-sm mb-[10px]">{data.sentence}</p>
                    <p className="text-sm mb-[10px]">{data.subtitle}</p>
                    <p className="text-sm mb-[10px]">{data.text}</p>
                    <p className="text-sm mb-[10px]">{data.simple}</p>
                    <p className="text-sm mb-[10px]">{data.textdata}</p>
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

export default Buubletext;
