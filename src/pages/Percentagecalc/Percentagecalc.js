import React from 'react';
import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import { percentagedata } from '@/Components/Json/percentagedata';

const Percentagecalc = () => {

    return (
        <>
            <Header />
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className=''>
                    <div>
                        <h1 className='text-[16px] sm:text-[22px] text-[#e27235] md:text-2xl font-bold mb-[10px]'>Percentage Calculator</h1>
                        <p className='text-lg font-normal'>Our percentage calculator helps to calculate the exact percentage of numbers online. You can find the percentage in three ways, Percentage calculation in phrases, Percentage change calculation, and Percentage conversions</p>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <h2 className='mb-3 text-[22px] text-center text-[#e27235] font-bold'>Percentage Calculator in Common Phrases</h2>
                    <div className='card py-[20px]  mb-7  max-w-[700px] m-auto'>
                        <div className='px-[15px] mb-[20px]'>
                            <div className='flex items-center justify-between mb-5'>
                                <p className='text-base'>What is</p>
                                <input type="number" className='border border-black focus:outline-0 px-[10px] w-[100px] h-[40px]' />
                                <p className='text-base'>% of</p>
                                <input type="number" className='border border-black focus:outline-0 px-[10px] w-[100px] h-[40px]' />
                                <button className='bg-[#ffede4] py-[10px] px-[20px]'>Calculate</button>
                                <input type="number" className='border border-black focus:outline-0 px-[10px] w-[100px] h-[40px]' />
                            </div>
                            <div className='flex items-center justify-between mb-5'>
                                <input type="number" className='border border-black focus:outline-0 px-[10px] w-[100px] h-[40px]' />
                                <p className='text-base mx-[20px]'>is what % of</p>
                                <input type="number" className='border border-black focus:outline-0 px-[10px] w-[100px] h-[40px]' />
                                <button className='bg-[#ffede4] py-[10px] px-[20px]'>Calculate</button>
                                <input type="number" className='border border-black focus:outline-0 px-[10px] w-[100px] h-[40px]' />
                            </div>
                            <div className='flex items-center justify-between'>
                                <input type="number" className='border border-black focus:outline-0 px-[10px] w-[100px] h-[40px]' />
                                <p className='text-base'>is</p>
                                <input type="number" className='border border-black focus:outline-0 px-[10px] w-[100px] h-[40px]' />
                                <p className='text-base'>is of what?</p>
                                <button className='bg-[#ffede4] py-[10px] px-[20px]'>Calculate</button>
                                <input type="number" className='border border-black focus:outline-0 px-[10px] w-[100px] h-[40px]' />
                            </div>
                        </div>
                        {/* <div className='h-[1px] w-full bg-slate-500 my-3'></div> */}
                        <div className='flex justify-center'>
                            <button className='bg-[#ffede4] h-[40px] w-[200px]'>Reset</button>
                        </div>
                    </div>
                    <h2 className='mb-3 text-[22px] text-center text-[#e27235] font-bold'>Percentage Change</h2>
                    <div className='card py-[20px]  mb-7  max-w-[700px] m-auto'>
                        <div className='px-[15px]'>
                            <div className='flex items-center justify-between mb-5'>
                                <p className='text-base'>From</p>
                                <input type="number" className='border border-black focus:outline-0 px-[10px] w-[100px] h-[40px]' />
                                <p className='text-base'>to</p>
                                <input type="number" className='border border-black focus:outline-0 px-[10px] w-[100px] h-[40px]' />
                                <p className='text-base'>?</p>
                                <button className='bg-[#ffede4] py-[10px] px-[20px]'>Calculate</button>
                                <input type="number" className='border border-black focus:outline-0 px-[10px] w-[100px] h-[40px]' />
                            </div>
                        </div>
                        {/* <div className='h-[1px] w-full bg-slate-500 my-3'></div> */}
                        <div className='flex justify-center'>
                            <button className='bg-[#ffede4] h-[40px] w-[200px]'>Reset</button>
                        </div>
                    </div>
                    <h2 className='mb-3 text-[22px] text-center text-[#e27235] font-bold'>Percentage Conversation</h2>
                    <div className='card py-[20px]  mb-7  max-w-[700px] m-auto'>
                        <div className='flex items-center justify-between'>
                            <div className='px-[15px] mb-[20px]'>
                                <p>Percentage</p>
                                <input type="number" className='border border-black focus:outline-0 px-[10px] w-[100px] h-[40px]' />
                            </div>
                            <p>%</p>
                            <p className='border border-grey p-2 h-7 w-7 flex items-center justify-center'>=</p>
                            <div className='flex flex-col'>
                                <p>Fraction</p>
                                <input type="number" className='border border-black focus:outline-0 px-[10px] w-[100px] h-[40px] mb-[15px]' />
                                <input type="number" className='border border-black focus:outline-0 px-[10px] w-[100px] h-[40px]' />
                            </div>
                            <p className='border border-grey p-2 h-7 w-7 flex items-center justify-center'>=</p>
                            <div className='px-[15px] mb-[20px]'>
                                <p>Percentage</p>
                                <input type="number" className='border border-black focus:outline-0 px-[10px] w-[100px] h-[40px]' />
                            </div>
                        </div>
                    </div>
                    <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                </div>
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div>
                        {percentagedata.map((data) => {
                            return (
                                <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                    <h3 className='text-[26px] font-bold mb-[10px] text-[#e27235]'>{data.title}</h3>
                                    <p className='text-sm mb-[10px]'>{data.sentence}</p>
                                    <p className='text-sm mb-[10px]'>{data.tiny}</p>
                                    <p className='text-sm mb-[10px]'>{data.value}</p>
                                    <p className='text-sm mb-[10px]'>{data.answer}</p>
                                    <p className='text-sm mb-[10px]'>{data.finalans}</p>
                                    <div className='my-[14px] pl-[40px]'>
                                        <h6 className='flex'><span className='mr-[4px] pr-2'>{data.no}</span><p className='text-sm font-normal'>{data.use}</p></h6>
                                        <h6 className='flex mt-[-4px]'><span className='mr-[4px] pr-2'>{data.no1}</span><p className='text-sm font-normal'>{data.use1}</p></h6>
                                        <h6 className='flex mt-[-4px]'><span className='mr-[4px] pr-2'>{data.no2}</span><p className='text-sm font-normal'>{data.use2}</p></h6>
                                        <h6 className='flex mt-[-4px]'><span className='mr-[4px] pr-2'>{data.no3}</span><p className='text-sm font-normal'>{data.use3}</p></h6>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Percentagecalc;