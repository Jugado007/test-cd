import React, { useState } from "react";
import Image from "next/image";
import Router from "next/router";
import { Case } from "@/Components/Json/Case";

const Texttools = () => {
    const [value, setValue] = useState(Case())

    const handleClicked = (text) => {
        Router.push(text.route)
    }

    const onHandle = (value) => {
        if (value === 'textAnalise') {
            Router.push('/Texttools/Texttools')
        }
    }

    return (
        <div>
            <div>
                <div className="flex flex-col">
                    <button onClick={() => onHandle('textAnalise')}
                        className="text-[#e27235] text-center font-bold text-[20px] md:text-4xl m-auto pt-[15px] !mb-[30px] mt-3">
                        Text Analysis Tools
                    </button>
                    <div className="flex items-center flex-col max-w-[1100px] m-auto">
                        <ul className="flex items-center flex-wrap justify-center xl:justify-start gap-6 navbar w-full texttool">
                            {value.map((text, i) => (
                                <li
                                    key={text.id}
                                    className="h-[170px] w-[200px] flex flex-col justify-center"
                                >
                                    <button
                                        onClick={() => handleClicked(text)}
                                        className="btn btn-border-3 shadow-md rounded-lg h-[68px] m-auto w-[68px] flex items-center justify-center"
                                    >
                                        <Image alt="" src={text.smalltext} className="w-[40px]"></Image>
                                    </button>
                                    <h3 className="text-center lg:text-[16px] text-sm font-semibold max-w-[140px] m-auto mt-[20px]">
                                        {text.data}
                                    </h3>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Texttools;
