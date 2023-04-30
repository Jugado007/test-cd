import React, { useState } from "react";
import clipboard from "copy-to-clipboard";
import wideText from "wide-text";
import Footer from "@/Components/Footer/Footer";
import { Widesmall } from "@/Components/Json/Widesmall";
import Textarea from "../Textarea/Textarea";
import Header from "@/Components/Header/Header";

const Widetext = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleClickCopy = () => {
    if (text === "") {
      clipboard(
        wideText("T y p e  o r  P a s t e  Y o u r  C o n t e n t  H e r e")
      );
      alert(`!You have copied`);
    } else {
      clipboard(wideText(text));
      alert(`!You have copied "${wideText(text)}"`);
    }
  };

  const onClickDownload = () => {
    if (text === "") {
      const data = "T y p e  o r  P a s t e  Y o u r  C o n t e n t  H e r e";
      const element = document.createElement("a");
      const file = new Blob([wideText(data)], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      document.body.appendChild(element);
      element.click();
    } else {
      const element = document.createElement("a");
      const file = new Blob([wideText(text)], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      document.body.appendChild(element);
      element.click();
    }
  };

  return (
    <div>
      <Header />
      <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
      <div className="mainbg max-w-[1260px] m-auto px-[15px] py-[10px]">
        <div className="">
          <div>
            <h1 className="text-[16px] sm:text-[22px] md:text-2xl font-bold mb-[10px]  text-[#e27235]">
              Wide Text Generator
            </h1>
            <p className="text-sm font-normal">
              A simple to use online vaporwave text generator tool that widens
              and spaces out your text. It basically converts your normal text
              into a vaporwave font, you will see that it is also referred to as
              an aesthetic font. Essentially you will have your standard font
              widened via this wide text generator.
            </p>
          </div>
          <div className="h-[98px]"></div>
          <Textarea
            setCount={setCount}
            setText={setText}
            text={text}
            count={count}
            onClickCopy={handleClickCopy}
            onClickDownload={onClickDownload}
          />
          <div className="flex items-center my-[20px] min-h-[250px]">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="w-full lg:w-[900px] mt-[15px] m-auto">
          <div>
            {Widesmall.map((data, i) => {
              return (
                <div key={i} className="card p-[15px] mb-[15px] bg-white border rounded-lg">
                  <h3 className="text-[15px] font-bold mb-[10px]  text-[#e27235]">
                    {data.title}
                  </h3>
                  <p className="text-sm mb-[10px]">{data.sentence}</p>
                  <p className="text-sm mb-[10px]">{data.subtitle}</p>
                  <p className="text-sm mb-[10px]">{data.text}</p>
                  <p className="text-sm mb-[10px]">{data.textdata}</p>
                  <p className="text-sm mb-[10px]">{data.data}</p>
                  <p className="text-sm mb-[10px]">{data.moredata}</p>
                  <p className="tracking-[6px] font-normal">{data.space}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Widetext;
