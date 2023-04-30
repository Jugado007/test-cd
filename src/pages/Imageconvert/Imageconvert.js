import React, { useState } from "react";
import ConvertImage from "react-convert-image";
import Image from "next/image";
import Footer from "@/Components/Footer/Footer";
import kofi from "../../Assets/Images/kofi.png";
import { Imagecase } from "@/Components/Json/Imagecase";
import Header from "@/Components/Header/Header";

const Imageconvert = () => {
  const [image, setImage] = useState("");
  const [compressedPreview, setCompressedPreview] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleConvertedImage = (url) => {
    setCompressedPreview(url);
  };
  
  return (
    <>
      <div>
        <Header />
        <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>

        <div className="mainbg max-w-[1260px] m-auto px-[15px] py-[10px]">
          <div className="">
            <div>
              <h1 className="text-[16px] sm:text-[22px] md:text-2xl font-bold  text-[#e27235] mb-[10px]">
                WebP to JPG Converter
              </h1>
              <p className="text-sm font-normal">
                Easily convert your WebP images to JPEG format with our free
                online converter. Upload your WebP image file and download the
                same image as JPG
              </p>
            </div>
            <div className="h-[98px]"></div>
            <div className="h-[200px] w-full gap-2 flex">
              {image === "" ? (
                <div className="w-full">
                  <label
                    for="file-upload"
                    className="custom-file-upload h-[200px] w-full flex items-center justify-center"
                  >
                    Drag & drop an image here or click to upload
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/webp"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              ) : (
                <>
                  <div className="w-[50%]">
                    <label
                      for="file-upload"
                      className="custom-file-upload h-[200px] w-full flex items-center justify-center"
                    >
                      Drag & drop an image here or click to upload
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/webp"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="w-[50%]">
                    <div className="selectimg h-[170px]  bg-white">
                      <ConvertImage
                        format="jpeg"
                        image={image}
                        onConversion={handleConvertedImage}
                      />
                    </div>
                    <div className="flex sm:items-center gap-1 mt-[6px] mb-[5px] flex-col sm:flex-row items-start">
                      <a href={compressedPreview} download>
                        <button className="hover:text-[#335ef7] border  hover:bg-[#eff7fe] px-[5px] py-[5px] text-sm font-bold text-white font-trebuchet bg-[#1f71ffe8] transition-all  text-start">
                          Download Image
                        </button>
                      </a>

                      {/* <button className="flex items-center bg-[#ff5f5f]  text-white py-[5px] px-2 text-sm font-bold">
                        <Image alt="" src={kofi} className="h-4 w-auto mr-1"></Image>{" "}
                        Buy me a Coffee
                      </button> */}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="flex items-center my-[20px] min-h-[250px]">
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="w-full lg:w-[900px] mt-[15px] m-auto">
            <div className="cards">
              {Imagecase.map((data, i) => {
                return (
                  <div key={i} className="card p-[15px] mb-[15px] bg-white border rounded-lg">
                    <h3 className="text-[15px] font-bold mb-[10px]  text-[#e27235]">
                      {data.title}
                    </h3>
                    <div className="pl-[40px] mb-[15px]">
                      <h6 className="flex items-center">
                        <span className="h-[5px] w-[5px] mr-[6px] bg-black rounded-full">
                          {data.dot}
                        </span>
                        <p className="text-sm font-normal">{data.check}</p>
                      </h6>
                      <h6 className="flex items-center">
                        <span className="h-[5px] w-[5px] mr-[6px] bg-black rounded-full">
                          {data.dot1}
                        </span>
                        <p className="text-sm font-normal">{data.text}</p>
                      </h6>
                    </div>
                    <p className="text-sm mb-[10px]">{data.sentence}</p>
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

export default Imageconvert;
