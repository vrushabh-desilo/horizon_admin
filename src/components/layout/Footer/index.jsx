import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='px-[20px] py-[20px] bg-[#F4F7FE] flex justify-between items-center'>
            <p className='text-[14px] text-[#A3AED0] leading-[24px]'>&copy; {year} Horizon UI. All Rights Reserved. Made with love by Simmmple!</p>
            <div className='flex items-center gap-[42px]'>
                <p className='text-[14px] text-[#A3AED0] leading-[24px]'>Marketplace</p>
                <p className='text-[14px] text-[#A3AED0] leading-[24px]'>License</p>
                <p className='text-[14px] text-[#A3AED0] leading-[24px]'>Terms of Use</p>
                <p className='text-[14px] text-[#A3AED0] leading-[24px]'>Blog</p>
            </div>
        </div>
    )
}

export default Footer
