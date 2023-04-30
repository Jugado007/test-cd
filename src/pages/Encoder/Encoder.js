import React, { useState } from "react";
import Footer from "@/Components/Footer/Footer";
import clipboard from "copy-to-clipboard";
import { Base64 } from "js-base64";
import { Encodetext } from "@/Components/Json/Encodetext";
import Textarea from "../Textarea/Textarea";
import Header from "@/Components/Header/Header";

const Encoder = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleCopyText = () => {
    if (text === "") {
      const data = Base64.encode("Type or paste your content here");
      clipboard(data);
      alert(`!You have copied "${data}"`);
    } else {
      const data = Base64.encode(text);
      clipboard(data);
      alert(`!You have copied "${data}"`);
    }
  };

  const onClickDownload = () => {
    if (text === "") {
      const data = Base64.encode("Type or paste your content here");
      const element = document.createElement("a");
      const file = new Blob([data], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      document.body.appendChild(element);
      element.click();
    } else {
      const data = Base64.encode(text);
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
              <h1 className="text-[16px] sm:text-[22px] md:text-2xl  text-[#e27235] font-bold mb-[10px]">
                UTF8 Encoder/Decoder
              </h1>
              <p className="text-sm font-normal">
                A simple online UTF8 encoder and decoder, for developers and
                programmers. Simply copy and paste your text in the form field
                below and see the UTF-8 data on the right.
              </p>
            </div>
            <div className="h-[98px]"></div>
            <Textarea
              setCount={setCount}
              setText={setText}
              count={count}
              text={text}
              onClickCopy={handleCopyText}
              onClickDownload={onClickDownload}
            />
            <div className="flex items-center my-[20px] min-h-[250px]">
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="w-full lg:w-[900px] mt-[15px] m-auto">
            <div>
              {Encodetext.map((data, i) => {
                return (
                  <div key={i} className="card p-[15px] mb-[15px] bg-white border rounded-lg">
                    <h3 className="text-[15px] font-bold mb-[10px]  text-[#e27235]">
                      {data.title}
                    </h3>
                    <p className="text-sm mb-[10px]">{data.sentence}</p>
                    <p className="text-sm mb-[10px]">{data.subtitle}</p>
                    <p className="text-sm mb-[10px]">{data.text}</p>
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

export default Encoder;
