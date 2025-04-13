import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar = ({ arrow }) => {
    return (
        <div className='max-w-[1550px] mx-auto'>
            <div className='flex justify-between items-center sm:px-10 px-5 py-4 shadow-sm'>
                {arrow ? <Link to=''><p className='cursor-pointer border-1 px-2 flex justify-center items-center border-[#0000002f] rounded-[8px] hover:bg-gray-100 duration-200'>{arrow}</p></Link> : <p></p>}
                <p className='text-[16px] font-medium'>Sentence Construction</p>
                <CiMenuKebab size={20} />
            </div>
        </div>
    )
}

export default Navbar
