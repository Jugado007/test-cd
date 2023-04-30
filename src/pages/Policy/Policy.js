import React from "react";
import Link from "next/link";
import Header from "@/Components/Header/Header";
import { policydata } from "@/Components/Json/policydata";

const Policy = () => {
  
  return (
    <>
      <Header />
      <div>
        <div className="max-w-[1260px] m-auto bg-[#ffede461]  pb-5 px-[15px]">
          <h1 className="text-3xl my-5 font-bold">Privacy Policy</h1>
          <p className="text-sm">
            Your privacy is important to us. It is Convert Case Ltd's policy to
            respect your privacy regarding any information we may collect from
            you across our website, https://convertcase.net, and other sites we
            own and operate.
          </p>
          <h3 className="text-base font-bold">Information we collect</h3>
          <div>
            {policydata.map((data) => {
              return (
                <div className="my-4">
                  <h3 className="text-lg">{data.title}</h3>
                  <p className="text-sm mb-3">{data.subtitle}</p>
                  <p className="text-sm mb-3">{data.information}</p>
                  <p className="text-sm mb-3">{data.subinfo}</p>
                  <p className="text-sm mb-3">{data.subinfo}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-[20px]">
            <Link
              href="/Convertext/Converttext"
              className="bg-[#ff5f37] text-white py-[10px] px-[30px] text-lg rounded-lg"
            >
              Return To conver case
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;
