import smallimage from "../../Assets/Images/smalltext.png"
import undelineimage from "../../Assets/Images/undeline.png"
import bubbletext from "../../Assets/Images/bubble_text.png"
import jsontext from "../../Assets/Images/jsontotext.png"
import repeatimg from "../../Assets/Images/repeat.png"
import facebookimg from "../../Assets/Images/facebook.png"
import cursedimg from "../../Assets/Images/cursed.png"
import invisibletextimg from "../../Assets/Images/Invisible_Text.png"
import textreplacementimg from "../../Assets/Images/Text_Replacement.png"
import glitchimg from "../../Assets/Images/glitch.png"
import asciiimg from "../../Assets/Images/Ascii_Art.png"
import encodedecoderimg from "../../Assets/Images/encodertodecoder.png"

export const Moretext = () => {
    return [
        {
            smalltext: undelineimage,
            more: "Underline Text Generator",
            route: "/Underline/Underline"
        },
        {
            smalltext: smallimage,
            more: "Mirror Text Generator",
            route: "/Mirrortext/Mirrortext"
        },
        {
            smalltext: bubbletext,
            more: "Bubble Text Generator",
            route: "/Buubletext/Buubletext"
        },
        {
            smalltext: glitchimg,
            more: "Zalgo Glitch Text Generator",
            route: "/Glitchtext/Glitchtext"
        },
        {
            smalltext: invisibletextimg,
            more: "Invisible Text Generator",
            route: "/Invisibletext/Invisibletext"
        },
        {
            smalltext: asciiimg,
            more: "Ascii Art Generator",
            route: "/Asciiart/Asciiart"
        },
        {
            smalltext: repeatimg,
            more: "Repeat Text Generator",
            route: "/Repeattext/Repeattext"
        },
        {

            smalltext: jsontext,
            more: "JSON Stringify Text Generator",
            route: "/Jsonstrinf/Jsonstrinf"
        },
        {
            smalltext: encodedecoderimg,
            more: "UTF-8 Encoder/Decoder",
            route: "/Encoder/Encoder"
        },
        {
            smalltext: textreplacementimg,
            more: "Text Replacement Tool",
            route: "/Textreplace/Textreplace"
        },
        {

            smalltext: cursedimg,
            more: "Cursed Text Tool",
            route: '/Cursedtext/Cursedtext'
        },
        {
            smalltext: facebookimg,
            more: "Facebook Font Generator",
            route: "/Facebookfont/Facebookfont"
        },
    ]

}


