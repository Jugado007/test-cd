import React from 'react'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import { averagecalcdata } from '@/Components/Json/averagecalcdata'
import { AiOutlinePlus } from 'react-icons/ai'

const Averagecalc = () => {

    return (
        <>
            <Header />
            <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
            <div className='mainbg max-w-[1260px] m-auto px-[15px] py-[10px]'>
                <div className=''>
                    <div>
                        <h1 className='text-[16px] sm:text-[22px] text-[#e27235] md:text-2xl font-bold mb-[10px]'>Average Calculator</h1>
                        <p className='text-lg font-normal'>The Average Calculator is the best option for you to find the average of numbers within no time. You can also get assistance from this Mean calculator in the calculation of the mean of a massive set of numbers without any hassle.</p>
                    </div>
                    <div className='flex bg-[#80808014] max-w-[700px] m-auto items-center my-[20px] min-h-[250px]'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='max-w-[700px] m-auto'>
                        <p className='text-[#e27235] font-medium text-xl mb-5'>Values (you may enter up to 50 numbers)</p>
                        <div className='flex gap-2'>
                            <input type="number" className='w-[50%] h-[40px] border border-black focus:outline-0 px-4' />
                            <input type="number" className='w-[50%] h-[40px] border border-black focus:outline-0 px-4' />
                        </div>
                        <div className='flex gap-2 mt-4'>
                            <input type="number" className='w-[50%] h-[40px] border border-black focus:outline-0 px-4' />
                            <input type="number" className='w-[50%] h-[40px] border border-black focus:outline-0 px-4' />
                        </div>
                        <div className='mt-3'>
                            <button className='flex items-center bg-[#ffede4] h-[50px] w-[160px] justify-center'><AiOutlinePlus className='mr-2' />Add Course</button>
                        </div>
                    </div>
                    <div className="h-[98px] my-[20px] bg-[#80808014] max-w-[700px] m-auto"></div>
                    <div className='flex justify-center gap-3'>
                        <button className='bg-[#ffede4] h-[50px] w-[200px]'>Calculate Age</button>
                        <button className='bg-[#ffede4] h-[50px] w-[200px]'>Reset</button>
                    </div>
                </div>
                <div className='w-full lg:w-[900px] mt-[15px] m-auto'>
                    <div>
                        {averagecalcdata.map((data) => {
                            return (
                                <div className='card p-[15px] mb-[15px] bg-white border rounded-lg'>
                                    <h3 className='text-[26px] font-bold mb-[10px] text-[#e27235]'>{data.title}</h3>
                                    <p className='text-sm mb-[10px]'>{data.sentence}</p>
                                    <p className='text-sm mb-[10px]'>{data.tiny}</p>
                                    <p className='text-sm mb-[10px]'>{data.formula}</p>
                                    <p className='text-sm mb-[10px]'>{data.average}</p>
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

export default Averagecalc;