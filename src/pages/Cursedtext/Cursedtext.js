import React, { useState } from "react";
import clipboard from "copy-to-clipboard";
import { transform, getFonts } from "convert-unicode-fonts";
import zalgo from "to-zalgo";
import Footer from "@/Components/Footer/Footer";
import Textarea from "../Textarea/Textarea";
import { Textcursed } from "@/Components/Json/Textcursed";
import Header from "@/Components/Header/Header";

const Cursedtext = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const fonts = getFonts();

  const handleClick = () => {
    if (text === "") {
      const zalgoData = zalgo("Type or paste your content here");
      const fraktur = transform(
        "Type or paste your content here",
        fonts["fraktur"]
      );
      const boldFraktur = transform(
        "Type or paste your content here",
        fonts["boldFraktur"]
      );
      const negativeSquaredCapital = transform(
        "Type or paste your content here",
        fonts["negativeSquaredCapital"]
      );
      const data = `${zalgoData}\n ${fraktur}\n ${boldFraktur}\n ${negativeSquaredCapital}`;
      clipboard(data);
      alert(`!You have copied "${data}"`);
    } else {
      const zalgoData = zalgo(text);
      const fraktur = transform(text, fonts["fraktur"]);
      const boldFraktur = transform(text, fonts["boldFraktur"]);
      const negativeSquaredCapital = transform(
        text,
        fonts["negativeSquaredCapital"]
      );
      const data = `${zalgoData}\n ${fraktur}\n ${boldFraktur}\n ${negativeSquaredCapital}`;
      clipboard(data);
      alert(`!You have copied "${data}"`);
    }
  };

  const onClickDownload = () => {
    if (text === "") {
      const zalgoData = zalgo("Type or paste your content here");
      const fraktur = transform(
        "Type or paste your content here",
        fonts["fraktur"]
      );
      const boldFraktur = transform(
        "Type or paste your content here",
        fonts["boldFraktur"]
      );
      const negativeSquaredCapital = transform(
        "Type or paste your content here",
        fonts["negativeSquaredCapital"]
      );
      const data = `${zalgoData}\n ${fraktur}\n ${boldFraktur}\n ${negativeSquaredCapital}`;
      const element = document.createElement("a");
      const file = new Blob([data], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      document.body.appendChild(element);
      element.click();
    } else {
      const zalgoData = zalgo(text);
      const fraktur = transform(text, fonts["fraktur"]);
      const boldFraktur = transform(text, fonts["boldFraktur"]);
      const negativeSquaredCapital = transform(
        text,
        fonts["negativeSquaredCapital"]
      );
      const data = `${zalgoData}\n ${fraktur}\n ${boldFraktur}\n ${negativeSquaredCapital}`;
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
                Cursed Text Tool
              </h1>
              <p className="text-sm font-normal">
                Try our cursed text generator and create slanting text that
                suits your profile and content! If you're looking for
                action-packed posts, then this is the perfect tool for you. With
                our cursed text generator, you can add a touch of excitement to
                your posts and make them stand out from the rest. So go ahead
                and give it a try!
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
              {Textcursed.map((data, i) => {
                return (
                  <div key={i} className="card p-[15px] mb-[15px] bg-white border rounded-lg">
                    <h3 className="text-[15px] font-bold mb-[10px]  text-[#e27235]">
                      {data.title}
                    </h3>
                    <p className="text-sm mb-[10px]">{data.sentence}</p>
                    <p className="text-sm mb-[10px]">{data.subtitle}</p>
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

export default Cursedtext;
