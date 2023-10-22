import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 text-white max-w-[1240px] mx-auto px-4'>
            <h1 className='w-full text-3xl text-[#c6fbfc] font-bold'>Demo</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resource</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contacts</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav?'fixed left-0 top-0 w-[60%] border-r h-full bg-[#000300] border-gray-900 ease-in-out duration-500':'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl text-[#c6fbfc] font-bold m-4'>Demo</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-500'>Home</li>
                    <li className='p-4 border-b border-gray-500'>Company</li>
                    <li className='p-4 border-b border-gray-500'>Resource</li>
                    <li className='p-4 border-b border-gray-500'>About</li>
                    <li className='p-4'>Contacts</li>
                </ul>

            </div>


        </div>
    )
}

export default Navbar
