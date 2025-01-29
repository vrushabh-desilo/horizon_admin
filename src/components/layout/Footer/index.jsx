import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='px-[20px] lg:py-[20px] py-[16px] bg-[#F4F7FE] flex flex-col lg:flex-row justify-between items-center footer'>
            <p className='text-[14px] text-[#A3AED0] leading-[24px] text-center'>&copy; {year} Horizon UI. All Rights Reserved. Made with love by Simmmple!</p>
            <div className='flex items-center md:justify-center justify-between lg:gap-[42px] gap-[16px]  md:w-auto w-full'>
                <p className='text-[14px] text-[#A3AED0] leading-[24px]'>Marketplace</p>
                <p className='text-[14px] text-[#A3AED0] leading-[24px]'>License</p>
                <p className='text-[14px] text-[#A3AED0] leading-[24px]'>Terms of Use</p>
                <p className='text-[14px] text-[#A3AED0] leading-[24px]'>Blog</p>
            </div>
        </div>
    )
}

export default Footer
