import React from 'react'
import { MdEditNote } from "react-icons/md";
import { Link } from 'react-router-dom';

const SentanceConstruction = () => {
    return (
        <>
            <div className='flex flex-col max-w-[1550px] mx-auto justify-center items-center py-10'>
                <div className='max-w-[750px] flex flex-col justify-center items-center gap-5 py-10'>
                    <MdEditNote size={80} color='grey' />
                    <div className='flex justify-center items-center flex-col gap-5 mb-10'>
                        <h1 className='text-5xl font-bold'>Sentence Construction</h1>
                        <p className='text-[20px] text-center'>Select the correct words to complete the sentence by arranging
                            the provided options in the right order.</p>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='flex flex-col justify-center items-center border-r-1 px-12'>
                            <p>Time Per Question</p>
                            <p>30 sec</p>
                        </div>
                        <div className='flex flex-col justify-center items-center border-r-1 px-12'>
                            <p>Total Questions</p>
                            <p>10</p>
                        </div>
                        <div className='flex flex-col justify-center items-center px-12'>
                            <p>Coins</p>
                            <p>🪙0</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-5 mt-5'>
                        <button className='px-12 py-2 text-[20px] border-2 rounded-2xl text-blue-600'>Back</button>
                        <Link to='/questions'><button className='px-12 py-2 text-[20px] rounded-2xl bg-blue-600 text-white hover:bg-blue-800 duration-200'>Start</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SentanceConstruction
