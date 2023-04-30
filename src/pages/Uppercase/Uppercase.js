import React, { useState } from "react";
import clipboard from "copy-to-clipboard";
import Footer from "@/Components/Footer/Footer";
import Textarea from "../Textarea/Textarea";
import Header from "@/Components/Header/Header";
import { Uppercase } from "@/Components/Json/uppercase";

const Mirrortext = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (text === "") {
      clipboard("Type or Paste Your Content Here".toUpperCase());
      alert(`!You have copied`);
    } else {
      clipboard(text.toUpperCase());
      alert(`!You have copied`);
    }
  };

  const onClickDownload = () => {
    if (text === "") {
      const data = "Type or Paste Your Content Here".toUpperCase();
      const element = document.createElement("a");
      const file = new Blob([data], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      document.body.appendChild(element);
      element.click();
    } else {
      const element = document.createElement("a");
      const file = new Blob([text.toUpperCase()], {
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
              <h1 className="text-[16px] sm:text-[22px] md:text-2xl font-bold  text-[#420075] mb-[10px]">
                Uppercase Text Generator
              </h1>
              <p className="text-sm font-normal">
                Use this Uppered text generator as a quick and easy way of
                changing standard text into the Uppered version. Simply type the
                normal and regular text in the left hand panel and see it get
                converted to the Uppered text on the right hand side.
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
              {Uppercase.map((data, i) => {
                return (
                  <div key={i} className="card p-[15px] mb-[15px] bg-white border rounded-lg">
                    <h3 className="text-[15px] font-bold mb-[10px]  text-[#420075]">
                      {data.title}
                    </h3>
                    <p className="text-sm mb-[10px]">{data.sentence}</p>
                    <p className="text-sm mb-[10px]">{data.subtitle}</p>
                    <p className="text-sm mb-[10px]">{data.text}</p>
                    <p className="text-sm mb-[10px] scale-x-[-1] text-end">
                      {data.data}
                    </p>
                    <p className="text-sm mb-[10px]">{data.textdata}</p>
                    <p className="text-sm mb-[10px]">{data.simple}</p>
                    <p className="text-sm mb-[10px]">{data.undlne}</p>
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

export default Mirrortext;
