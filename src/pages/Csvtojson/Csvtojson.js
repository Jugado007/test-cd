import React from 'react'
import Footer from '@/Components/Footer/Footer'
import Textarea from '../Textarea/Textarea'
import { Csvtext } from '@/Components/Json/Csvtext'
import Header from '@/Components/Header/Header'

const Csvtojson = () => {

    return (
        <>
            <div>
                <Header />
                <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>

                <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                    <div className=''>
                        <div>
                            <h1 className='text-[16px] sm:text-[22px] md:text-2xl  text-[#e27235] font-bold mb-[10px]'>Convert CSV to JSON and JSON to CSV</h1>
                            <p className='text-sm font-normal'>This is a simple tool that allows you to convert CSV to JSON and vice versa JSON to CSV as well. Simply copy and paste your code into the corresponding field and see it get converted back in the next field.</p>
                        </div>
                        <div className='h-[98px]'></div>
                        <Textarea />
                        <div className='flex items-center my-[20px] min-h-[250px]'>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                        <div>
                            {Csvtext.map((data) => {
                                return (
                                    <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                        <h3 className='text-[15px] font-bold mb-[10px]  text-[#e27235]'>{data.title}</h3>
                                        <p className='text-sm mb-[10px]'>{data.sentence}</p>
                                        <p className='text-sm mb-[10px]'>{data.subtitle}</p>
                                        <p className='text-sm mb-[10px]'>{data.text}</p>
                                        <p className='text-sm mb-[10px]'>{data.covert}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Csvtojson;