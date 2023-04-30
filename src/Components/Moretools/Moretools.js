import React from 'react';
import Router from 'next/router';

const handleUnicode = () => {
    Router.push('/Unicodetext/Unicodetext')
}

const handleSentence = () => {
    Router.push('/sentencecase/sentencecase')
}

const handleBubble = () => {
    Router.push('/Buubletext/Buubletext')
}

const handleInvisible = () => {
    Router.push('/Invisibletext/Invisibletext')
}

const handleCursed = () => {
    Router.push('/Cursedtext/Cursedtext')
}

const handleReplacement = () => {
    Router.push('/Repeattext/Repeattext')
}

const Moretools = () => {
    return (
        <div>
            <div className='flex bg-[#80808014]  max-w-[800px] m-auto items-center my-[20px] min-h-[250px]'>
                <div></div>
                <div></div>
            </div>
            <div className='bg-white p-5'>
                <h3 className='xl:text-xl lg:text-lg text-base font-medium mb-4'>Related Tools</h3>
                <div>
                    <button onClick={()=>handleUnicode()} className='flex items-center pl-4 border-b border-[#e27235] py-[10px] w-full xl:text-base text-sm'><span className='h-[10px] w-[10px] rounded-full mr-[10px] bg-[#e27235] border flex'></span>Unicode Converter</button>
                    <button onClick={()=>handleSentence()} className='flex items-center pl-4 border-b border-[#e27235] py-[10px] w-full xl:text-base text-sm'><span className='h-[10px] w-[10px] rounded-full mr-[10px] bg-[#e27235] border flex'></span>Sentence Converter</button>
                    <button onClick={()=>handleBubble()} className='flex items-center pl-4 border-b border-[#e27235] py-[10px] w-full xl:text-base text-sm'><span className='h-[10px] w-[10px] rounded-full mr-[10px] bg-[#e27235] border flex'></span>Bubble Generator</button>
                </div>
            </div>
            <div className='bg-white p-5 mt-5'>
                <h3 className='xl:text-xl lg:text-lg text-base font-medium mb-4'>Popular Tools</h3>
                <div>
                    <button onClick={()=>handleInvisible()} className='flex items-center pl-4 border-b border-[#e27235] py-[10px] w-full xl:text-base text-sm'><span className='h-[10px] w-[10px] rounded-full mr-[10px] bg-[#e27235] border flex'></span>Invisible Generator</button>
                    <button onClick={()=>handleCursed()} className='flex items-center pl-4 border-b border-[#e27235] py-[10px] w-full xl:text-base text-sm'><span className='h-[10px] w-[10px] rounded-full mr-[10px] bg-[#e27235] border flex'></span>Cursed Tool</button>
                    <button onClick={()=>handleReplacement()} className='flex items-center pl-4 border-b border-[#e27235] py-[10px] w-full xl:text-base text-sm'><span className='h-[10px] w-[10px] rounded-full mr-[10px] bg-[#e27235] border flex'></span>Replacement Tool</button>
                </div>
            </div>
            <div className='sticky top-0'>
                <div className='flex bg-[#80808014]  max-w-[800px] m-auto items-center my-[20px] lg:min-h-[700px] md:min-h-[500px] min-h-[250px]'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Moretools