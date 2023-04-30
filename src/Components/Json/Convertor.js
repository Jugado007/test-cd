import unicodeimg from "../../Assets/Images/unicode.png"
import sentenceimg from "../../Assets/Images/sentence.png"
import webpimg from "../../Assets/Images/WebP_to_JPG.png"
import hextotextimg from "../../Assets/Images/Hex_to_Text.png"
import notepadimg from "../../Assets/Images/online_notepad.png"
import texttoolimg from "../../Assets/Images/online_text.png"
import Csvtojsonimg from "../../Assets/Images/CSV_to_JSON.png"
import romanimg from "../../Assets/Images/Roman_Numeral.png"
import natoalphabetimg from "../../Assets/Images/Natoalphabet.png"

export const Convertor = () => {
    return [
        {
            smalltext: unicodeimg,
            id: 1,
            more: "Unicode Text Converter",
            route: "/Unicodetext/Unicodetext"
        },

        {
            smalltext: sentenceimg,
            more: "Sentence Text Converter",
            route: "/sentencecase/sentencecase"
        },
        {
            smalltext: natoalphabetimg,
            more: "NATO Phonetic Alphabet Translator",
            route: "/Natoalbhabet/Natoalbhabet"
        },
        {
            smalltext: hextotextimg,
            more: "Hex to Text Converter",
            route: "/Hexconvert/Hexconvert"
        },
        {
            smalltext: notepadimg,
            more: "Online Notepad",
            route: "/Notepadoutline/Notepadoutline"
        },
        {
            smalltext: texttoolimg,
            more: "Online Text Tools",
            route: "/Outlinetext/Outlinetext"
        },
        // {
        //     smalltext: Csvtojsonimg,
        //     more: "CSV to JSON Converter",
        //     route: "/Csvtojson/Csvtojson"
        // },

        {
            smalltext: webpimg,
            more: "WebP to JPG Converter",
            route: "/Imageconvert/Imageconvert"
        },
        {
            smalltext: romanimg,
            more: "Roman Numeral Date Converter",
            route: "/Romantext/Romantext"
        },

    ]

}


