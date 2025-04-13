import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
    return (
        <div className='bg-black text-white h-[100vh] w-[100vw] flex justify-center items-center flex-col gap-2'>
            <h1 className='text-2xl'>404</h1>
            <p>Oops! We couldn’t find that page.</p>
            <Link to='/'><button className='border-2 px-5 py-2 mt-5 rounded-[8px]'>Go Back</button></Link>
        </div>
    )
}

export default Errorpage
