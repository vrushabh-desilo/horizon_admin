import React from 'react'
import { Image } from 'primereact/image';
import logo from '../../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='2lg:block hidden'>
            <div className='w-[300px] bg-[#fff]  overflow-auto h-screen'>
                <div className='logo p-[55px] border-b border-[#F4F7FE]'>
                    <Link to='/'>
                        <Image width={300} height={300} src={logo} alt="Image" unoptimized />
                    </Link>
                </div>
                <div className='h-[calc(100vh_-_132px)] overflow-auto ps-[33px] py-[40px] flex flex-col justify-between'>
                    <div className='flex flex-col gap-[26px] text-[16px] font-[500] leading-[30px] mb-[100px]'>
                        <div className='relative group'>
                            <NavLink to='/'>
                                <div className='flex items-center gap-[12px]'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_201_2912)">
                                                <path className='group-hover:fill-[#4318FF] transition-all duration-300' d="M10.0001 19V14H14.0001V19C14.0001 19.55 14.4501 20 15.0001 20H18.0001C18.5501 20 19.0001 19.55 19.0001 19V12H20.7001C21.1601 12 21.3801 11.43 21.0301 11.13L12.6701 3.59997C12.2901 3.25997 11.7101 3.25997 11.3301 3.59997L2.9701 11.13C2.6301 11.43 2.8401 12 3.3001 12H5.0001V19C5.0001 19.55 5.4501 20 6.0001 20H9.0001C9.5501 20 10.0001 19.55 10.0001 19Z" fill="#A3AED0" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_201_2912">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p className='text-[#A3AED0] group-hover:text-[#2B3674] transition-all duration-300'>Dashboard</p>
                                </div>
                                <div className='right-border'></div>
                            </NavLink>
                        </div>
                        <div className='relative group'>
                            <NavLink to='/nft'>
                                <div className='flex items-center gap-[12px]'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_201_2909)">
                                                <path className='group-hover:fill-[#4318FF] transition-all duration-300' d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="#A3AED0" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_201_2909">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p className='text-[#A3AED0] group-hover:text-[#2B3674] transition-all duration-300'>NFT Marketplace</p>
                                </div>
                                <div className='right-border'></div>
                            </NavLink>
                        </div>
                        <div className='relative group'>
                            <NavLink to='/table'>
                                <div className='flex items-center gap-[12px]'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                            <g clip-path="url(#clip0_201_2906)">
                                                <path className='group-hover:fill-[#4318FF] transition-all duration-300' d="M7.46683 10.7333H7.70016C8.5985 10.7333 9.3335 11.4683 9.3335 12.3667V20.5333C9.3335 21.4317 8.5985 22.1667 7.70016 22.1667H7.46683C6.5685 22.1667 5.8335 21.4317 5.8335 20.5333V12.3667C5.8335 11.4683 6.5685 10.7333 7.46683 10.7333ZM14.0002 5.83334C14.8985 5.83334 15.6335 6.56834 15.6335 7.46668V20.5333C15.6335 21.4317 14.8985 22.1667 14.0002 22.1667C13.1018 22.1667 12.3668 21.4317 12.3668 20.5333V7.46668C12.3668 6.56834 13.1018 5.83334 14.0002 5.83334ZM20.5335 15.1667C21.4318 15.1667 22.1668 15.9017 22.1668 16.8V20.5333C22.1668 21.4317 21.4318 22.1667 20.5335 22.1667C19.6352 22.1667 18.9002 21.4317 18.9002 20.5333V16.8C18.9002 15.9017 19.6352 15.1667 20.5335 15.1667Z" fill="#A3AED0" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_201_2906">
                                                    <rect width="28" height="28" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p className='text-[#A3AED0] group-hover:text-[#2B3674] transition-all duration-300'>Tables</p>
                                </div>
                                <div className='right-border'></div>
                            </NavLink>
                        </div>
                        <div className='relative group'>
                            <NavLink to='/kanban'>
                                <div className='flex items-center gap-[12px]'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_201_2903)">
                                                <path className='group-hover:fill-[#4318FF] transition-all duration-300' d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z" fill="#A3AED0" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_201_2903">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p className='text-[#A3AED0] group-hover:text-[#2B3674] transition-all duration-300'>Kanban</p>
                                </div>
                                <div className='right-border'></div>
                            </NavLink>
                        </div>
                        <div className='relative group'>
                            <NavLink to='/profile'>
                                <div className='flex items-center gap-[12px]'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_201_2900)">
                                                <path className='group-hover:fill-[#4318FF] transition-all duration-300' d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z" fill="#A3AED0" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_201_2900">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p className='text-[#A3AED0] group-hover:text-[#2B3674] transition-all duration-300'>Profile</p>
                                </div>
                                <div className='right-border'></div>
                            </NavLink>
                        </div>
                        <div className='relative group'>
                            <NavLink to='/signIn'>
                                <div className='flex items-center gap-[12px]'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_201_2895)">
                                                <path className='group-hover:fill-[#4318FF] transition-all duration-300' d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM9 8V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9Z" fill="#A3AED0" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_201_2895">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p className='text-[#A3AED0] group-hover:text-[#2B3674] transition-all duration-300'>Sign In</p>
                                </div>
                                <div className='right-border'></div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="rounded-[24px] px-[27px] pt-[72px] pb-[40px] bg-gradient-to-br from-[#868CFF] to-[#4318FF] relative mr-[30px]">
                        <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <div className='h-[94px] w-[94px] bg-gradient-to-br from-[#868CFF] to-[#4318FF] mx-auto border-[5px] border-white rounded-full relative'>
                                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                        <path d="M10.0923 27.3033H30.8176V36.3143H10.0923V27.3033Z" fill="white" />
                                        <path d="M31.5385 29.1956C31.5385 26.2322 30.3707 23.3901 28.2922 21.2947C26.2136 19.1992 23.3945 18.022 20.4549 18.022C17.5154 18.022 14.6963 19.1992 12.6177 21.2947C10.5392 23.3901 9.37143 26.2322 9.37143 29.1956L20.4549 29.1956H31.5385Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 31.989C26.8452 31.989 31.989 26.8452 31.989 20.5C31.989 14.1548 26.8452 9.01099 20.5 9.01099C14.1548 9.01099 9.01099 14.1548 9.01099 20.5C9.01099 26.8452 14.1548 31.989 20.5 31.989ZM20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8218 9.17816 41 20.5 41Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-white leading-[28px] font-bold text-center'>Upgrade to PRO</p>
                            <p className='text-white text-[14px] leading-[24px] font-medium text-center'>to get access to all features! Connect with Venus World! </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
