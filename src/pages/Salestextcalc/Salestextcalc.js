import React from 'react'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import { inclusivecalc } from '@/Components/Json/inclusivecalc'

const Salestextcalc = () => {
    
    return (
        <>
            <Header />
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className=''>
                    <div>
                        <h1 className='text-[16px] sm:text-[22px] text-[#e27235] md:text-2xl font-bold mb-[10px]'>Sales Tax Calculator</h1>
                        <p className='text-lg font-normal'>Our online Sales Tax calculator provides you with the easiest way to calculate sales tax in a few seconds. You are not required to pay a single penny for using this online sales tax calculator.</p>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='max-w-[350px] m-auto'>
                        <div className='flex gap-2 py-2'>
                            <div>
                                <input type="radio" id="Exclusive" name="fav_language" value="Exclusive" className='mr-2' />
                                <label for="html">Tax Exclusive</label>
                            </div>
                            <div>
                                <input type="radio" id="Inclusive" name="fav_language" value="Inclusive" className='mr-2' />
                                <label for="css">Tax Inclusive</label>
                            </div>
                        </div>
                        <div>
                            <div className='mb-[15px]'>
                                <p className='mb-[10px]'>Amount</p>
                                <input type="number" className='w-full h-[40px] border border-black focus:outline-0 px-4' />
                            </div>
                            <div className='mb-[15px]'>
                                <p>Sales Tax Rate</p>
                                <input type="number" className='w-full h-[40px] border border-black focus:outline-0 px-4' />
                            </div>
                        </div>
                    </div>
                    <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                    <div className='flex justify-center gap-3'>
                        <button className='bg-[#ffede4] h-[50px] w-[200px]'>Calculate Age</button>
                        <button className='bg-[#ffede4] h-[50px] w-[200px]'>Reset</button>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div>
                        {inclusivecalc.map((data) => {
                            return (
                                <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                    <h3 className='text-[26px] font-bold mb-[10px] text-[#e27235]'>{data.title}</h3>
                                    <p className='text-sm mb-[10px]'>{data.sentence}</p>
                                    <p className='text-sm mb-[10px]'>{data.tiny}</p>
                                    <p className='text-sm mb-[10px]'>{data.interval}</p>
                                    <p className='text-sm mb-[10px]'>{data.symbol}</p>
                                    <div className='my-[14px] px-[40px] flex flex-col gap-2'>
                                        <h6 className='flex'><span className='mr-[4px] pr-2'>{data.no}</span><p className='text-sm font-normal'>{data.use}</p></h6>
                                        <h6 className='flex mt-[-4px]'><span className='mr-[4px] pr-2'>{data.no1}</span><p className='text-sm font-normal'>{data.use1}</p></h6>

                                    </div>
                                    <p className='text-sm mb-[10px]'>{data.xdata}</p>
                                    <div className='my-[14px] px-[40px] flex flex-col gap-2'>
                                        <h6 className='flex mt-[-4px]'><span className='mr-[4px] pr-2'>{data.no2}</span><p className='text-sm font-normal'>{data.use2}</p></h6>
                                        <h6 className='flex mt-[-4px]'><span className='mr-[4px] pr-2'>{data.no3}</span><p className='text-sm font-normal'>{data.use3}</p></h6>
                                        <h6 className='flex mt-[-4px]'><span className='mr-[4px] pr-2'>{data.no4}</span><p className='text-sm font-normal'>{data.use4}</p></h6>
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

export default Salestextcalc;