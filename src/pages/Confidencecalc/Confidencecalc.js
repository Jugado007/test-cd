import React from 'react'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import { confidenetcalc } from '@/Components/Json/confidenetcalc'

const Confidencecalc = () => {

    return (
        <>
            <Header />
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className=''>
                    <div>
                        <h1 className='text-[16px] sm:text-[22px] text-[#e27235] md:text-2xl font-bold mb-[10px]'>Confidence Interval Calculator</h1>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='max-w-[350px] m-auto'>
                        <div>
                            <div className='mb-[15px]'>
                                <p className='mb-[10px]'>Sample Mean (x)</p>
                                <input type="number" className='w-full h-[40px] border border-black focus:outline-0 px-4' />
                            </div>
                            <div className='mb-[15px]'>
                                <p>Sample Size (n)</p>
                                <input type="number" className='w-full h-[40px] border border-black focus:outline-0 px-4' />
                            </div>
                            <div className='mb-[15px]'>
                                <p>Sample Size (n)</p>
                                <input type="number" className='w-full h-[40px] border border-black focus:outline-0 px-4' />
                            </div>
                            <div className='mb-[15px] gap-3 flex items-center'>
                                <div className='w-[50%]'>
                                    <p>Confidence Level</p>
                                    <select name="cars" id="cars" className='w-full focus:outline-0 p-[10px]'>
                                        <option value="volvo">50%</option>
                                        <option value="saab">66.50%</option>
                                        <option value="saab">30%</option>
                                        <option value="saab">10%</option>
                                        <option value="saab">50%</option>
                                        <option value="saab">10%</option>
                                        <option value="saab">20.50%</option>
                                        <option value="saab">80%</option>
                                        <option value="saab">10.2%</option>
                                        <option value="saab">96.95%</option>
                                        <option value="saab">11.8%</option>
                                        <option value="saab">12%</option>
                                    </select>
                                </div>
                                <div className='w-[50%]'>
                                    <p>or Z-score (Z)</p>
                                    <input type="number" className='w-full h-[40px] border border-black focus:outline-0 px-4' />
                                </div>
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
                        {confidenetcalc.map((data) => {
                            return (
                                <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                    <h3 className='text-[26px] font-bold mb-[10px] text-[#e27235]'>{data.title}</h3>
                                    <p className='text-sm mb-[10px]'>{data.sentence}</p>
                                    <p className='text-sm mb-[10px]'>{data.tiny}</p>
                                    <p className='text-sm mb-[10px]'>{data.interval}</p>
                                    <p className='text-sm mb-[10px]'>{data.symbol}</p>
                                    <p className='text-sm mb-[10px]'>{data.xdata}</p>
                                    <p className='text-sm mb-[10px]'>{data.zdata}</p>
                                    <p className='text-sm mb-[10px]'>{data.sdata}</p>
                                    <p className='text-sm mb-[10px]'>{data.ndata}</p>
                                    <div className='my-[14px] px-[40px] flex flex-col gap-2'>
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

export default Confidencecalc;