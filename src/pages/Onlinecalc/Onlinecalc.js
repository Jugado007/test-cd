import React, { useState } from 'react';
import Image from 'next/image';
import { Router } from 'next/router';
import { Onlinecal } from '@/Components/Json/Onlinecal';

const Onlinecalc = () => {
    const [calc, setCalc] = useState(Onlinecal())

    const handleClicked4 = (textonline) => {
        Router.push(textonline.route)
    }

    return (
        <div>  <div className="flex items-center my-[20px] min-h-[250px] m-auto bg-[#80808014] max-w-[700px]">
            <div></div>
            <div></div>
        </div>
            <div className="mt-[30px]">
                <button className="text-[#e27235] font-bold text-[20px] md:text-4xl pt-[1flex justify-center w-full mb-[30px]">
                    Online Calculators
                </button>
                <div className="flex items-center flex-col max-w-[1100px] m-auto">
                    <ul className="flex items-center flex-wrap justify-center xl:justify-start gap-6 navbar w-full">
                        {calc.map((textonline, id) => {
                            return (
                                <li
                                    key={textonline.id}
                                    className="h-[170px] w-[200px] flex flex-col justify-center"
                                >
                                    <button
                                        onClick={() => handleClicked4(textonline)}
                                        className="bg-[#ffede4] btn rounded-full h-[85px] hover:border transition-all hover:border-[#e27235] m-auto w-[85px] flex items-center justify-center"
                                    >


                                        <Image
                                            alt=""
                                            src={textonline.smalltext}
                                            className="w-[40px]"
                                        ></Image>
                                    </button>
                                    <h3 className="text-center text-[16px] font-semibold max-w-[140px] m-auto mt-[20px]">
                                        {textonline.more}
                                    </h3>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>  </div>
    )
}

export default Onlinecalc;