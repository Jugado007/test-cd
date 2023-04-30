import React, { useState } from "react";
import clipboard from "copy-to-clipboard";
import Footer from "@/Components/Footer/Footer";
import { Striketext } from "@/Components/Json/Striketext";
import Textarea from "../Textarea/Textarea";
import Header from "@/Components/Header/Header";

const Strikethrough = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const StrikethroughText = (text) => {
    const StrikethroughedText = text
      .split("")
      .map((char) => char + "\u0336")
      .join("");
    return StrikethroughedText;
  };

  const handleClickCopy = () => {
    if (text === "") {
      clipboard(StrikethroughText("Type or paste your content here"));
      alert(`!You have copied `);
    } else {
      clipboard(StrikethroughText(text));
      alert(`!You have copied "${text}"`);
    }
  };

  const onClickDownload = () => {
    if (text === "") {
      const element = document.createElement("a");
      const file = new Blob(
        [StrikethroughText("Type or paste your content here")],
        {
          type: "text/plain;charset=utf-8",
        }
      );
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      document.body.appendChild(element);
      element.click();
    } else {
      const element = document.createElement("a");
      const file = new Blob([StrikethroughText(text)], {
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
                Strikethrough Text Generator
              </h1>
              <p className="text-sm font-normal">
                Simple and easy to use strikethrough text generator. Convert
                standard text into crossed out text with this online strike text
                generator. Type normal text on the left and have the content
                come out with crossed out font through the strikeout generator.
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
            <div className="flex-col md:flex-row flex gap-2">
              <div className="w-[50%]">
                <div className="flex items-center mb-[10px]]">
                  <p className="text-sm text-[#111111] font-normal mr-[3px]">
                    Character Count:<span>0</span>
                  </p>
                  <p className="text-sm text-[#111111] font-normal mr-[3px]">
                    | Word Count:<span>0</span>
                  </p>
                  <p className="text-sm text-[#111111] font-normal">
                    | Line Count:<span>0</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center my-[20px] min-h-[250px]">
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="w-full lg:w-[900px] mt-[15px] m-auto">
            <div>
              {Striketext.map((data, i) => {
                return (
                  <div key={i} className="card p-[15px] mb-[15px] bg-white border rounded-lg">
                    <h3 className="text-[15px] font-bold mb-[10px]  text-[#e27235]">
                      {data.title}
                    </h3>
                    <p className="text-sm mb-[10px]">{data.sentence}</p>
                    <div className="my-[14px] pl-[40px]">
                      <h6 className="flex">
                        <span className="mr-[4px]">{data.no}</span>
                        <p className="text-sm font-normal">{data.use}</p>
                      </h6>
                      <h6 className="flex mt-[-4px]">
                        <span className="mr-[4px]">{data.no1}</span>
                        <p className="text-sm font-normal">{data.use1}</p>
                      </h6>
                      <h6 className="flex mt-[-4px]">
                        <span className="mr-[4px]">{data.no2}</span>
                        <p className="text-sm font-normal">{data.use2}</p>
                      </h6>
                      <h6 className="flex mt-[-4px]">
                        <span className="mr-[4px]">{data.no3}</span>
                        <p className="text-sm font-normal">{data.use3}</p>
                      </h6>
                    </div>
                    <p className="text-sm mb-[10px]">{data.subtitle}</p>
                    <p className="text-sm mb-[10px]">{data.text}</p>
                    <p className="text-sm mb-[10px]">{data.textdata}</p>
                    <p className="text-sm mb-[10px]">{data.data}</p>
                    <p className="text-xs line-through">{data.through}</p>
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

export default Strikethrough;
