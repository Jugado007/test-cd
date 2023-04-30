import React from "react";
import Image from "next/image";
import Router from "next/router";
import small_converter_logo from "../../Assets/Images/small_converter_logo.png"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const onHandle = () => {
        Router.push('/')
}

const onHandleAnalysis = () => {
    Router.push('/Texttools/Texttools')
}

const onHandleGenerator = () => {
    Router.push('/Textgenerate/Textgenerate')
}

const onHandleConvertors = () => {
    Router.push('/Textconvert/Textconvert')
}

const Header = () => {
    return (
        <div className='bg-white  border'>
            <div className='max-w-[1260px] m-auto py-3 px-[15px]'>
                <div className='flex items-center justify-between'>
                    <div onClick={()=>onHandle()}>
                    <Image
                        alt=""
                        src={small_converter_logo}
                        className="w-[100px] cursor-pointer"
                    ></Image>
                    </div>
                    <><div className="hidden md:block">
                        <div className="flex items-center lg:gap-10 gap-6">
                           <a
                              onClick={()=>onHandleAnalysis()}
                              className="py-5 lg:text-base text-sm hidden md:block cursor-pointer"
                           >
                              Text Analysis Tools
                           </a>
                           <a
                              onClick={()=>onHandleGenerator()}
                              className="py-5 lg:text-base text-sm hidden md:block cursor-pointer"
                           >
                              Text Generator Tools
                           </a>
                           <a
                              onClick={()=>onHandleConvertors()}
                              className="py-5 lg:text-base text-sm hidden md:block cursor-pointer"
                           >
                              Text Convertors Tools
                           </a>
                        </div>
                     </div></>
                </div>
            </div>
        </div>
    )
}

export default Header