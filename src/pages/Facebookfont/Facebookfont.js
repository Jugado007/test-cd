import React, { useState } from "react";
import Footer from "@/Components/Footer/Footer";
import { transform, getFonts } from "convert-unicode-fonts";
import clipboard from "copy-to-clipboard";
import Textarea from "../Textarea/Textarea";
import { Fbtext } from "@/Components/Json/Fbtext";
import Header from "@/Components/Header/Header";

const Facebookfont = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleCopyText = () => {
    const fonts = getFonts();
    if (text === "") {
      const unicodeScripFraktur = transform(
        "Type or paste your content here",
        fonts["fraktur"]
      );
      const unicodeScripBoldFraktur = transform(
        "Type or paste your content here",
        fonts["boldFraktur"]
      );
      const unicodeScripCircled = transform(
        "Type or paste your content here",
        fonts["circled"]
      );
      const unicodeNegativeCircledCapital = transform(
        "Type or paste your content here",
        fonts["negativeCircledCapital"]
      );
      const unicodeSquaredCapital = transform(
        "Type or paste your content here",
        fonts["squaredCapital"]
      );
      const unicodeNegativeSquaredCapital = transform(
        "Type or paste your content here",
        fonts["negativeSquaredCapital"]
      );
      const unicodesansSerifBold = transform(
        "Type or paste your content here",
        fonts["sansSerifBold"]
      );
      const unicodeFullWidth = transform(
        "Type or paste your content here",
        fonts["fullWidth"]
      );
      const allUnicodeData = `${unicodeScripFraktur}\n ${unicodeScripBoldFraktur}\n ${unicodeScripCircled}\n${unicodeNegativeCircledCapital}\n${unicodeSquaredCapital}\n${unicodeNegativeSquaredCapital}\n${unicodeFullWidth}\n${unicodesansSerifBold}
            `;
      clipboard(allUnicodeData);
      alert(`!You have copied`);
    } else {
      const unicodeScripFraktur = transform(text, fonts["fraktur"]);
      const unicodeScripBoldFraktur = transform(text, fonts["boldFraktur"]);
      const unicodeScripCircled = transform(text, fonts["circled"]);
      const unicodeNegativeCircledCapital = transform(
        text,
        fonts["negativeCircledCapital"]
      );
      const unicodeSquaredCapital = transform(text, fonts["squaredCapital"]);
      const unicodeNegativeSquaredCapital = transform(
        text,
        fonts["negativeSquaredCapital"]
      );
      const unicodesansSerifBold = transform(text, fonts["sansSerifBold"]);
      const unicodeFullWidth = transform(text, fonts["fullWidth"]);
      const allUnicodeData = `${unicodeScripFraktur}\n ${unicodeScripBoldFraktur}\n ${unicodeScripCircled}\n${unicodeNegativeCircledCapital}\n${unicodeSquaredCapital}\n${unicodeNegativeSquaredCapital}\n${unicodeFullWidth}\n${unicodesansSerifBold}
                `;
      clipboard(allUnicodeData);
      alert(`!You have copied`);
    }
  };

  const onClickDownload = () => {
    const fonts = getFonts();
    if (text === "") {
      const unicodeScripFraktur = transform(
        "Type or paste your content here",
        fonts["fraktur"]
      );
      const unicodeScripBoldFraktur = transform(
        "Type or paste your content here",
        fonts["boldFraktur"]
      );
      const unicodeScripCircled = transform(
        "Type or paste your content here",
        fonts["circled"]
      );
      const unicodeNegativeCircledCapital = transform(
        "Type or paste your content here",
        fonts["negativeCircledCapital"]
      );
      const unicodeSquaredCapital = transform(
        "Type or paste your content here",
        fonts["squaredCapital"]
      );
      const unicodeNegativeSquaredCapital = transform(
        "Type or paste your content here",
        fonts["negativeSquaredCapital"]
      );
      const unicodesansSerifBold = transform(
        "Type or paste your content here",
        fonts["sansSerifBold"]
      );
      const unicodeFullWidth = transform(
        "Type or paste your content here",
        fonts["fullWidth"]
      );
      const allUnicodeData = `${unicodeScripFraktur}\n ${unicodeScripBoldFraktur}\n ${unicodeScripCircled}\n${unicodeNegativeCircledCapital}\n${unicodeSquaredCapital}\n${unicodeNegativeSquaredCapital}\n${unicodeFullWidth}\n${unicodesansSerifBold}
        `;
      const element = document.createElement("a");
      const file = new Blob([allUnicodeData], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      document.body.appendChild(element);
      element.click();
    } else {
      const unicodeScripFraktur = transform(text, fonts["fraktur"]);
      const unicodeScripBoldFraktur = transform(text, fonts["boldFraktur"]);
      const unicodeScripCircled = transform(text, fonts["circled"]);
      const unicodeNegativeCircledCapital = transform(
        text,
        fonts["negativeCircledCapital"]
      );
      const unicodeSquaredCapital = transform(text, fonts["squaredCapital"]);
      const unicodeNegativeSquaredCapital = transform(
        text,
        fonts["negativeSquaredCapital"]
      );
      const unicodesansSerifBold = transform(text, fonts["sansSerifBold"]);
      const unicodeFullWidth = transform(text, fonts["fullWidth"]);
      const allUnicodeData = `${unicodeScripFraktur}\n ${unicodeScripBoldFraktur}\n ${unicodeScripCircled}\n${unicodeNegativeCircledCapital}\n${unicodeSquaredCapital}\n${unicodeNegativeSquaredCapital}\n${unicodeFullWidth}\n${unicodesansSerifBold}
                  `;
      const element = document.createElement("a");
      const file = new Blob([allUnicodeData], {
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
              <h1 className="text-[16px] sm:text-[22px] md:text-2xl font-bold mb-[10px]  text-[#e27235]">
                Facebook Font Generator
              </h1>
              <p className="text-sm font-normal">
                Create unique fonts for your Facebook profile or page with our
                easy-to-use font generator.
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
          <div className="full lg:w-[900px] mt-[15px] m-auto">
            <div>
              {Fbtext.map((data, i) => {
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

export default Facebookfont;
