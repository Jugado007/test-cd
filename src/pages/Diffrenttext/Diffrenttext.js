import React, { useState } from "react";
import clipboard from "copy-to-clipboard";
import { Usertext } from "../../Components/Json/Usertext";

const Diffrenttext = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [defalut, setDefault] = useState("Type or paste your content here");
  
  const handleClicked = (data) => {
    if (data === "sentence") {
      if (text !== "") {
        const splittest =
          text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
        setText(splittest);
      } else {
        const splittest =
          defalut.charAt(0).toUpperCase() + defalut.substring(1).toLowerCase();
        setDefault(splittest);
      }
    }
    if (data === "lower") {
      if (text !== "") {
        setText(text.toLowerCase());
      } else {
        setDefault(defalut.toLowerCase());
      }
    }
    if (data === "upper") {
      if (text !== "") {
        setText(text.toUpperCase());
      } else {
        setDefault(defalut.toUpperCase());
      }
    }
    if (data === "capitalized") {
      if (text !== "") {
        const splittest = text.split(" ");
        const join = splittest.map(
          (val) => val.charAt(0).toUpperCase() + val.substring(1).toLowerCase()
        );
        setText(join.join(" "));
      } else {
        const splittest = defalut.split(" ");
        const join = splittest.map(
          (val) => val.charAt(0).toUpperCase() + val.substring(1).toLowerCase()
        );
        setDefault(join.join(" "));
      }
    }
    if (data === "alternating") {
      if (text !== "") {
        const char = text.toUpperCase().split("");
        for (var i = 0; i < char.length; i += 2) {
          char[i] = char[i].toLowerCase();
        }
        setText(char.join(""));
      } else {
        const char = defalut.toUpperCase().split("");
        for (var i = 0; i < char.length; i += 2) {
          char[i] = char[i].toLowerCase();
        }
        setDefault(char.join(""));
      }
    }
    if (data === "title") {
      if (text !== "") {
        const splittest = text.split(" ");
        const join = splittest.map(
          (val) => val.charAt(0).toUpperCase() + val.substring(1).toLowerCase()
        );
        setText(join.join(" "));
      } else {
        const splittest = defalut.split(" ");
        const join = splittest.map(
          (val) => val.charAt(0).toUpperCase() + val.substring(1).toLowerCase()
        );
        setDefault(join.join(" "));
      }
    }
    if (data === "inverse") {
      if (text !== "") {
        var str = "";
        var i = 0;
        while (i < text.length) {
          var n = text.charAt(i);
          if (n === n.toUpperCase()) {
            n = n.toLowerCase();
          } else {
            n = n.toUpperCase();
          }
          i += 1;
          str += n;
        }
        setText(str);
      } else {
        var str = "";
        var i = 0;
        while (i < defalut.length) {
          var n = defalut.charAt(i);
          if (n === n.toUpperCase()) {
            n = n.toLowerCase();
          } else {
            n = n.toUpperCase();
          }
          i += 1;
          str += n;
        }
        setDefault(str);
      }
    }
    if (data === "download") {
      const element = document.createElement("a");
      const file = new Blob([text], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "convertcase-net.txt";
      document.body.appendChild(element);
      element.click();
    }
    if (data === "copy") {
      clipboard(text);
      alert(`!You have copied`);
    }
    if (data === "clear") {
      setCount(0);
      setText("");
    }
  };

  return (
    <div className="">
      <div className="px-[15px] py-[10px]">
        <div>
          <h1 className="text-[16px] text-[#e27235] sm:text-[22px] md:text-2xl font-bold mb-[10px]">
            Accidentally left the caps lock on and typed something, but can't be
            bothered to start again and retype it all?
          </h1>
          <p className="text-sm font-normal">
            Simply enter your text and choose the case you want to convert it
            to.
          </p>
        </div>
        <div className="h-[98px]"></div>
        <div>
          <textarea
            id="w3review"
            name="w3review"
            value={text}
            placeholder={defalut}
            className="text-sm bg-[#ffede4] p-[10px] w-full  h-[200px] focus:outline-0"
            onChange={(e) => {
              setText(e.target.value), setCount(e.target.value.length);
            }}
          ></textarea>
        </div>
        <div className="mb-[5px]">
          <ul className="flex flex-wrap items-center gap-3 mb-[5px]">
            {Usertext.map((data, i) => {
              return (
                <li key={i}>
                  <button
                    onClick={() => handleClicked(data.value)}
                    className="border px-[5px] py-[5px] text-sm font-bold text-[#e27235] bg-[#ffede4] transition-all  text-start"
                  >
                    {data.text}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center mb-[10px]]">
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
        <div className="flex items-center my-[20px] min-h-[250px]">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Diffrenttext;
