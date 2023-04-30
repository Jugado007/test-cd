import React, { useEffect, useState } from "react";
import Image from "next/image";
import { transform, getFonts } from "convert-unicode-fonts";
import copy from "../../Assets/Images/copy.svg";
import { useRouter } from "next/router";
import { Base64 } from "js-base64";
import morse from "morse-code-converter";
import { stringify } from "roman-numerals-convert";
import binary from "text-to-binary-converter";
import toHex from "to-hex";
import zalgo from "to-zalgo";
import kofi from "../../Assets/Images/kofi.png";
import { placeholder } from "nato-phonetic-alphabet";
import {
  copyToClipboardUpper,
  copyToClipboardLower,
  handleClickbubbleFont,
  handleClickbubbleFonts,
  handleClickScript,
  handleClickScriptBold,
  handleClickFraktur,
  handleClickCircled,
  handleClickFrakturBold,
  handleClickCircledInverted,
  handleClickSquared,
  handleClickSquaredInverted,
  handleClickCapitalized,
  handleClickFullWidth,
  handleClickMonospace,
  handleClickSansSerif,
  handleClickSansSerifItalic,
  handleClickSansSerifBold,
  handleClickSansSerifBoldItalic,
} from "./functionData";

const Textarea = ({
  text,
  setText,
  onClickCopy,
  onClickDownload,
  setCount,
  count,
}) => {
  const [roman, setRoman] = useState(0);
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const fonts = getFonts();
  const splittest = text?.split(" ");
  const join = splittest?.map(
    (val) => val.charAt(0).toUpperCase() + val.substring(1).toLowerCase()
  );
  useEffect(() => {
    if (router.pathname === "/Romantext/Romantext") {
      const romanNumber = Number(text);
      setRoman(stringify(romanNumber));
    }
  }, [text]);

  return (
    <>
      <div className="">
        <div className="w-full m-auto md:w-[50%]">
          <textarea
            value={text}
            id="w3review"
            name="w3review"
            placeholder="Type or paste your content here"
            className="text-sm p-[10px] w-full min-h-[24vh] bg-[#ffede4] focus:outline-0"
            onChange={(e) => {
              setText(e.target.value), setCount(e.target.value.length);
            }}
          ></textarea>
        </div>
        <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[800px] m-auto"></div>
        <div className="flex justify-center">
          <button
            onClick={() => setOpen(!open)}
            className="btnlogin text-white py-[10px] px-[10px] sm:px-[40px] my-[20px]"
          >
            Rewrite Article
          </button>
        </div>
        <div className="flex bg-[#80808014]  max-w-[800px] m-auto items-center my-[20px] min-h-[250px]">
          <div></div>
          <div></div>
        </div>
        {!open ? (
          <>
            <div className="w-full m-auto md:w-[50%]">
              <div className="p-[10px] bg-[#ffede4] min-h-[20vh] h-full">
                {router.pathname === "/Smalltext/Smalltext" ? (
                  <>
                    <h3 className="mb-[10px] text-[19px] font-bold">
                      Small Caps
                    </h3>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center break-all">
                      {text === "" && "Type or paste your content here"}
                      {text}
                      <button onClick={() => copyToClipboardLower(text)}>
                        <Image alt="" src={copy} className="ml-2 w-[10px]"></Image>
                      </button>
                    </p>
                    <h3 className="mb-[10px] text-[19px] font-bold">
                      Superscript
                    </h3>
                    <p className="uppercase mb-[10px] text-xs font-normal flex items-center break-all">
                      {text === "" && "Type or paste your content here"}
                      {text}
                      <button onClick={() => copyToClipboardUpper(text)}>
                        <Image alt="" src={copy} className="ml-2 w-[10px]"></Image>
                      </button>
                    </p>
                  </>
                ) : null}
                {router.pathname === "/Widetext/Widetext" ? (
                  <>
                    <h3 className="mb-[10px] text-[16px] font-normal tracking-[10px] break-all">
                      {text === "" && "Type or paste your content here"}
                      {text}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Strikethrough/Strikethrough" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] line-through font-normal break-all">
                      {text === "" && "Type or paste your content here"}
                      {text}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Reverse/Reverse" ? (
                  <>
                    <bdo
                      className="mb-[10px] text-[14px] font-normal break-all"
                      dir="rtl"
                    >
                      {text === "" && "Type or paste your content here"}
                      {text}
                    </bdo>
                  </>
                ) : null}
                {router.pathname === "/Upside/Upside" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal scale-x-[-1] scale-y-[-1] text-end break-all">
                      {text === "" && "Type or paste your content here"}
                      {text}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Italicetext/Italicetext" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal">
                      {text === ""
                        ? transform(
                            "Type or paste your content here",
                            fonts["italic"]
                          )
                        : transform(text, fonts["italic"])}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Underline/Underline" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal underline break-all">
                      {text === "" && "Type or paste your content here"}
                      {text}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Mirrortext/Mirrortext" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal scale-x-[-1] text-end break-all">
                      {text === "" && "Type or paste your content here"}
                      {text}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Buubletext/Buubletext" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal relative">
                      {text === "" && (
                        <>
                          <p>
                            {transform(
                              "Type or Paste Your Content Here",
                              fonts["circled"]
                            )}
                          </p>
                        </>
                      )}
                      <p>
                        {transform(text, fonts["circled"])}
                        <button onClick={() => handleClickbubbleFont(text)}>
                          <Image
                            src={copy}
                            className="ml-2 w-[10px]"
                            alt="copy"
                          ></Image>
                        </button>
                      </p>
                      {text === "" && (
                        <p>
                          {transform(
                            "Type or Paste Your Content Here",
                            fonts["negativeCircledCapital"]
                          )}
                        </p>
                      )}
                      <p>
                        {transform(text, fonts["negativeCircledCapital"])}
                        <button onClick={() => handleClickbubbleFonts(text)}>
                          <Image
                            src={copy}
                            className="ml-2 w-[10px]"
                            alt="copy"
                          ></Image>
                        </button>
                      </p>
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Glitchtext/Glitchtext" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal">
                      {text === ""
                        ? zalgo("Type or paste your content here")
                        : zalgo(text)}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Invisibletext/Invisibletext" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal hidden">
                      {text === "" ? "Type or paste your content here" : text}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/sentencecase/sentencecase" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal">
                      {text === ""
                        ? "Type or Paste Your Content Here"
                            .charAt(0)
                            .toUpperCase() +
                          "Type or Paste Your Content Here"
                            .substring(1)
                            .toLowerCase()
                        : text.charAt(0).toUpperCase() +
                          text.substring(1).toLowerCase()}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Morsecode/Morsecode" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal">
                      {text === ""
                        ? morse.textToMorse("Type or Paste Your Content Here")
                        : morse.textToMorse(text)}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Binary/Binary" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal">
                      {text === ""
                        ? binary.convert("Type or paste your content here")
                        : binary.convert(text)}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Titlecase/Titlecase" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal">
                      {text === ""
                        ? "Type or Paste Your Content Here"
                        : join.join(" ")}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Boldcase/Boldcase" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal">
                      {text === ""
                        ? transform(
                            "Type or paste your content here",
                            fonts["bold"]
                          )
                        : transform(text, fonts["bold"])}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Unicodetext/Unicodetext" ? (
                  <>
                    <h3 className="mb-[10px] text-[19px] font-normal">
                      Script
                    </h3>
                    <p className="uppercase mb-[10px] text-xs font-normal flex items-center">
                      {text === "" && "Type or paste your content here"}
                      {transform(text, fonts["italic"])}
                      <button onClick={() => handleClickScript(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <h3 className="mb-[10px] text-[19px] font-bold">
                      Script (Bold)
                    </h3>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["boldItalic"]
                        )}
                      {transform(text, fonts["boldItalic"])}
                      <button onClick={() => handleClickScriptBold(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <h3 className="text-lg font-normal">Fraktur</h3>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["fraktur"]
                        )}
                      {transform(text, fonts["fraktur"])}
                      <button onClick={() => handleClickFraktur(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <h3 className="text-lg font-bold">Fraktur (Bold)</h3>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["boldFraktur"]
                        )}
                      {transform(text, fonts["boldFraktur"])}
                      <button onClick={() => handleClickFrakturBold(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <h3 className="text-lg font-normal">Circled</h3>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["circled"]
                        )}
                      {transform(text, fonts["circled"])}
                      <button onClick={() => handleClickCircled(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <h3 className="text-lg font-bold">Circled (Inverted)</h3>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["negativeCircledCapital"]
                        )}
                      {transform(text, fonts["negativeCircledCapital"])}
                      <button onClick={() => handleClickCircledInverted(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <h3 className="text-lg font-normal">Squared</h3>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["squaredCapital"]
                        )}
                      {transform(text, fonts["squaredCapital"])}
                      <button onClick={() => handleClickSquared(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <h3 className="text-lg font-bold">Squared (Inverted)</h3>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["negativeSquaredCapital"]
                        )}
                      {transform(text, fonts["negativeSquaredCapital"])}
                      <button onClick={() => handleClickSquaredInverted(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <h3 className="text-lg font-bold capitalized">
                      Capitalized
                    </h3>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        "Type or paste your content here".toUpperCase()}
                      {text.toUpperCase()}
                      <button
                        onClick={() =>
                          handleClickCapitalized(text.toUpperCase())
                        }
                      >
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <h3 className="text-lg font-bold">Full width</h3>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["fullWidth"]
                        )}
                      {transform(text, fonts["fullWidth"])}
                      <button onClick={() => handleClickFullWidth(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <h3 className="text-lg font-bold">Monospace</h3>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["monospace"]
                        )}
                      {transform(text, fonts["monospace"])}
                      <button onClick={() => handleClickMonospace(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <h3 className="text-lg font-bold">Sans-Serif</h3>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["sansSerifItalic"]
                        )}
                      {transform(text, fonts["sansSerif"])}
                      <button onClick={() => handleClickSansSerif(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <h3 className="text-lg font-normal">Sans-Serif (Italic)</h3>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["sansSerifItalic"]
                        )}
                      {transform(text, fonts["sansSerifItalic"])}
                      <button onClick={() => handleClickSansSerifItalic(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <h3 className="text-lg font-bold">Sans-Serif (Bold)</h3>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["sansSerifBold"]
                        )}
                      {transform(text, fonts["sansSerifBold"])}
                      <button onClick={() => handleClickSansSerifBold(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <h3 className="text-lg font-bold">
                      Sans-Serif (Bold italic)
                    </h3>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["sansSerifBoldItalic"]
                        )}
                      {transform(text, fonts["sansSerifBoldItalic"])}
                      <button
                        onClick={() => handleClickSansSerifBoldItalic(text)}
                      >
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                  </>
                ) : null}
                {router.pathname === "/Hexconvert/Hexconvert" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal">
                      {text === ""
                        ? toHex("Type or Paste Your Content Here")
                        : toHex(text)}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Romantext/Romantext" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal">
                      {text === "" ? "I/XXIV/MMXXIII" : roman}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Repeattext/Repeattext" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal">
                      {text === ""
                        ? "Type or paste your content here".repeat(5)
                        : text.repeat(5)}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Cursedtext/Cursedtext" ? (
                  <>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" && zalgo("Type or paste your content here")}

                      {zalgo(text)}
                      <button onClick={handleClickScript}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["fraktur"]
                        )}
                      {transform(text, fonts["fraktur"])}
                      <button onClick={handleClickScript}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["boldFraktur"]
                        )}
                      {transform(text, fonts["boldFraktur"])}
                      <button onClick={handleClickScriptBold}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["negativeSquaredCapital"]
                        )}
                      {transform(text, fonts["negativeSquaredCapital"])}
                      <button onClick={handleClickScriptBold}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                  </>
                ) : null}
                {router.pathname === "/Jsonstrinf/Jsonstrinf" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal">
                      {text === ""
                        ? JSON.stringify("Type or Paste Your Content Here")
                        : JSON.stringify(text)}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Facebookfont/Facebookfont" ? (
                  <>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["fraktur"]
                        )}
                      {transform(text, fonts["fraktur"])}
                      <button onClick={() => handleClickFraktur(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["boldFraktur"]
                        )}
                      {transform(text, fonts["boldFraktur"])}
                      <button onClick={() => handleClickFrakturBold(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["circled"]
                        )}
                      {transform(text, fonts["circled"])}
                      <button onClick={() => handleClickCircled(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["negativeCircledCapital"]
                        )}
                      {transform(text, fonts["negativeCircledCapital"])}
                      <button onClick={() => handleClickCircledInverted(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["squaredCapital"]
                        )}
                      {transform(text, fonts["squaredCapital"])}
                      <button onClick={() => handleClickSquared(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["negativeSquaredCapital"]
                        )}
                      {transform(text, fonts["negativeSquaredCapital"])}
                      <button onClick={() => handleClickSquaredInverted(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["sansSerifItalic"]
                        )}
                      {transform(text, fonts["sansSerifItalic"])}
                      <button onClick={() => handleClickSansSerifItalic(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                    <p className="mb-[10px] text-[11px] font-normal flex items-center">
                      {text === "" &&
                        transform(
                          "Type or paste your content here",
                          fonts["fullWidth"]
                        )}
                      {transform(text, fonts["fullWidth"])}
                      <button onClick={() => handleClickFullWidth(text)}>
                        <Image
                          src={copy}
                          className="ml-2 w-[10px]"
                          alt="copy"
                        ></Image>
                      </button>
                    </p>
                  </>
                ) : null}
                {router.pathname === "/Encoder/Encoder" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal">
                      {text === ""
                        ? Base64.encode("Type or Paste Your Content Here")
                        : Base64.encode(text)}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Natoalbhabet/Natoalbhabet" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal">
                      {text === ""
                        ? "Tango Yankee Papa Echo   Oscar Romeo   Papa Alpha Sierra Tango Echo   Yankee Oscar Uniform Romeo   Charlie Oscar November Tango Echo November Tango   Hotel Echo Romeo Echo"
                        : placeholder(text)}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Lowercase/Lowercase" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal">
                      {text === ""
                        ? "Type or Paste Your Content Here".toLowerCase()
                        : text.toLowerCase()}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Uppercase/Uppercase" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal">
                      {text === ""
                        ? "Type or Paste Your Content Here".toUpperCase()
                        : text.toUpperCase()}
                    </h3>
                  </>
                ) : null}
                {router.pathname === "/Capitalized/Capitalized" ? (
                  <>
                    <h3 className="mb-[10px] text-[14px] font-normal">
                      {text === ""
                        ? "Type or Paste Your Content Here"
                        : join.join(" ")}
                    </h3>
                  </>
                ) : null}
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="w-full">
          <div className="flex sm:items-center gap-1 justify-center mt-[10px] flex-col sm:flex-row items-start">
            <button
              onClick={onClickDownload}
              className=" border  px-[5px] py-[5px] text-sm font-bold text-white font-trebuchet bg-[#e36843] transition-all  text-start"
            >
              Download Text
            </button>
            <button
              onClick={onClickCopy}
              className="border  px-[5px] py-[5px] text-sm font-bold text-white font-trebuchet bg-[#e36843] transition-all  text-start"
            >
              Copy to Clipboard
            </button>
            {/* <button className="flex items-center btnlogin  text-white py-[5px] px-2 text-sm font-bold">
              <Image alt="" src={kofi} className="h-4 w-auto mr-1"></Image> Buy me a
              Coffee
            </button> */}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 justify-center mt-3">
          <div className="w-full sm:w-[50%] pt-[10px] sm:pt-0">
            <div className="flex flex-wrap sm:items-center justify-center">
              <p className="text-sm text-[#111111] font-normal mr-[3px]">
                Character Count:<span>{count}</span>
              </p>
              <p className="text-sm text-[#111111] font-normal mr-[3px]">
                | Word Count:<span>{text ? text.split(" ").length : 0}</span>
              </p>
              <p className="text-sm text-[#111111] font-normal">
                | Line Count:
                <span>{text ? text.split(/\r|\r\n|\n/).length : 0}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Textarea;
