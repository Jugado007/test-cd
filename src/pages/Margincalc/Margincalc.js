import React from 'react';
import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import { margincalcdata } from '@/Components/Json/margincalcdata';

const Margincalc = () => {

    return (
        <>
            <Header />
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className=''>
                    <div>
                        <h1 className='text-[16px] sm:text-[22px] text-[#e27235] md:text-2xl font-bold mb-[10px]'>Margin Calculator</h1>
                        <p className='text-lg font-normal'>Online Margin Calculator helps you to calculate the following numbers, the sale price of your product, Gross Margin, and profit.</p>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='flex justify-center gap-3'>
                        <button className='bg-[#ffede4] h-[50px] w-[200px]'>Single margin Calculate</button>
                        <button className='bg-[#ffede4] h-[50px] w-[200px]'>Multiple margin calculator</button>
                    </div>
                    <div className='max-w-[350px] m-auto'>
                        <div>
                            <label>Margin Calculator</label>
                            <select name="cars" id="cars" className='w-full focus:outline-0 p-[10px]'>
                                <option value="volvo">Profit margin calculator</option>
                                <option value="saab">Stock trading market calculator</option>
                                <option value="saab">Currency Exchange margin calculator</option>
                            </select>
                        </div>
                        <div>
                            <div className='mb-[15px]'>
                                <p className='mb-[10px]'>Cost of Item ($)</p>
                                <input type="number" className='w-full h-[40px] border border-black focus:outline-0 px-4' />
                            </div>
                            <div className='mb-[15px]'>
                                <p>Mark Up %</p>
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
                        {margincalcdata.map((data) => {
                            return (
                                <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                    <h3 className='text-[26px] font-bold mb-[10px] text-[#e27235]'>{data.title}</h3>
                                    <p className='text-sm mb-[10px]'>{data.sentence}</p>
                                    <p className='text-sm mb-[10px]'>{data.tiny}</p>
                                    <p className='text-sm mb-[10px]'><span className='text-[14px] font-semibold'>{data.step}</span>{data.detail}</p>
                                    <p className='text-sm mb-[10px]'><span className='text-[14px] font-semibold'>{data.step2}</span>{data.detail2}</p>
                                    <p className='text-sm mb-[10px]'><span className='text-[14px] font-semibold'>{data.step3}</span>{data.detail3}</p>
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

export default Margincalc;