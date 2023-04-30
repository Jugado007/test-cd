import React, { useState } from 'react';
import Image from 'next/image';
import Router from 'next/router';
import { Convertor } from '../../Components/Json/Convertor';

const Textconvert = () => {
    const [data, setData] = useState(Convertor())

    const handleClicked = (cnvtext) => {
        Router.push(cnvtext.route)
    }

    const onHandle = (value) => {
        if (value === 'convert') {
            Router.push('/Textconvert/Textconvert')
        }
    }

    return (   
        <div><div className="flex items-center mb-[20px] min-h-[250px] bg-[#80808014] max-w-[700px] m-auto">
            <div></div>
            <div></div>
        </div>
            <div className="mt-[30px] flex flex-col">
                <button onClick={() => onHandle('convert')} className="text-[#e27235] font-bold text-[20px] md:text-4xl pt-[15px] sm:w-[400px] m-auto  mb-[30px]">
                    Text Convertors Tools
                </button>
                <div className="flex items-center flex-col max-w-[1100px] m-auto">
                    <ul className="flex items-center flex-wrap justify-center xl:justify-start gap-6 navbar w-full">
                        {data.map((cnvtext, id) => {
                            return (
                                <li
                                    key={id}
                                    className="h-[170px] w-[200px] flex flex-col justify-center"
                                >
                                    <button
                                        onClick={() => handleClicked(cnvtext)}
                                        className="btn btn-border-3 shadow-md rounded-lg h-[68px] m-auto w-[68px] flex items-center justify-center"
                                    >
                                        <Image
                                            alt=""
                                            src={cnvtext.smalltext}
                                            className="w-[40px]"
                                        ></Image>
                                    </button>
                                    <h3 className="text-center lg:text-[16px] text-sm font-semibold max-w-[140px] m-auto mt-[20px]">
                                        {cnvtext.more}
                                    </h3>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div></div>
    )
}

export default Textconvert;