import React from 'react'
import { CiMenuKebab } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className='max-w-[1550px] mx-auto'>
            <div className='flex justify-between items-center px-10 py-4 shadow-sm'>
                <p></p>
                <p className='text-[16px] font-medium'>Sentence Construction</p>
                <CiMenuKebab size={20} />
            </div>
        </div>
    )
}

export default Navbar
