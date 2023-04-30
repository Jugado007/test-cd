import React from "react";
import Header from "@/Components/Header/Header";
import { detail } from "@/Components/Json/detail";
import Link from "next/link";

const Useterms = () => {
  
  return (
    <>
      <Header />
      <div>
        <div className="max-w-[1260px] m-auto bg-[#ffede461]  pb-5 px-[15px]">
          <h1 className="text-3xl my-5 font-bold">Terms of Service</h1>
          <div>
            {detail.map((data, i) => {
              return (
                <>
                  <div className="my-4 terms">
                    <h2 className="text-lg font-semibold">
                      <span>{data.no}</span>
                      {data.title}
                    </h2>
                    <p className="text-sm">{data.subtitle}</p>
                    <div className="pl-[40px]">
                      <h3 className="text-sm">{data.use1}</h3>
                      <div className="pl-[50px]">
                        <ul
                          className={`list text-sm ${
                            data.title === "Use Licence" && "more"
                          }`}
                        >
                          <li>{data.materials}</li>
                          <li>{data.licence}</li>
                          <li>{data.convert}</li>
                          <li>{data.copyright}</li>
                          <li>{data.transfar}</li>
                        </ul>
                      </div>
                      <h3 className="text-sm">{data.use2}</h3>
                    </div>
                    <div className="pl-[40px]">
                      <h3 className="text-sm">{data.Disclaimer}</h3>
                      <h3 className="text-sm">{data.Disclaimer1}</h3>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <Link
            href="/Convertext/Converttext"
            className="bg-[#ff5f37] text-white py-[10px] px-[30px] text-lg rounded-lg"
          >
            Return To conver case
          </Link>
        </div>
      </div>
    </>
  );
};

export default Useterms;
