import React, { useState } from "react";
import clipboard from "copy-to-clipboard";
import reactStringReplace from "react-string-replace";
import kofi from "../../Assets/Images/kofi.png";
import Image from "next/image";
import Footer from "@/Components/Footer/Footer";
import { Replacetext } from "@/Components/Json/Replacetext";
import Link from "next/link";
import Header from "@/Components/Header/Header";

const Textreplace = () => {
  const [text, setText] = useState("");
  const [replace, setReplace] = useState("");
  const [findText, setFindText] = useState("");
  const [count, setCount] = useState(0);

  const handleReplace = () => {
    if (text === "") {
      const datas = "Type or paste your content here";
      reactStringReplace(datas, findText, (match, i) => {
        const splite = datas.split(" ");
        const data = splite.map((val) => {
          if (val === match) {
            return replace;
          }
          return val;
        });
        setText(data.join(" "));
      });
    } else {
      reactStringReplace(text, findText, (match, i) => {
        const splite = text.split(" ");
        const data = splite.map((val) => {
          if (val === match) {
            return replace;
          }
          return val;
        });
        setText(data.join(" "));
      });
    }
  };

  const handleClick = () => {
    if (text === "") {
      const data = "Type or paste your content here";
      clipboard(data);
      alert(`!You have copied "${data}"`);
    } else {
      clipboard(text);
      alert(`!You have copied "${text}"`);
    }
  };

  const onClickDownload = () => {
    if (text === "") {
      const data = "Type or paste your content here";
      const element = document.createElement("a");
      const file = new Blob([data], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      document.body.appendChild(element);
      element.click();
    } else {
      const data = text;
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
                Text Replacer
              </h1>
              <p className="text-sm font-normal">
                Use this tool to find text and replace text. Simply post the
                text you want to look through, and then select the word you're
                looking for and it will highlight the text.
              </p>
            </div>
            <div className="h-[98px]"></div>
            <div className="">
              <div className="flex flex-col md:flex-row items-start md:items-center mb-[10px]">
                <div className="flex items-center mr-[5px]">
                  <p className="mr-[5px] text-[#111111] text-sm font-normal">
                    Find:
                  </p>
                  <input
                    type="text"
                    className="w-28 focus:outline-0 border border-black"
                    onChange={(e) => setFindText(e.target.value)}
                  />
                </div>
                <div className="flex items-center mr-[5px] mt-[10px] md:mt-0">
                  <p className="mr-[5px] text-[#111111] text-sm font-normal">
                    Replace:
                  </p>
                  <input
                    type="text"
                    className="w-28 focus:outline-0 border border-black text-sm px-2"
                    onChange={(e) => setReplace(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleReplace}
                  className="bg-[#e36843]  mt-[10px] md:mt-0 text-white text-sm font-bold py-[3px] px-[10px]"
                >
                  Replace Text
                </button>
              </div>
              <textarea
                id="w3review"
                value={text}
                name="w3review"
                placeholder="Type or paste your content here"
                className="text-sm p-[10px] w-full min-h-[24vh] h-[190px] focus:outline-0"
                onChange={(e) => {
                  setText(e.target.value), setCount(e.target.value.length);
                }}
              ></textarea>
              <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-[10px]]">
                  <p className="text-sm text-[#111111] font-normal mr-[3px]">
                    Character Count:<span>{count}</span>
                  </p>
                  <p className="text-sm text-[#111111] font-normal mr-[3px]">
                    | Word Count:
                    <span>{text ? text.split(" ").length : 0}</span>
                  </p>
                  <p className="text-sm text-[#111111] font-normal">
                    | Line Count:
                    <span>{text ? text.split(/\r|\r\n|\n/).length : 0}</span>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 mt-[10px]">
                  <button
                    onClick={onClickDownload}
                    className="border  px-[5px] py-[5px] text-sm font-bold text-white font-trebuchet bg-[#e27235] transition-all  text-start"
                  >
                    Download Text
                  </button>
                  <button
                    onClick={handleClick}
                    className="border  px-[5px] py-[5px] text-sm font-bold text-white font-trebuchet bg-[#e27235] transition-all  text-start"
                  >
                    Copy to Clipboard
                  </button>
                  {/* <button className="flex items-center btnlogin text-white py-[5px] px-2 text-sm font-bold">
                    <Image alt="" src={kofi} className="h-4 w-auto mr-1"></Image> Buy
                    me a Coffee
                  </button> */}
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
              {Replacetext.map((data, i) => {
                return (
                  <div key={i} className="card p-[15px] mb-[15px] bg-white border rounded-lg">
                    <h3 className="text-[15px] font-bold mb-[10px]  text-[#e27235]">
                      {data.title}
                    </h3>
                    <p className="text-sm mb-[10px]">{data.sentence}</p>
                    <p className="text-sm mb-[10px]">{data.subtitle}</p>
                    <p className="text-sm mb-[10px]">{data.text}</p>
                    <p className="text-sm mb-[10px]">{data.textdata}</p>
                    <p className="text-sm mb-[10px]">
                      {data.simple}
                      <Link
                        href=""
                        className="text-[#1f71ffe8] underline mx-[3px]"
                      >
                        small text generator
                      </Link>
                      and
                      <Link
                        href=""
                        className="text-[#1f71ffe8] ml-[3px] underline"
                      >
                        {" "}
                        wide text generator.
                      </Link>
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

export default Textreplace;
