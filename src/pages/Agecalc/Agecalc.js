import React from 'react';
import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import { ageclac } from '@/Components/Json/ageclac';
import { AiOutlineCalendar } from "react-icons/ai";

const Agecalc = () => {
    
    return (
        <>
            <Header />
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className=''>
                    <div>
                        <h1 className='text-[16px] sm:text-[22px] text-[#e27235] md:text-2xl font-bold mb-[10px]'>Age Calculator</h1>
                        <p className='text-lg font-normal'>Age calculator online helps you find your age from date of birth or interval between two dates. Calculate age in years, months, weeks, days, hours, minutes, and seconds.</p>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='card mb-7 py-[20px] max-w-[500px] m-auto'>
                        <div>
                            <div className='flex items-center justify-center pb-[16px]'>
                                <AiOutlineCalendar className='text-[#e27235] text-[26px]' />
                                <h2 className='text-[20px] font-normal'>Select Your Date Of Birth</h2>
                            </div>
                            <div className='max-w-[400px] m-auto flex items-center justify-between'>
                                <div>
                                    <select name="cars" id="cars" className='focus:outline-0 p-[10px] w-[100px]'>
                                        <option value="volvo">2023</option>
                                        <option value="saab">2022</option>
                                        <option value="saab">2022</option>
                                        <option value="saab">2022</option>
                                        <option value="saab">2022</option>
                                        <option value="saab">2022</option>
                                        <option value="saab">2022</option>
                                        <option value="saab">2022</option>
                                        <option value="saab">2022</option>
                                        <option value="saab">2022</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="cars" id="cars" className='focus:outline-0 p-[10px] w-[180px]'>
                                        <option value="volvo">January</option>
                                        <option value="saab">February</option>
                                        <option value="saab">March</option>
                                        <option value="saab">April</option>
                                        <option value="saab">May</option>
                                        <option value="saab">June</option>
                                        <option value="saab">July</option>
                                        <option value="saab">August</option>
                                        <option value="saab">Septemer</option>
                                        <option value="saab">Octomber</option>
                                        <option value="saab">November</option>
                                        <option value="saab">December</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="cars" id="cars" className='focus:outline-0 p-[10px] w-[100px]'>
                                        <option value="volvo">1</option>
                                        <option value="saab">2</option>
                                        <option value="saab">3</option>
                                        <option value="saab">4</option>
                                        <option value="saab">5</option>
                                        <option value="saab">6</option>
                                        <option value="saab">7</option>
                                        <option value="saab">8</option>
                                        <option value="saab">9</option>
                                        <option value="saab">10</option>
                                        <option value="saab">11</option>
                                        <option value="saab">12</option>
                                    </select>
                                </div>
                            </div>
                            <div className='h-[1px] w-full bg-slate-500 my-3'></div>
                        </div>
                        <div>
                            <div className='flex mt-[30px] items-center justify-center pb-[16px]'>
                                <AiOutlineCalendar className='text-[#e27235] text-[26px]' />
                                <h2 className='text-[20px] font-normal'>Today's Date</h2>
                            </div>
                            <div className='max-w-[400px] m-auto flex items-center justify-between'>
                                <div>
                                    <select name="cars" id="cars" className='focus:outline-0 p-[10px] w-[100px]'>
                                        <option value="volvo">2023</option>
                                        <option value="saab">2022</option>
                                        <option value="saab">2022</option>
                                        <option value="saab">2022</option>
                                        <option value="saab">2022</option>
                                        <option value="saab">2022</option>
                                        <option value="saab">2022</option>
                                        <option value="saab">2022</option>
                                        <option value="saab">2022</option>
                                        <option value="saab">2022</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="cars" id="cars" className='focus:outline-0 p-[10px] w-[180px]'>
                                        <option value="volvo">January</option>
                                        <option value="saab">February</option>
                                        <option value="saab">March</option>
                                        <option value="saab">April</option>
                                        <option value="saab">May</option>
                                        <option value="saab">June</option>
                                        <option value="saab">July</option>
                                        <option value="saab">August</option>
                                        <option value="saab">Septemer</option>
                                        <option value="saab">Octomber</option>
                                        <option value="saab">November</option>
                                        <option value="saab">December</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="cars" id="cars" className='focus:outline-0 p-[10px] w-[100px]'>
                                        <option value="volvo">1</option>
                                        <option value="saab">2</option>
                                        <option value="saab">3</option>
                                        <option value="saab">4</option>
                                        <option value="saab">5</option>
                                        <option value="saab">6</option>
                                        <option value="saab">7</option>
                                        <option value="saab">8</option>
                                        <option value="saab">9</option>
                                        <option value="saab">10</option>
                                        <option value="saab">11</option>
                                        <option value="saab">12</option>
                                    </select>
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
                        {ageclac.map((data) => {
                            return (
                                <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                    <h3 className='text-[30px] font-bold mb-[10px] text-[#e27235]'>{data.title}</h3>
                                    <div className='my-[14px] pl-[40px]'>
                                        <h6 className='flex'><span className='mr-[4px] pr-[8px]'>{data.no}</span><p className='text-sm font-normal'>{data.use}</p></h6>
                                        <h6 className='flex mt-[-4px]'><span className='mr-[4px] pr-[8px]'>{data.no1}</span><p className='text-sm font-normal'>{data.use1}</p></h6>
                                        <h6 className='flex mt-[-4px]'><span className='mr-[4px] pr-[8px]'>{data.no2}</span><p className='text-sm font-normal'>{data.use2}</p></h6>
                                    </div>
                                    <p className='text-sm mb-[10px]'>{data.sentence}</p>
                                    <p className='text-sm mb-[10px]'>{data.tiny}</p>
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

export default Agecalc