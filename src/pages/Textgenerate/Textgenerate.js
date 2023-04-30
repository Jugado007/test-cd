import React, { useState } from 'react';
import Router from "next/router";
import Image from 'next/image';
import { Moretext } from "@/Components/Json/Moretext";

const Textgenerate = () => {
    const [open, setOpen] = useState(Moretext())

    const handleClicked = (texts) => {
        Router.push(texts.route)
    }
    const onHandle = (value) => {
        if (value === 'texts') {
            Router.push('/Textgenerate/Textgenerate')
        }
    }

    return (
        <div><div className="flex items-center mb-[20px] min-h-[250px] bg-[#80808014] max-w-[700px] m-auto">
            <div></div>
            <div></div>
        </div>
            <div className='flex flex-col'>
                <button onClick={() => onHandle('texts')} className="text-[#e27235] font-bold text-[20px] md:text-4xl  sm:w-[400px] m-auto  pt-[15px] mb-[30px]">
                    Text Generator Tools
                </button>
                <div className="flex items-center flex-col max-w-[1100px] m-auto">
                    <ul className="flex items-center flex-wrap justify-center xl:justify-start gap-6 navbar w-full tooltext">
                        {open.map((texts, id) => {
                            return (
                                <li
                                    key={id}
                                    className="h-[170px] w-[200px] flex flex-col justify-center"
                                >
                                    <button
                                        onClick={() => handleClicked(texts)} className="btn btn-border-3 shadow-md rounded-lg h-[68px] m-auto w-[68px] flex items-center justify-center"
                                    >

                                        <Image
                                            alt=""
                                            src={texts.smalltext}
                                            className="w-[40px]"
                                        ></Image>

                                    </button>
                                    <h3 className="text-center lg:text-[16px] text-sm font-semibold max-w-[140px] m-auto mt-[20px]">
                                        {texts.more}
                                    </h3>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Textgenerate;