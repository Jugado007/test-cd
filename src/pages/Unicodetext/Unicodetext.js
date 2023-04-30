import React, { useState } from "react";
import Footer from "@/Components/Footer/Footer";
import clipboard from "copy-to-clipboard";
import { transform, getFonts, revertTransform } from "convert-unicode-fonts";
import Textarea from "../Textarea/Textarea";
import { Unitextcase } from "@/Components/Json/Unitextcase";
import Header from "@/Components/Header/Header";

const Unicodetext = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const fonts = getFonts();
    if (text === "") {
      const unicodeScript = transform(
        "Type or paste your content here",
        fonts["italic"]
      );
      const unicodeScriptBold = transform(
        "Type or paste your content here",
        fonts["boldItalic"]
      );
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
      const capitalized = "Type or paste your content here".toUpperCase();
      const unicodeFullWidth = transform(
        "Type or paste your content here",
        fonts["fullWidth"]
      );
      const unicodeMonoSpace = transform(
        "Type or paste your content here",
        fonts["monospace"]
      );
      const unicodeSansSerif = transform(
        "Type or paste your content here",
        fonts["sansSerif"]
      );
      const unicodeSansSerifItalic = transform(
        "Type or paste your content here",
        fonts["sansSerifItalic"]
      );
      const unicodesansSerifBold = transform(
        "Type or paste your content here",
        fonts["sansSerifBold"]
      );
      const unicodeSansSerifBoldItalic = transform(
        "Type or paste your content here",
        fonts["sansSerifBoldItalic"]
      );
      const allUnicodeData = `Script\n${unicodeScript}\nScript (Bold)\n${unicodeScriptBold}\nFraktur\n${unicodeScripFraktur}\n Fraktur (Bold)\n${unicodeScripBoldFraktur}\n Circled\n${unicodeScripCircled}\nCircled (Inverted)\n${unicodeNegativeCircledCapital}\nSquared\n${unicodeSquaredCapital}\nSquared (Inverted)\n${unicodeNegativeSquaredCapital}\nCapitalized\n${capitalized}\nFull Widthn\n${unicodeFullWidth}\nMonospace\n${unicodeMonoSpace}\nSans-Serif\n${unicodeSansSerif}\nSans-Serif (Italic)\n${unicodeSansSerifItalic}\n  Sans-Serif (Bold)\n${unicodesansSerifBold}\nSans-Serif (Bold Italic)\n${unicodeSansSerifBoldItalic}\n
        `;
      clipboard(allUnicodeData);
      alert(`!You have copied`);
    } else {
      const unicodeScripts = transform(text, fonts["italic"]);
      const unicodeScriptBold = transform(text, fonts["boldItalic"]);
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
      const capitalized = text.toUpperCase();
      const unicodeFullWidth = transform(text, fonts["fullWidth"]);
      const unicodeMonoSpace = transform(text, fonts["monospace"]);
      const unicodeSansSerif = transform(text, fonts["sansSerif"]);
      const unicodeSansSerifItalic = transform(text, fonts["sansSerifItalic"]);
      const unicodesansSerifBold = transform(text, fonts["sansSerifBold"]);
      const unicodeSansSerifBoldItalic = transform(
        text,
        fonts["sansSerifBoldItalic"]
      );
      const allUnicodeData = `Script\n${unicodeScripts}\nScript (Bold)\n${unicodeScriptBold}\nFraktur\n${unicodeScripFraktur}\n Fraktur (Bold)\n${unicodeScripBoldFraktur}\n Circled\n${unicodeScripCircled}\nCircled (Inverted)\n${unicodeNegativeCircledCapital}\nSquared\n${unicodeSquaredCapital}\nSquared (Inverted)\n${unicodeNegativeSquaredCapital}\nCapitalized\n${capitalized}\nFull Widthn\n${unicodeFullWidth}\nMonospace\n${unicodeMonoSpace}\nSans-Serif\n${unicodeSansSerif}\nSans-Serif (Italic)\n${unicodeSansSerifItalic}\n  Sans-Serif (Bold)\n${unicodesansSerifBold}\nSans-Serif (Bold Italic)\n${unicodeSansSerifBoldItalic}\n
        `;
      clipboard(allUnicodeData);
      alert(`!You have copied`);
    }
  };

  const onClickDownload = () => {
    const fonts = getFonts();
    if (text === "") {
      const unicodeScript = transform(
        "Type or paste your content here",
        fonts["italic"]
      );
      const unicodeScriptBold = transform(
        "Type or paste your content here",
        fonts["boldItalic"]
      );
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
      const capitalized = "Type or paste your content here".toUpperCase();
      const unicodeFullWidth = transform(
        "Type or paste your content here",
        fonts["fullWidth"]
      );
      const unicodeMonoSpace = transform(
        "Type or paste your content here",
        fonts["monospace"]
      );
      const unicodeSansSerif = transform(
        "Type or paste your content here",
        fonts["sansSerif"]
      );
      const unicodeSansSerifItalic = transform(
        "Type or paste your content here",
        fonts["sansSerifItalic"]
      );
      const unicodesansSerifBold = transform(
        "Type or paste your content here",
        fonts["sansSerifBold"]
      );
      const unicodeSansSerifBoldItalic = transform(
        "Type or paste your content here",
        fonts["sansSerifBoldItalic"]
      );
      const allUnicodeData = `Script\n${unicodeScript}\nScript (Bold)\n${unicodeScriptBold}\nFraktur\n${unicodeScripFraktur}\n Fraktur (Bold)\n${unicodeScripBoldFraktur}\n Circled\n${unicodeScripCircled}\nCircled (Inverted)\n${unicodeNegativeCircledCapital}\nSquared\n${unicodeSquaredCapital}\nSquared (Inverted)\n${unicodeNegativeSquaredCapital}\nCapitalized\n${capitalized}\nFull Widthn\n${unicodeFullWidth}\nMonospace\n${unicodeMonoSpace}\nSans-Serif\n${unicodeSansSerif}\nSans-Serif (Italic)\n${unicodeSansSerifItalic}\n  Sans-Serif (Bold)\n${unicodesansSerifBold}\nSans-Serif (Bold Italic)\n${unicodeSansSerifBoldItalic}\n
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
      const unicodeScripts = transform(text, fonts["italic"]);
      const unicodeScriptBold = transform(text, fonts["boldItalic"]);
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
      const capitalized = text.toUpperCase();
      const unicodeFullWidth = transform(text, fonts["fullWidth"]);
      const unicodeMonoSpace = transform(text, fonts["monospace"]);
      const unicodeSansSerif = transform(text, fonts["sansSerif"]);
      const unicodeSansSerifItalic = transform(text, fonts["sansSerifItalic"]);
      const unicodesansSerifBold = transform(text, fonts["sansSerifBold"]);
      const unicodeSansSerifBoldItalic = transform(
        text,
        fonts["sansSerifBoldItalic"]
      );
      const allUnicodeData = `Script\n${unicodeScripts}\n Script (Bold)\n${unicodeScriptBold}\nFraktur\n ${unicodeScripFraktur}\n Fraktur (Bold)\n${unicodeScripBoldFraktur}\n Circled\n${unicodeScripCircled}\nCircled (Inverted)\n${unicodeNegativeCircledCapital}\nSquared\n${unicodeSquaredCapital}\nSquared (Inverted)\n${unicodeNegativeSquaredCapital}\nCapitalized\n${capitalized}\nFull Widthn\n${unicodeFullWidth}\nMonospace\n${unicodeMonoSpace}\nSans-Serif\n${unicodeSansSerif}\nSans-Serif (Italic)\n${unicodeSansSerifItalic}\n  Sans-Serif (Bold)\n${unicodesansSerifBold}\nSans-Serif (Bold Italic)\n${unicodeSansSerifBoldItalic}\n
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
                Unicode Text Converter
              </h1>
              <p className="text-sm font-normal">
                Looking for an easy way to search through a wide range of fonts
                for the same text? Use this practical unicode converter to do
                just that. Simply type in the text in the panel on the left and
                see all the range of fonts available. Simply pick the one you
                like from the unitext converter. Copy it and paste it to where
                you need it.
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
              {Unitextcase.map((data, i) => {
                return (
                  <div key={i} className="card p-[15px] mb-[15px] bg-white border rounded-lg">
                    <h3 className="text-[15px] font-bold mb-[10px]  text-[#e27235]">
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

export default Unicodetext;
