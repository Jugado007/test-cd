import React, { useState } from "react";
import clipboard from "copy-to-clipboard";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import { Bold_case } from "@/Components/Json/Bold_case";
import { transform, getFonts } from "convert-unicode-fonts";
import Textarea from "../Textarea/Textarea";

const Boldcase = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (text === "") {
      const fonts = getFonts();
      const boldText = transform(
        "Type or paste your content here",
        fonts["bold"]
      );
      clipboard(boldText);
    } else {
      const fonts = getFonts();
      const boldText = transform(text, fonts["bold"]);
      clipboard(boldText);
    }
  };

  const onClickDownload = () => {
    if (text === "") {
      const fonts = getFonts();
      const boldText = transform(
        "Type or paste your content here",
        fonts["bold"]
      );
      const element = document.createElement("a");
      const file = new Blob([boldText], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      document.body.appendChild(element);
      element.click();
    } else {
      const fonts = getFonts();
      const boldText = transform(text, fonts["bold"]);
      const element = document.createElement("a");
      const file = new Blob([boldText], {
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
                Bold Text Generator
              </h1>
              <p className="text-sm font-normal">
                Use this handy bold text generator. Simply paste or write the
                text that you need to be converted into a bold font into the
                left field, then as you write it, you will see it being
                converted into bold into the field on the right. Then simply
                copy it from the bold text converter and paste it where you want
                it to go.
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
              {Bold_case.map((data, i) => {
                return (
                  <div key={i} className="card p-[15px] mb-[15px] bg-white border rounded-lg">
                    <h3 className="text-[15px] font-bold mb-[10px] text-[#e27235]">
                      {data.title}
                    </h3>
                    <p className="text-sm mb-[10px]">{data.sentence}</p>
                    <p className="text-sm mb-[10px]">{data.subtitle}</p>
                    <p className="text-sm mb-[10px]">{data.text}</p>
                    <p className="text-sm mb-[10px]">{data.textdata}</p>
                    <p className="text-sm mb-[10px]">{data.mtext}</p>
                    <p className="text-sm mb-[10px] font-bold">{data.data}</p>
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

export default Boldcase;
