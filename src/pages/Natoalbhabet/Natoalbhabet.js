import React, { useState } from "react";
import clipboard from "copy-to-clipboard";
import Footer from "@/Components/Footer/Footer";
import Textarea from "../Textarea/Textarea";
import { Albhabetnato } from "@/Components/Json/Albhabetnato";
import Header from "@/Components/Header/Header";
import { placeholder } from "nato-phonetic-alphabet";

const Natoalbhabet = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleCopyText = () => {
    if (text === "") {
      const data =
        "Tango Yankee Papa Echo   Oscar Romeo   Papa Alpha Sierra Tango Echo   Yankee Oscar Uniform Romeo   Charlie Oscar November Tango Echo November Tango   Hotel Echo Romeo Echo";
      clipboard(data);
      alert(`!You have copied "${data}"`);
    } else {
      const data = placeholder(text);
      clipboard(data);
      alert(`!You have copied "${data}"`);
    }
  };

  const onClickDownload = () => {
    if (text === "") {
      const data =
        "Tango Yankee Papa Echo   Oscar Romeo   Papa Alpha Sierra Tango Echo   Yankee Oscar Uniform Romeo   Charlie Oscar November Tango Echo November Tango   Hotel Echo Romeo Echo";
      const element = document.createElement("a");
      const file = new Blob([data], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      document.body.appendChild(element);
      element.click();
    } else {
      const data = placeholder(text);
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
                Quickly Translate Words to the NATO Phonetic Alphabet
              </h1>
              <p className="text-sm font-normal">
                Are you in need of a quick and easy way to translate words to
                the NATO alphabet? Look no further! Our free online NATO
                Phonetic alphabet translator allows you to easily convert any
                word or phrase to the standardized phonetic alphabet used by the
                military and other organizations.
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
              {Albhabetnato.map((data, i) => {
                return (
                  <div key={i} className="card p-[15px] mb-[15px] bg-white border rounded-lg">
                    <h3 className="text-[15px] font-bold mb-[10px]  text-[#e27235]">
                      {data.title}
                    </h3>
                    <p className="text-sm mb-[10px]">{data.sentence}</p>
                    <p className="text-sm mb-[10px]">{data.subtitle}</p>
                    <p className="text-sm mb-[10px]">{data.text}</p>
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

export default Natoalbhabet;
