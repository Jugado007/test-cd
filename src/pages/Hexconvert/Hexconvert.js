import React, { useState } from "react";
import Footer from "@/Components/Footer/Footer";
import clipboard from "copy-to-clipboard";
import toHex from "to-hex";
import { Hextodec } from "@/Components/Json/Hextodec";
import Textarea from "../Textarea/Textarea";
import Header from "@/Components/Header/Header";

const Hexconvert = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (text === "") {
      const data = toHex("Type or paste your content here");
      clipboard(data);
      alert(`!You have copied "${data}"`);
    } else {
      const data = toHex(text);
      clipboard(data);
      alert(`!You have copied "${data}"`);
    }
  };

  const onClickDownload = () => {
    if (text === "") {
      const data = toHex("Type or paste your content here");
      const element = document.createElement("a");
      const file = new Blob([data], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      document.body.appendChild(element);
      element.click();
    } else {
      const data = toHex(text);
      const element = document.createElement("a");
      const file = new Blob([data], {
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
                Hex to Text Converter
              </h1>
              <p className="text-sm font-normal">
                This online converter allows you to convert hexadecimal strings
                to text. Simply enter the hex string into the input field and
                see the result on the right.
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
              {Hextodec.map((data, i) => {
                return (
                  <div key={i} className="card p-[15px] mb-[15px] bg-white border rounded-lg">
                    <h3 className="text-[15px] font-bold mb-[10px]  text-[#e27235]">
                      {data.title}
                    </h3>
                    <p className="text-sm mb-[10px]">{data.sentence}</p>
                    <p className="text-sm mb-[10px]">{data.subtitle}</p>
                    <p className="text-sm mb-[10px]">{data.text}</p>
                    <p className="text-sm mb-[10px]">{data.covert}</p>
                    <p className="text-sm mb-[10px]">{data.check}</p>
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

export default Hexconvert;
