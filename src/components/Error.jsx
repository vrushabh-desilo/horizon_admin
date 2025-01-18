import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <main className='h-[calc(100vh_-_80px)] w-full flex flex-col justify-center items-center bg-transparent'>
                <h1 className='text-9xl font-extrabold dark:text-[#f8f8f8] text-[#1d1d1d] tracking-widest'>
                    404
                </h1>
                <div className='dark:bg-[#E04B9D] bg-[#8335A4] px-2 text-sm rounded rotate-12 absolute'>
                     Not Found
                </div>
                <button className='mt-5'>
                    <div className='relative inline-block text-sm font-medium text-[#f8f8f8] group active:text-[#f8f8f8] focus:outline-none focus:ring'>
                        <NavLink to='/'>
                            <button
                                lable='Go Home'
                                className='py-[10px] px-[12px] rounded-[8px] text-[#f8f8f8]'
                            />
                        </NavLink>
                    </div>
                </button>
            </main>
        </div>
    )
}

export default Error
