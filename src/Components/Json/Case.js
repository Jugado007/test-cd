import smallimage from "../../Assets/Images/smalltext.png";
import revrse from "../../Assets/Images/reversetext.png";
import convert from "../../Assets/Images/convertcase.png";
import Wideimage from "../../Assets/Images/widetext.png";
import Morstext from "../../Assets/Images/morse.png";
import binaryimage from "../../Assets/Images/binary.png";
import boldimage from "../../Assets/Images/bold.png";
import italicimage from "../../Assets/Images/italic.png";
import Strikethrough from "../../Assets/Images/linethrough.png";
import upsideimg from "../../Assets/Images/upsidedown.png";
import titlecaseimg from "../../Assets/Images/capitalize.png";
import uppercase from "../../Assets/Images/uppercase.png";
import sentence from "../../Assets/Images/sentence-case.png";
import lowercase from "../../Assets/Images/lowercase.png";

export const Case = () => {
  return [
    {
      id: 1,
      smalltext: convert,
      data: "Convert Case",
      route: "/Convertext/Converttext",
    },
    {
      id: 2,
      smalltext: smallimage,
      data: "Small text Generator",
      route: "/Smalltext/Smalltext",
    },
    {
      id: 3,
      smalltext: Wideimage,
      data: "Wide Text Generator",
      route: "/Widetext/Widetext",
    },
    {
      id: 4,
      smalltext: Strikethrough,
      data: "Strikethrough Text Generator",
      route: "/Strikethrough/Strikethrough",
    },
    {
      id: 5,
      smalltext: revrse,
      data: "Reverse Text Generator",
      route: "/Reverse/Reverse",
    },
    {
      id: 6,
      smalltext: upsideimg,
      data: "Upside Down Text Generator",
      route: "/Upside/Upside",
    },
    {
      id: 7,
      smalltext: Morstext,
      data: "Morse Code Translator",
      route: "/Morsecode/Morsecode",
    },
    {
      id: 8,
      smalltext: binaryimage,
      data: "Binary Code Translator",
      route: "/Binary/Binary",
    },
    {
      id: 9,
      smalltext: titlecaseimg,
      data: "Title case Translator",
      route: "/Titlecase/Titlecase",
    },
    {
      id: 10,
      smalltext: boldimage,
      data: "Bold Case Translator",
      route: "/Boldcase/Boldcase",
    },
    {
      id: 11,
      smalltext: italicimage,
      data: "Italic Code Translator",
      route: "/Italicetext/Italicetext",
    },
    {
      id: 12,
      smalltext: sentence,
      data: "Sentence case",
      route: "/sentencecase/sentencecase",
    },
    {
      id: 13,
      smalltext: lowercase,
      data: "lower case",
      route: "Lowercase/Lowercase",
    },
    {
      id: 14,
      smalltext: uppercase,
      data: "UPPER CASE",
      route: "Uppercase/Uppercase",
    },
    {
      id: 15,
      smalltext: titlecaseimg,
      data: "Capitalized Case",
      route: "Capitalized/Capitalized",
    },
  ];
};
