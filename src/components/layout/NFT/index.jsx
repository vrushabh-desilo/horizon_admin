import { Image } from 'primereact/image';
import userProfile from '../../../assets/images/Elipse 5.png';
import { InputText } from 'primereact/inputtext'
import React, { useRef, useState } from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Slider } from 'primereact/slider';
import { Menu } from 'primereact/menu';
import Mobile_Menu from '../Mobile_Menu';


const NFT = () => {
    const [value, setValue] = useState('');
    const menuLeft = useRef(null);
    const items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Refresh',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Export',
                    icon: 'pi pi-upload'
                }
            ]
        }
    ];
    const [top_Creators, setTop_Creators] = useState([
        {
            name: '@maddison_c21',
            artworks: '9821',
            rating: '100'
        },
        {
            name: '@karl.will02',
            artworks: '7032',
            rating: '90'
        },
        {
            name: '@andreea.1z',
            artworks: '5204',
            rating: '80'
        },
        {
            name: '@abraham47.y',
            artworks: '4309',
            rating: '70'
        },
        {
            name: '@simmmple.web',
            artworks: '3871',
            rating: '65'
        },
        {
            name: '@venus.sys',
            artworks: '3152',
            rating: '60'
        },
        {
            name: '@ape.vpp8',
            artworks: '2907',
            rating: '50'
        },
        {
            name: '@leon_pwrr',
            artworks: '2309',
            rating: '40'
        },
    ]);
    const handleSliderChange = (value, index) => {
        const updatedData = [...top_Creators];
        updatedData[index].process = `${value}`;
        setTop_Creators(updatedData);
    };

    const sliderDataBody = (rowData, index) => {
        const numericProcess = parseInt(rowData.rating); // Convert "78%" to 78
        return (
            <Slider

                value={numericProcess}
                onChange={(e) => handleSliderChange(e.value, index)}
                className="w-full rounded-[21px] slider-range h-[8px]"
                step={1}
                min={0}
                max={100}
            // disabled={true}
            />
        );
    };

    return (
        <div className="">
            <div className="  flex justify-between items-center sticky top-0 pt-[40px] bg-[#F4F7FE] pb-[30px] z-[99]">
                <div className="">
                    <div className="flex items-center text-[#707EAE] gap-[5px]">
                        <p>Pages</p>
                        <span>/</span>
                        <p>NFT Marketplace</p>
                    </div>
                    <h1 className="font-bold text-[34px] leading-[42px]">
                        NFT Marketplace
                    </h1>
                </div>
                <div className="bg-white p-[10px] rounded-[30px] flex items-center 2md:gap-[20px] gap-[16px]">
                    <div className="2sm:flex hidden items-center gap-[10px] rounded-[49px]  px-[20px] py-[10px] bg-[#F4F7FE]">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="12"
                                viewBox="0 0 11 12"
                                fill="none"
                            >
                                <circle
                                    cx="5"
                                    cy="5"
                                    r="4.3"
                                    stroke="#2B3674"
                                    stroke-width="1.4"
                                />
                                <line
                                    x1="10.0101"
                                    y1="11"
                                    x2="8"
                                    y2="8.98995"
                                    stroke="#2B3674"
                                    stroke-width="1.4"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </div>
                        <InputText
                            className="bg-transparent  focus:outline-none focus:shadow-none text-[14px] leading-[20px]"
                            placeholder="Search"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    {/* notifaction */}
                    <div className='cursor-pointer 2sm:flex hidden' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_201_2884)">
                                <path
                                    d="M19.2901 17.29L18.0001 16V11C18.0001 7.93 16.3601 5.36 13.5001 4.68V4C13.5001 3.17 12.8301 2.5 12.0001 2.5C11.1701 2.5 10.5001 3.17 10.5001 4V4.68C7.63005 5.36 6.00005 7.92 6.00005 11V16L4.71005 17.29C4.08005 17.92 4.52005 19 5.41005 19H18.5801C19.4801 19 19.9201 17.92 19.2901 17.29ZM16.0001 17H8.00005V11C8.00005 8.52 9.51005 6.5 12.0001 6.5C14.4901 6.5 16.0001 8.52 16.0001 11V17ZM12.0001 22C13.1001 22 14.0001 21.1 14.0001 20H10.0001C10.0001 21.1 10.8901 22 12.0001 22Z"
                                    fill="#A3AED0"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_201_2884">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
                    </div>
                    {/* night mode */}
                    <div className='cursor-pointer 2sm:flex hidden' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_201_2097)">
                                <path
                                    d="M9.95703 18C12.733 18 15.2684 16.737 16.9481 14.6675C17.1966 14.3613 16.9256 13.9141 16.5416 13.9872C12.1751 14.8188 8.16522 11.4709 8.16522 7.06303C8.16522 4.52398 9.52444 2.18914 11.7335 0.931992C12.074 0.738211 11.9884 0.221941 11.6015 0.150469C11.059 0.0504468 10.5086 8.21369e-05 9.95703 0C4.98914 0 0.957031 4.02578 0.957031 9C0.957031 13.9679 4.98281 18 9.95703 18Z"
                                    fill="#A3AED0"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_201_2097">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    {/*  */}
                    <div className='cursor-pointer 2sm:flex hidden' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_201_2879)">
                                <path
                                    d="M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                                    fill="#A3AED0"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_201_2879">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    {/* user-profile */}
                    <div className="2md:w-[50px] w-[40px] rounded-full overflow-auto cursor-pointer" label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                        <Image
                            width={300}
                            height={300}
                            className=""
                            src={userProfile}
                            alt="Image"
                            unoptimized
                        />
                    </div>
                    <div className='2lg:hidden block cursor-pointer'>
                        <Mobile_Menu />
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='2lg:grid 2lg:grid-cols-3 gap-[20px]'>
                    <div className='w-full col-span-2'>
                        <div className='md:py-[56px] md:ps-[64px] nft-bg relative'>
                            <div className='md:absolute md:max-w-[370px] w-auto'>
                                <p className='md:text-[34px] text-[20px] font-bold md:leading-[42px] leading-[normal] text-white'>Discover, collect, and sell extraordinary NFTs</p>
                                <p className='text-[16px] font-medium leading-[28px] text-[#E3DAFF] pt-[14px]'>Enter in this creative world. Discover now the latest NFTs or start creating your own!</p>
                                <div className='flex md:justify-between justify-start items-center md:mt-[50px] 2sm:mt-[40px] sm:mt-[50px] mt-[36px]'>
                                    <div className='text-[14px] leading-[24px] font-bold text-black rounded-[16px] px-[27px] py-[11px] bg-white hover:bg-[#4318FF] hover:text-white transition-all duration-300 cursor-pointer'>
                                        Discover now
                                    </div>
                                    <p className='text-[16px] font-[500] leading-[24px] text-[#E9E3FF] rounded-[16px] px-[27px] py-[11px] hover:bg-[#fff] hover:text-black transition-all duration-300 cursor-pointer'>Watch video</p>
                                </div>
                            </div>
                        </div>
                        <div className='py-[20px]'>
                            <div className=' relative'>
                                <p className='mb-[20px] text-[24px] font-bold leading-[32px] text-[#2B3674]'>Trending NFTs</p>
                                <div className='w-full nft-tabs'>
                                    <TabView>
                                        <TabPanel header="Art">
                                            <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px]'>
                                                <div className='p-[17px] bg-white rounded-[20px]'>
                                                    <div className='rounded-[18px] overflow-auto w-full trending-nft-img relative '>
                                                        <Image width={300} height={300} src='https://dummyimage.com/308x205/E9E3Ff/1d1d1f' className='rounded-[18px] overflow-auto w-full' alt="Image" unoptimized />
                                                        <div className='absolute top-[14px] right-[14px] group cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                                                <rect className='group-hover:fill-[#4318FF] transition-all duration-300' width="34.3736" height="34" rx="17" fill="white" />
                                                                <path className='group-hover:fill-[#fff] transition-all duration-300' d="M22.9437 11.4004C20.9594 9.99151 18.5091 10.649 17.1862 12.2614C15.8633 10.649 13.413 9.98369 11.4287 11.4004C10.3764 12.1518 9.71494 13.4198 9.66984 14.7582C9.56462 17.7952 12.1502 20.2294 16.0963 23.963L16.1715 24.0334C16.7427 24.5735 17.6221 24.5735 18.1934 24.0256L18.2761 23.9473C22.2221 20.2216 24.8002 17.7874 24.7025 14.7504C24.6574 13.4198 23.996 12.1518 22.9437 11.4004ZM17.2613 22.7967L17.1862 22.875L17.111 22.7967C13.5332 19.4232 11.1731 17.1925 11.1731 14.9304C11.1731 13.365 12.3006 12.1909 13.8038 12.1909C14.9613 12.1909 16.0888 12.9658 16.4872 14.0381H17.8927C18.2836 12.9658 19.411 12.1909 20.5685 12.1909C22.0718 12.1909 23.1993 13.365 23.1993 14.9304C23.1993 17.1925 20.8391 19.4232 17.2613 22.7967Z" fill="#4318FF" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className='2xl:flex justify-between items-center'>
                                                        <div className='2xl:pt-[20px] pt-[10px]'>
                                                            <p className='text-[18px] font-bold leading-[30px]'>Abstract Colors</p>
                                                            <p className='text-[14px] font-normal leading-[20px] text-[#A3AED0] 2xl:mb-0 mb-[8px]'>By Esthera Jackson</p>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px] font-bold text-[9px] flex items-center justify-center'>18+</div>
                                                        </div>
                                                    </div>
                                                    <div className='pt-[25px] 2xl:flex justify-between items-center 2xl:mt-0'>
                                                        <p className='mb-[8px] text-[#4318FF] text-[14px] font-bold leading-[24px]'>Current Bid: 2.30 ETH</p>
                                                        <div className='w-fit rounded-[70px] px-[24px] py[5px] bg-[#11047A] text-white font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 '>
                                                            Place Bid
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='p-[17px] bg-white rounded-[20px]'>
                                                    <div className='rounded-[18px] overflow-auto w-full trending-nft-img relative'>
                                                        <Image width={300} height={300} src='https://dummyimage.com/308x205/E9E3Ff/1d1d1f' className='rounded-[18px] overflow-auto w-full' alt="Image" unoptimized />
                                                        <div className='absolute top-[14px] right-[14px] group cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                                                <rect className='group-hover:fill-[#4318FF] transition-all duration-300' width="34.3736" height="34" rx="17" fill="white" />
                                                                <path className='group-hover:fill-[#fff] transition-all duration-300' d="M22.9437 11.4004C20.9594 9.99151 18.5091 10.649 17.1862 12.2614C15.8633 10.649 13.413 9.98369 11.4287 11.4004C10.3764 12.1518 9.71494 13.4198 9.66984 14.7582C9.56462 17.7952 12.1502 20.2294 16.0963 23.963L16.1715 24.0334C16.7427 24.5735 17.6221 24.5735 18.1934 24.0256L18.2761 23.9473C22.2221 20.2216 24.8002 17.7874 24.7025 14.7504C24.6574 13.4198 23.996 12.1518 22.9437 11.4004ZM17.2613 22.7967L17.1862 22.875L17.111 22.7967C13.5332 19.4232 11.1731 17.1925 11.1731 14.9304C11.1731 13.365 12.3006 12.1909 13.8038 12.1909C14.9613 12.1909 16.0888 12.9658 16.4872 14.0381H17.8927C18.2836 12.9658 19.411 12.1909 20.5685 12.1909C22.0718 12.1909 23.1993 13.365 23.1993 14.9304C23.1993 17.1925 20.8391 19.4232 17.2613 22.7967Z" fill="#4318FF" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className='2xl:flex justify-between items-center'>
                                                        <div className='2xl:pt-[20px] pt-[10px]'>
                                                            <p className='text-[18px] font-bold leading-[30px]'>ETH AI Brain</p>
                                                            <p className='text-[14px] font-normal leading-[20px] text-[#A3AED0] 2xl:mb-0 mb-[8px]'>By Nick Wilson</p>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px] font-bold text-[9px] flex items-center justify-center'>18+</div>
                                                        </div>
                                                    </div>
                                                    <div className='pt-[25px] 2xl:flex justify-between items-center 2xl:mt-0'>
                                                        <p className='mb-[8px] text-[#4318FF] text-[14px] font-bold leading-[24px]'>Current Bid: 2.82 ETH</p>
                                                        <div className='w-fit rounded-[70px] px-[24px] py[5px] bg-[#11047A] text-white font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 '>
                                                            Place Bid
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='p-[17px] bg-white rounded-[20px]'>
                                                    <div className='rounded-[18px] overflow-auto w-full trending-nft-img relative'>
                                                        <Image width={300} height={300} src='https://dummyimage.com/308x205/E9E3Ff/1d1d1f' className='rounded-[18px] overflow-auto w-full' alt="Image" unoptimized />
                                                        <div className='absolute top-[14px] right-[14px] group cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                                                <rect className='group-hover:fill-[#4318FF] transition-all duration-300' width="34.3736" height="34" rx="17" fill="white" />
                                                                <path className='group-hover:fill-[#fff] transition-all duration-300' d="M22.9437 11.4004C20.9594 9.99151 18.5091 10.649 17.1862 12.2614C15.8633 10.649 13.413 9.98369 11.4287 11.4004C10.3764 12.1518 9.71494 13.4198 9.66984 14.7582C9.56462 17.7952 12.1502 20.2294 16.0963 23.963L16.1715 24.0334C16.7427 24.5735 17.6221 24.5735 18.1934 24.0256L18.2761 23.9473C22.2221 20.2216 24.8002 17.7874 24.7025 14.7504C24.6574 13.4198 23.996 12.1518 22.9437 11.4004ZM17.2613 22.7967L17.1862 22.875L17.111 22.7967C13.5332 19.4232 11.1731 17.1925 11.1731 14.9304C11.1731 13.365 12.3006 12.1909 13.8038 12.1909C14.9613 12.1909 16.0888 12.9658 16.4872 14.0381H17.8927C18.2836 12.9658 19.411 12.1909 20.5685 12.1909C22.0718 12.1909 23.1993 13.365 23.1993 14.9304C23.1993 17.1925 20.8391 19.4232 17.2613 22.7967Z" fill="#4318FF" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className='2xl:flex justify-between items-center'>
                                                        <div className='2xl:pt-[20px] pt-[10px]'>
                                                            <p className='text-[18px] font-bold leading-[30px]'>Mesh Gradients</p>
                                                            <p className='text-[14px] font-normal leading-[20px] text-[#A3AED0] 2xl:mb-0 mb-[8px]'>By Will Smith</p>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px] font-bold text-[9px] flex items-center justify-center'>18+</div>
                                                        </div>
                                                    </div>
                                                    <div className='pt-[25px] 2xl:flex justify-between items-center 2xl:mt-0'>
                                                        <p className='mb-[8px] text-[#4318FF] text-[14px] font-bold leading-[24px]'>Current Bid: 0.56 ETH</p>
                                                        <div className='w-fit rounded-[70px] px-[24px] py[5px] bg-[#11047A] text-white font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 '>
                                                            Place Bid
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel header="Music">
                                            <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px]'>
                                                <div className='p-[17px] bg-white rounded-[20px]'>
                                                    <div className='rounded-[18px] overflow-auto w-full trending-nft-img relative '>
                                                        <Image width={300} height={300} src='https://dummyimage.com/308x205/E9E3Ff/1d1d1f' className='rounded-[18px] overflow-auto w-full' alt="Image" unoptimized />
                                                        <div className='absolute top-[14px] right-[14px] group cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                                                <rect className='group-hover:fill-[#4318FF] transition-all duration-300' width="34.3736" height="34" rx="17" fill="white" />
                                                                <path className='group-hover:fill-[#fff] transition-all duration-300' d="M22.9437 11.4004C20.9594 9.99151 18.5091 10.649 17.1862 12.2614C15.8633 10.649 13.413 9.98369 11.4287 11.4004C10.3764 12.1518 9.71494 13.4198 9.66984 14.7582C9.56462 17.7952 12.1502 20.2294 16.0963 23.963L16.1715 24.0334C16.7427 24.5735 17.6221 24.5735 18.1934 24.0256L18.2761 23.9473C22.2221 20.2216 24.8002 17.7874 24.7025 14.7504C24.6574 13.4198 23.996 12.1518 22.9437 11.4004ZM17.2613 22.7967L17.1862 22.875L17.111 22.7967C13.5332 19.4232 11.1731 17.1925 11.1731 14.9304C11.1731 13.365 12.3006 12.1909 13.8038 12.1909C14.9613 12.1909 16.0888 12.9658 16.4872 14.0381H17.8927C18.2836 12.9658 19.411 12.1909 20.5685 12.1909C22.0718 12.1909 23.1993 13.365 23.1993 14.9304C23.1993 17.1925 20.8391 19.4232 17.2613 22.7967Z" fill="#4318FF" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className='2xl:flex justify-between items-center'>
                                                        <div className='2xl:pt-[20px] pt-[10px]'>
                                                            <p className='text-[18px] font-bold leading-[30px]'>Music</p>
                                                            <p className='text-[14px] font-normal leading-[20px] text-[#A3AED0] 2xl:mb-0 mb-[8px]'>By Esthera Jackson</p>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px] font-bold text-[9px] flex items-center justify-center'>18+</div>
                                                        </div>
                                                    </div>
                                                    <div className='pt-[25px] 2xl:flex justify-between items-center 2xl:mt-0'>
                                                        <p className='mb-[8px] text-[#4318FF] text-[14px] font-bold leading-[24px]'>Current Bid: 2.30 ETH</p>
                                                        <div className='w-fit rounded-[70px] px-[24px] py[5px] bg-[#11047A] text-white font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 '>
                                                            Place Bid
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='p-[17px] bg-white rounded-[20px]'>
                                                    <div className='rounded-[18px] overflow-auto w-full trending-nft-img relative'>
                                                        <Image width={300} height={300} src='https://dummyimage.com/308x205/E9E3Ff/1d1d1f' className='rounded-[18px] overflow-auto w-full' alt="Image" unoptimized />
                                                        <div className='absolute top-[14px] right-[14px] group cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                                                <rect className='group-hover:fill-[#4318FF] transition-all duration-300' width="34.3736" height="34" rx="17" fill="white" />
                                                                <path className='group-hover:fill-[#fff] transition-all duration-300' d="M22.9437 11.4004C20.9594 9.99151 18.5091 10.649 17.1862 12.2614C15.8633 10.649 13.413 9.98369 11.4287 11.4004C10.3764 12.1518 9.71494 13.4198 9.66984 14.7582C9.56462 17.7952 12.1502 20.2294 16.0963 23.963L16.1715 24.0334C16.7427 24.5735 17.6221 24.5735 18.1934 24.0256L18.2761 23.9473C22.2221 20.2216 24.8002 17.7874 24.7025 14.7504C24.6574 13.4198 23.996 12.1518 22.9437 11.4004ZM17.2613 22.7967L17.1862 22.875L17.111 22.7967C13.5332 19.4232 11.1731 17.1925 11.1731 14.9304C11.1731 13.365 12.3006 12.1909 13.8038 12.1909C14.9613 12.1909 16.0888 12.9658 16.4872 14.0381H17.8927C18.2836 12.9658 19.411 12.1909 20.5685 12.1909C22.0718 12.1909 23.1993 13.365 23.1993 14.9304C23.1993 17.1925 20.8391 19.4232 17.2613 22.7967Z" fill="#4318FF" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className='2xl:flex justify-between items-center'>
                                                        <div className='2xl:pt-[20px] pt-[10px]'>
                                                            <p className='text-[18px] font-bold leading-[30px]'>ETH AI Brain</p>
                                                            <p className='text-[14px] font-normal leading-[20px] text-[#A3AED0] 2xl:mb-0 mb-[8px]'>By Nick Wilson</p>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px] font-bold text-[9px] flex items-center justify-center'>18+</div>
                                                        </div>
                                                    </div>
                                                    <div className='pt-[25px] 2xl:flex justify-between items-center 2xl:mt-0'>
                                                        <p className='mb-[8px] text-[#4318FF] text-[14px] font-bold leading-[24px]'>Current Bid: 2.82 ETH</p>
                                                        <div className='w-fit rounded-[70px] px-[24px] py[5px] bg-[#11047A] text-white font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 '>
                                                            Place Bid
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='p-[17px] bg-white rounded-[20px]'>
                                                    <div className='rounded-[18px] overflow-auto w-full trending-nft-img relative'>
                                                        <Image width={300} height={300} src='https://dummyimage.com/308x205/E9E3Ff/1d1d1f' className='rounded-[18px] overflow-auto w-full' alt="Image" unoptimized />
                                                        <div className='absolute top-[14px] right-[14px] group cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                                                <rect className='group-hover:fill-[#4318FF] transition-all duration-300' width="34.3736" height="34" rx="17" fill="white" />
                                                                <path className='group-hover:fill-[#fff] transition-all duration-300' d="M22.9437 11.4004C20.9594 9.99151 18.5091 10.649 17.1862 12.2614C15.8633 10.649 13.413 9.98369 11.4287 11.4004C10.3764 12.1518 9.71494 13.4198 9.66984 14.7582C9.56462 17.7952 12.1502 20.2294 16.0963 23.963L16.1715 24.0334C16.7427 24.5735 17.6221 24.5735 18.1934 24.0256L18.2761 23.9473C22.2221 20.2216 24.8002 17.7874 24.7025 14.7504C24.6574 13.4198 23.996 12.1518 22.9437 11.4004ZM17.2613 22.7967L17.1862 22.875L17.111 22.7967C13.5332 19.4232 11.1731 17.1925 11.1731 14.9304C11.1731 13.365 12.3006 12.1909 13.8038 12.1909C14.9613 12.1909 16.0888 12.9658 16.4872 14.0381H17.8927C18.2836 12.9658 19.411 12.1909 20.5685 12.1909C22.0718 12.1909 23.1993 13.365 23.1993 14.9304C23.1993 17.1925 20.8391 19.4232 17.2613 22.7967Z" fill="#4318FF" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className='2xl:flex justify-between items-center'>
                                                        <div className='2xl:pt-[20px] pt-[10px]'>
                                                            <p className='text-[18px] font-bold leading-[30px]'>Mesh Gradients</p>
                                                            <p className='text-[14px] font-normal leading-[20px] text-[#A3AED0] 2xl:mb-0 mb-[8px]'>By Will Smith</p>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px] font-bold text-[9px] flex items-center justify-center'>18+</div>
                                                        </div>
                                                    </div>
                                                    <div className='pt-[25px] 2xl:flex justify-between items-center 2xl:mt-0'>
                                                        <p className='mb-[8px] text-[#4318FF] text-[14px] font-bold leading-[24px]'>Current Bid: 0.56 ETH</p>
                                                        <div className='w-fit rounded-[70px] px-[24px] py[5px] bg-[#11047A] text-white font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 '>
                                                            Place Bid
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel header="Collectibles">
                                            <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px]'>
                                                <div className='p-[17px] bg-white rounded-[20px]'>
                                                    <div className='rounded-[18px] overflow-auto w-full trending-nft-img relative '>
                                                        <Image width={300} height={300} src='https://dummyimage.com/308x205/E9E3Ff/1d1d1f' className='rounded-[18px] overflow-auto w-full' alt="Image" unoptimized />
                                                        <div className='absolute top-[14px] right-[14px] group cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                                                <rect className='group-hover:fill-[#4318FF] transition-all duration-300' width="34.3736" height="34" rx="17" fill="white" />
                                                                <path className='group-hover:fill-[#fff] transition-all duration-300' d="M22.9437 11.4004C20.9594 9.99151 18.5091 10.649 17.1862 12.2614C15.8633 10.649 13.413 9.98369 11.4287 11.4004C10.3764 12.1518 9.71494 13.4198 9.66984 14.7582C9.56462 17.7952 12.1502 20.2294 16.0963 23.963L16.1715 24.0334C16.7427 24.5735 17.6221 24.5735 18.1934 24.0256L18.2761 23.9473C22.2221 20.2216 24.8002 17.7874 24.7025 14.7504C24.6574 13.4198 23.996 12.1518 22.9437 11.4004ZM17.2613 22.7967L17.1862 22.875L17.111 22.7967C13.5332 19.4232 11.1731 17.1925 11.1731 14.9304C11.1731 13.365 12.3006 12.1909 13.8038 12.1909C14.9613 12.1909 16.0888 12.9658 16.4872 14.0381H17.8927C18.2836 12.9658 19.411 12.1909 20.5685 12.1909C22.0718 12.1909 23.1993 13.365 23.1993 14.9304C23.1993 17.1925 20.8391 19.4232 17.2613 22.7967Z" fill="#4318FF" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className='2xl:flex justify-between items-center'>
                                                        <div className='2xl:pt-[20px] pt-[10px]'>
                                                            <p className='text-[18px] font-bold leading-[30px]'>Collectibles</p>
                                                            <p className='text-[14px] font-normal leading-[20px] text-[#A3AED0] 2xl:mb-0 mb-[8px]'>By Esthera Jackson</p>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px] font-bold text-[9px] flex items-center justify-center'>18+</div>
                                                        </div>
                                                    </div>
                                                    <div className='pt-[25px] 2xl:flex justify-between items-center 2xl:mt-0'>
                                                        <p className='mb-[8px] text-[#4318FF] text-[14px] font-bold leading-[24px]'>Current Bid: 2.30 ETH</p>
                                                        <div className='w-fit rounded-[70px] px-[24px] py[5px] bg-[#11047A] text-white font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 '>
                                                            Place Bid
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='p-[17px] bg-white rounded-[20px]'>
                                                    <div className='rounded-[18px] overflow-auto w-full trending-nft-img relative'>
                                                        <Image width={300} height={300} src='https://dummyimage.com/308x205/E9E3Ff/1d1d1f' className='rounded-[18px] overflow-auto w-full' alt="Image" unoptimized />
                                                        <div className='absolute top-[14px] right-[14px] group cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                                                <rect className='group-hover:fill-[#4318FF] transition-all duration-300' width="34.3736" height="34" rx="17" fill="white" />
                                                                <path className='group-hover:fill-[#fff] transition-all duration-300' d="M22.9437 11.4004C20.9594 9.99151 18.5091 10.649 17.1862 12.2614C15.8633 10.649 13.413 9.98369 11.4287 11.4004C10.3764 12.1518 9.71494 13.4198 9.66984 14.7582C9.56462 17.7952 12.1502 20.2294 16.0963 23.963L16.1715 24.0334C16.7427 24.5735 17.6221 24.5735 18.1934 24.0256L18.2761 23.9473C22.2221 20.2216 24.8002 17.7874 24.7025 14.7504C24.6574 13.4198 23.996 12.1518 22.9437 11.4004ZM17.2613 22.7967L17.1862 22.875L17.111 22.7967C13.5332 19.4232 11.1731 17.1925 11.1731 14.9304C11.1731 13.365 12.3006 12.1909 13.8038 12.1909C14.9613 12.1909 16.0888 12.9658 16.4872 14.0381H17.8927C18.2836 12.9658 19.411 12.1909 20.5685 12.1909C22.0718 12.1909 23.1993 13.365 23.1993 14.9304C23.1993 17.1925 20.8391 19.4232 17.2613 22.7967Z" fill="#4318FF" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className='2xl:flex justify-between items-center'>
                                                        <div className='2xl:pt-[20px] pt-[10px]'>
                                                            <p className='text-[18px] font-bold leading-[30px]'>ETH AI Brain</p>
                                                            <p className='text-[14px] font-normal leading-[20px] text-[#A3AED0] 2xl:mb-0 mb-[8px]'>By Nick Wilson</p>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px] font-bold text-[9px] flex items-center justify-center'>18+</div>
                                                        </div>
                                                    </div>
                                                    <div className='pt-[25px] 2xl:flex justify-between items-center 2xl:mt-0'>
                                                        <p className='mb-[8px] text-[#4318FF] text-[14px] font-bold leading-[24px]'>Current Bid: 2.82 ETH</p>
                                                        <div className='w-fit rounded-[70px] px-[24px] py[5px] bg-[#11047A] text-white font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 '>
                                                            Place Bid
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='p-[17px] bg-white rounded-[20px]'>
                                                    <div className='rounded-[18px] overflow-auto w-full trending-nft-img relative'>
                                                        <Image width={300} height={300} src='https://dummyimage.com/308x205/E9E3Ff/1d1d1f' className='rounded-[18px] overflow-auto w-full' alt="Image" unoptimized />
                                                        <div className='absolute top-[14px] right-[14px] group cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                                                <rect className='group-hover:fill-[#4318FF] transition-all duration-300' width="34.3736" height="34" rx="17" fill="white" />
                                                                <path className='group-hover:fill-[#fff] transition-all duration-300' d="M22.9437 11.4004C20.9594 9.99151 18.5091 10.649 17.1862 12.2614C15.8633 10.649 13.413 9.98369 11.4287 11.4004C10.3764 12.1518 9.71494 13.4198 9.66984 14.7582C9.56462 17.7952 12.1502 20.2294 16.0963 23.963L16.1715 24.0334C16.7427 24.5735 17.6221 24.5735 18.1934 24.0256L18.2761 23.9473C22.2221 20.2216 24.8002 17.7874 24.7025 14.7504C24.6574 13.4198 23.996 12.1518 22.9437 11.4004ZM17.2613 22.7967L17.1862 22.875L17.111 22.7967C13.5332 19.4232 11.1731 17.1925 11.1731 14.9304C11.1731 13.365 12.3006 12.1909 13.8038 12.1909C14.9613 12.1909 16.0888 12.9658 16.4872 14.0381H17.8927C18.2836 12.9658 19.411 12.1909 20.5685 12.1909C22.0718 12.1909 23.1993 13.365 23.1993 14.9304C23.1993 17.1925 20.8391 19.4232 17.2613 22.7967Z" fill="#4318FF" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className='2xl:flex justify-between items-center'>
                                                        <div className='2xl:pt-[20px] pt-[10px]'>
                                                            <p className='text-[18px] font-bold leading-[30px]'>Mesh Gradients</p>
                                                            <p className='text-[14px] font-normal leading-[20px] text-[#A3AED0] 2xl:mb-0 mb-[8px]'>By Will Smith</p>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px] font-bold text-[9px] flex items-center justify-center'>18+</div>
                                                        </div>
                                                    </div>
                                                    <div className='pt-[25px] 2xl:flex justify-between items-center 2xl:mt-0'>
                                                        <p className='mb-[8px] text-[#4318FF] text-[14px] font-bold leading-[24px]'>Current Bid: 0.56 ETH</p>
                                                        <div className='w-fit rounded-[70px] px-[24px] py[5px] bg-[#11047A] text-white font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 '>
                                                            Place Bid
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel header="Sports">
                                            <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px]'>
                                                <div className='p-[17px] bg-white rounded-[20px]'>
                                                    <div className='rounded-[18px] overflow-auto w-full trending-nft-img relative '>
                                                        <Image width={300} height={300} src='https://dummyimage.com/308x205/E9E3Ff/1d1d1f' className='rounded-[18px] overflow-auto w-full' alt="Image" unoptimized />
                                                        <div className='absolute top-[14px] right-[14px] group cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                                                <rect className='group-hover:fill-[#4318FF] transition-all duration-300' width="34.3736" height="34" rx="17" fill="white" />
                                                                <path className='group-hover:fill-[#fff] transition-all duration-300' d="M22.9437 11.4004C20.9594 9.99151 18.5091 10.649 17.1862 12.2614C15.8633 10.649 13.413 9.98369 11.4287 11.4004C10.3764 12.1518 9.71494 13.4198 9.66984 14.7582C9.56462 17.7952 12.1502 20.2294 16.0963 23.963L16.1715 24.0334C16.7427 24.5735 17.6221 24.5735 18.1934 24.0256L18.2761 23.9473C22.2221 20.2216 24.8002 17.7874 24.7025 14.7504C24.6574 13.4198 23.996 12.1518 22.9437 11.4004ZM17.2613 22.7967L17.1862 22.875L17.111 22.7967C13.5332 19.4232 11.1731 17.1925 11.1731 14.9304C11.1731 13.365 12.3006 12.1909 13.8038 12.1909C14.9613 12.1909 16.0888 12.9658 16.4872 14.0381H17.8927C18.2836 12.9658 19.411 12.1909 20.5685 12.1909C22.0718 12.1909 23.1993 13.365 23.1993 14.9304C23.1993 17.1925 20.8391 19.4232 17.2613 22.7967Z" fill="#4318FF" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className='2xl:flex justify-between items-center'>
                                                        <div className='2xl:pt-[20px] pt-[10px]'>
                                                            <p className='text-[18px] font-bold leading-[30px]'>Sports</p>
                                                            <p className='text-[14px] font-normal leading-[20px] text-[#A3AED0] 2xl:mb-0 mb-[8px]'>By Esthera Jackson</p>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px] font-bold text-[9px] flex items-center justify-center'>18+</div>
                                                        </div>
                                                    </div>
                                                    <div className='pt-[25px] 2xl:flex justify-between items-center 2xl:mt-0'>
                                                        <p className='mb-[8px] text-[#4318FF] text-[14px] font-bold leading-[24px]'>Current Bid: 2.30 ETH</p>
                                                        <div className='w-fit rounded-[70px] px-[24px] py[5px] bg-[#11047A] text-white font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 '>
                                                            Place Bid
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='p-[17px] bg-white rounded-[20px]'>
                                                    <div className='rounded-[18px] overflow-auto w-full trending-nft-img relative'>
                                                        <Image width={300} height={300} src='https://dummyimage.com/308x205/E9E3Ff/1d1d1f' className='rounded-[18px] overflow-auto w-full' alt="Image" unoptimized />
                                                        <div className='absolute top-[14px] right-[14px] group cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                                                <rect className='group-hover:fill-[#4318FF] transition-all duration-300' width="34.3736" height="34" rx="17" fill="white" />
                                                                <path className='group-hover:fill-[#fff] transition-all duration-300' d="M22.9437 11.4004C20.9594 9.99151 18.5091 10.649 17.1862 12.2614C15.8633 10.649 13.413 9.98369 11.4287 11.4004C10.3764 12.1518 9.71494 13.4198 9.66984 14.7582C9.56462 17.7952 12.1502 20.2294 16.0963 23.963L16.1715 24.0334C16.7427 24.5735 17.6221 24.5735 18.1934 24.0256L18.2761 23.9473C22.2221 20.2216 24.8002 17.7874 24.7025 14.7504C24.6574 13.4198 23.996 12.1518 22.9437 11.4004ZM17.2613 22.7967L17.1862 22.875L17.111 22.7967C13.5332 19.4232 11.1731 17.1925 11.1731 14.9304C11.1731 13.365 12.3006 12.1909 13.8038 12.1909C14.9613 12.1909 16.0888 12.9658 16.4872 14.0381H17.8927C18.2836 12.9658 19.411 12.1909 20.5685 12.1909C22.0718 12.1909 23.1993 13.365 23.1993 14.9304C23.1993 17.1925 20.8391 19.4232 17.2613 22.7967Z" fill="#4318FF" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className='2xl:flex justify-between items-center'>
                                                        <div className='2xl:pt-[20px] pt-[10px]'>
                                                            <p className='text-[18px] font-bold leading-[30px]'>ETH AI Brain</p>
                                                            <p className='text-[14px] font-normal leading-[20px] text-[#A3AED0] 2xl:mb-0 mb-[8px]'>By Nick Wilson</p>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px] font-bold text-[9px] flex items-center justify-center'>18+</div>
                                                        </div>
                                                    </div>
                                                    <div className='pt-[25px] 2xl:flex justify-between items-center 2xl:mt-0'>
                                                        <p className='mb-[8px] text-[#4318FF] text-[14px] font-bold leading-[24px]'>Current Bid: 2.82 ETH</p>
                                                        <div className='w-fit rounded-[70px] px-[24px] py[5px] bg-[#11047A] text-white font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 '>
                                                            Place Bid
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='p-[17px] bg-white rounded-[20px]'>
                                                    <div className='rounded-[18px] overflow-auto w-full trending-nft-img relative'>
                                                        <Image width={300} height={300} src='https://dummyimage.com/308x205/E9E3Ff/1d1d1f' className='rounded-[18px] overflow-auto w-full' alt="Image" unoptimized />
                                                        <div className='absolute top-[14px] right-[14px] group cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                                                <rect className='group-hover:fill-[#4318FF] transition-all duration-300' width="34.3736" height="34" rx="17" fill="white" />
                                                                <path className='group-hover:fill-[#fff] transition-all duration-300' d="M22.9437 11.4004C20.9594 9.99151 18.5091 10.649 17.1862 12.2614C15.8633 10.649 13.413 9.98369 11.4287 11.4004C10.3764 12.1518 9.71494 13.4198 9.66984 14.7582C9.56462 17.7952 12.1502 20.2294 16.0963 23.963L16.1715 24.0334C16.7427 24.5735 17.6221 24.5735 18.1934 24.0256L18.2761 23.9473C22.2221 20.2216 24.8002 17.7874 24.7025 14.7504C24.6574 13.4198 23.996 12.1518 22.9437 11.4004ZM17.2613 22.7967L17.1862 22.875L17.111 22.7967C13.5332 19.4232 11.1731 17.1925 11.1731 14.9304C11.1731 13.365 12.3006 12.1909 13.8038 12.1909C14.9613 12.1909 16.0888 12.9658 16.4872 14.0381H17.8927C18.2836 12.9658 19.411 12.1909 20.5685 12.1909C22.0718 12.1909 23.1993 13.365 23.1993 14.9304C23.1993 17.1925 20.8391 19.4232 17.2613 22.7967Z" fill="#4318FF" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className='2xl:flex justify-between items-center'>
                                                        <div className='2xl:pt-[20px] pt-[10px]'>
                                                            <p className='text-[18px] font-bold leading-[30px]'>Mesh Gradients</p>
                                                            <p className='text-[14px] font-normal leading-[20px] text-[#A3AED0] 2xl:mb-0 mb-[8px]'>By Will Smith</p>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                            <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px] font-bold text-[9px] flex items-center justify-center'>18+</div>
                                                        </div>
                                                    </div>
                                                    <div className='pt-[25px] 2xl:flex justify-between items-center 2xl:mt-0'>
                                                        <p className='mb-[8px] text-[#4318FF] text-[14px] font-bold leading-[24px]'>Current Bid: 0.56 ETH</p>
                                                        <div className='w-fit rounded-[70px] px-[24px] py[5px] bg-[#11047A] text-white font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 '>
                                                            Place Bid
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    </TabView>
                                </div>
                            </div>
                        </div>
                        <div className='pt-[20px]'>
                            <div className=' '>
                                <p className='mb-[20px] text-[24px] font-bold leading-[32px] text-[#2B3674]'>Trending NFTs</p>
                                <div className='w-full '>
                                    <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px]'>
                                        <div className='p-[17px] bg-white rounded-[20px]'>
                                            <div className='rounded-[18px] overflow-auto w-full trending-nft-img relative '>
                                                <Image width={300} height={300} src='https://dummyimage.com/308x205/E9E3Ff/1d1d1f' className='rounded-[18px] overflow-auto w-full' alt="Image" unoptimized />
                                                <div className='absolute top-[14px] right-[14px] group cursor-pointer'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                                        <rect className='group-hover:fill-[#4318FF] transition-all duration-300' width="34.3736" height="34" rx="17" fill="white" />
                                                        <path className='group-hover:fill-[#fff] transition-all duration-300' d="M22.9437 11.4004C20.9594 9.99151 18.5091 10.649 17.1862 12.2614C15.8633 10.649 13.413 9.98369 11.4287 11.4004C10.3764 12.1518 9.71494 13.4198 9.66984 14.7582C9.56462 17.7952 12.1502 20.2294 16.0963 23.963L16.1715 24.0334C16.7427 24.5735 17.6221 24.5735 18.1934 24.0256L18.2761 23.9473C22.2221 20.2216 24.8002 17.7874 24.7025 14.7504C24.6574 13.4198 23.996 12.1518 22.9437 11.4004ZM17.2613 22.7967L17.1862 22.875L17.111 22.7967C13.5332 19.4232 11.1731 17.1925 11.1731 14.9304C11.1731 13.365 12.3006 12.1909 13.8038 12.1909C14.9613 12.1909 16.0888 12.9658 16.4872 14.0381H17.8927C18.2836 12.9658 19.411 12.1909 20.5685 12.1909C22.0718 12.1909 23.1993 13.365 23.1993 14.9304C23.1993 17.1925 20.8391 19.4232 17.2613 22.7967Z" fill="#4318FF" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className='2xl:flex justify-between items-center'>
                                                <div className='2xl:pt-[20px] pt-[10px]'>
                                                    <p className='text-[18px] font-bold leading-[30px]'>Swipe Circles</p>
                                                    <p className='text-[14px] font-normal leading-[20px] text-[#A3AED0] 2xl:mb-0 mb-[8px]'>By Peter Will</p>
                                                </div>
                                                <div className='flex items-center'>
                                                    <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                                                    <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px] font-bold text-[9px] flex items-center justify-center'>18+</div>
                                                </div>
                                            </div>
                                            <div className='pt-[25px] 2xl:flex justify-between items-center 2xl:mt-0'>
                                                <p className='mb-[8px] text-[#4318FF] text-[14px] font-bold leading-[24px]'>Current Bid: 2.30 ETH</p>
                                                <div className='w-fit rounded-[70px] px-[24px] py[5px] bg-[#11047A] text-white font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 '>
                                                    Place Bid
                                                </div>

                                            </div>
                                        </div>
                                        <div className='p-[17px] bg-white rounded-[20px]'>
                                            <div className='rounded-[18px] overflow-auto w-full trending-nft-img relative'>
                                                <Image width={300} height={300} src='https://dummyimage.com/308x205/E9E3Ff/1d1d1f' className='rounded-[18px] overflow-auto w-full' alt="Image" unoptimized />
                                                <div className='absolute top-[14px] right-[14px] group cursor-pointer'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                                        <rect className='group-hover:fill-[#4318FF] transition-all duration-300' width="34.3736" height="34" rx="17" fill="white" />
                                                        <path className='group-hover:fill-[#fff] transition-all duration-300' d="M22.9437 11.4004C20.9594 9.99151 18.5091 10.649 17.1862 12.2614C15.8633 10.649 13.413 9.98369 11.4287 11.4004C10.3764 12.1518 9.71494 13.4198 9.66984 14.7582C9.56462 17.7952 12.1502 20.2294 16.0963 23.963L16.1715 24.0334C16.7427 24.5735 17.6221 24.5735 18.1934 24.0256L18.2761 23.9473C22.2221 20.2216 24.8002 17.7874 24.7025 14.7504C24.6574 13.4198 23.996 12.1518 22.9437 11.4004ZM17.2613 22.7967L17.1862 22.875L17.111 22.7967C13.5332 19.4232 11.1731 17.1925 11.1731 14.9304C11.1731 13.365 12.3006 12.1909 13.8038 12.1909C14.9613 12.1909 16.0888 12.9658 16.4872 14.0381H17.8927C18.2836 12.9658 19.411 12.1909 20.5685 12.1909C22.0718 12.1909 23.1993 13.365 23.1993 14.9304C23.1993 17.1925 20.8391 19.4232 17.2613 22.7967Z" fill="#4318FF" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className='2xl:flex justify-between items-center'>
                                                <div className='2xl:pt-[20px] pt-[10px]'>
                                                    <p className='text-[18px] font-bold leading-[30px]'>Colorful Heaven</p>
                                                    <p className='text-[14px] font-normal leading-[20px] text-[#A3AED0] 2xl:mb-0 mb-[8px]'>By Mark Benjamin</p>
                                                </div>
                                                <div className='flex items-center'>
                                                    <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                                                    <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px] font-bold text-[9px] flex items-center justify-center'>18+</div>
                                                </div>
                                            </div>
                                            <div className='pt-[25px] 2xl:flex justify-between items-center 2xl:mt-0'>
                                                <p className='mb-[8px] text-[#4318FF] text-[14px] font-bold leading-[24px]'>Current Bid: 1.30 ETH</p>
                                                <div className='w-fit rounded-[70px] px-[24px] py[5px] bg-[#11047A] text-white font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 '>
                                                    Place Bid
                                                </div>

                                            </div>
                                        </div>
                                        <div className='p-[17px] bg-white rounded-[20px]'>
                                            <div className='rounded-[18px] overflow-auto w-full trending-nft-img relative'>
                                                <Image width={300} height={300} src='https://dummyimage.com/308x205/E9E3Ff/1d1d1f' className='rounded-[18px] overflow-auto w-full' alt="Image" unoptimized />
                                                <div className='absolute top-[14px] right-[14px] group cursor-pointer'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                                                        <rect className='group-hover:fill-[#4318FF] transition-all duration-300' width="34.3736" height="34" rx="17" fill="white" />
                                                        <path className='group-hover:fill-[#fff] transition-all duration-300' d="M22.9437 11.4004C20.9594 9.99151 18.5091 10.649 17.1862 12.2614C15.8633 10.649 13.413 9.98369 11.4287 11.4004C10.3764 12.1518 9.71494 13.4198 9.66984 14.7582C9.56462 17.7952 12.1502 20.2294 16.0963 23.963L16.1715 24.0334C16.7427 24.5735 17.6221 24.5735 18.1934 24.0256L18.2761 23.9473C22.2221 20.2216 24.8002 17.7874 24.7025 14.7504C24.6574 13.4198 23.996 12.1518 22.9437 11.4004ZM17.2613 22.7967L17.1862 22.875L17.111 22.7967C13.5332 19.4232 11.1731 17.1925 11.1731 14.9304C11.1731 13.365 12.3006 12.1909 13.8038 12.1909C14.9613 12.1909 16.0888 12.9658 16.4872 14.0381H17.8927C18.2836 12.9658 19.411 12.1909 20.5685 12.1909C22.0718 12.1909 23.1993 13.365 23.1993 14.9304C23.1993 17.1925 20.8391 19.4232 17.2613 22.7967Z" fill="#4318FF" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className='2xl:flex justify-between items-center'>
                                                <div className='2xl:pt-[20px] pt-[10px]'>
                                                    <p className='text-[18px] font-bold leading-[30px]'>3D Cubes Art</p>
                                                    <p className='text-[14px] font-normal leading-[20px] text-[#A3AED0] 2xl:mb-0 mb-[8px]'>By Manny Gates</p>
                                                </div>
                                                <div className='flex items-center'>
                                                    <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                                                    <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                    <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                                                    <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px] font-bold text-[9px] flex items-center justify-center'>18+</div>
                                                </div>
                                            </div>
                                            <div className='pt-[25px] 2xl:flex justify-between items-center 2xl:mt-0'>
                                                <p className='mb-[8px] text-[#4318FF] text-[14px] font-bold leading-[24px]'>Current Bid: 6.58 ETH</p>
                                                <div className='w-fit rounded-[70px] px-[24px] py[5px] bg-[#11047A] text-white font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 '>
                                                    Place Bid
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className=''>
                            <div className='h-full'>
                                <div className='h-[50%] overflow-auto'>
                                    <div className='rounded-[20px] overflow-auto h-full'>
                                        <div className='h-[calc(100%_-_52px)]'>
                                            <div className='flex sticky top-0 z-[1] justify-between items-center bg-white p-[20px] pb-0 overflow-auto shadow-[0px_40px_50px_-20px_rgba(112,144,176,0.12)]'>
                                                <p className='text-[20px] font-bold leading-[32px]'>Top Creators</p>
                                                <div className='rounded-[70px] px-[24px] py[5px] bg-[#F4F7FE] text-[#4318FF] font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#4318FF] hover:text-white transition-all duration-300 '>
                                                    See all
                                                </div>
                                            </div>
                                            <div className='creator-table'>
                                                <DataTable value={top_Creators}>
                                                    <Column field="name" header="Name" className='font-bold text-[14px] leading-[24px] '></Column>
                                                    <Column field="artworks" header="artworks"></Column>
                                                    <Column field="quantity" header="Quantity" body={sliderDataBody}></Column>
                                                </DataTable>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='h-[50%] pt-[20px]'>
                                    <div className='rounded-[20px] overflow-auto bg-white h-full'>
                                        <div>
                                            <div className='flex justify-between items-center bg-white p-[20px] pb-0 overflow-auto shadow-[0px_40px_50px_-20px_rgba(112,144,176,0.12)]'>
                                                <p className='text-[20px] font-bold leading-[32px]'>History</p>
                                                <div className='rounded-[70px] px-[24px] py[5px] bg-[#F4F7FE] text-[#4318FF] font-[500] text-[14px] leading-[24px] cursor-pointer hover:bg-[#4318FF] hover:text-white transition-all duration-300 '>
                                                    See all
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-[16px]'>
                                                <div className='rounded-[16px] px-[16px] py-[12px] history-box'>
                                                    <div className='flex justify-between items-center'>
                                                        <div className='flex items-center gap-[12px]'>
                                                            <Image src='https://dummyimage.com/50x50/E0E5F2/040405' alt='avatar' className='w-[46px] h-[46px] rounded-[12px] overflow-auto' />
                                                            <div>
                                                                <div className='text-[16px] leading-[28px] font-bold '>Colorful Heaven</div>
                                                                <div className='text-[12px] leading-[20px] font-medium text-[#A3AED0]'>By Mark Benjamin</div>
                                                            </div>
                                                        </div>
                                                        <div className='flex gap-[7px] items-center'>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                                                                    <path d="M4.46604 11.2312L0 8.5125L4.46543 15L8.93511 8.5125L4.46422 11.2312H4.46604ZM4.53396 0L0.0667117 7.63937L4.53336 10.3606L9 7.64188L4.53396 0Z" fill="#2B3674" />
                                                                </svg>
                                                            </div>
                                                            <p className='2xl:text-[16px] text-[14px] font-bold leading-[20px]'>1.30 ETH</p>
                                                        </div>
                                                        <p className='2xl:text-[16px] text-[12px] font-normal leading-[20px] text-[#A3AED0]'>30s ago</p>
                                                    </div>
                                                </div>
                                                <div className='rounded-[16px] px-[16px] py-[12px] history-box'>
                                                    <div className='flex justify-between items-center'>
                                                        <div className='flex items-center gap-[12px]'>
                                                            <Image src='https://dummyimage.com/50x50/E0E5F2/040405' alt='avatar' className='w-[46px] h-[46px] rounded-[12px] overflow-auto' />
                                                            <div>
                                                                <div className='text-[16px] leading-[28px] font-bold '>Abstract Colors</div>
                                                                <div className='text-[12px] leading-[20px] font-medium text-[#A3AED0]'>By Esthera Jackson</div>
                                                            </div>
                                                        </div>
                                                        <div className='flex gap-[7px] items-center'>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                                                                    <path d="M4.46604 11.2312L0 8.5125L4.46543 15L8.93511 8.5125L4.46422 11.2312H4.46604ZM4.53396 0L0.0667117 7.63937L4.53336 10.3606L9 7.64188L4.53396 0Z" fill="#2B3674" />
                                                                </svg>
                                                            </div>
                                                            <p className='2xl:text-[16px] text-[14px] font-bold leading-[20px]'>0.91 ETH</p>
                                                        </div>
                                                        <p className='2xl:text-[16px] text-[12px] font-normal leading-[20px] text-[#A3AED0]'>58s ago</p>
                                                    </div>
                                                </div>
                                                <div className='rounded-[16px] px-[16px] py-[12px] history-box'>
                                                    <div className='flex justify-between items-center'>
                                                        <div className='flex items-center gap-[12px]'>
                                                            <Image src='https://dummyimage.com/50x50/E0E5F2/040405' alt='avatar' className='w-[46px] h-[46px] rounded-[12px] overflow-auto' />
                                                            <div>
                                                                <div className='text-[16px] leading-[28px] font-bold '>ETH AI Brain</div>
                                                                <div className='text-[12px] leading-[20px] font-medium text-[#A3AED0]'>By Nick Wilson</div>
                                                            </div>
                                                        </div>
                                                        <div className='flex gap-[7px] items-center'>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                                                                    <path d="M4.46604 11.2312L0 8.5125L4.46543 15L8.93511 8.5125L4.46422 11.2312H4.46604ZM4.53396 0L0.0667117 7.63937L4.53336 10.3606L9 7.64188L4.53396 0Z" fill="#2B3674" />
                                                                </svg>
                                                            </div>
                                                            <p className='2xl:text-[16px] text-[14px] font-bold leading-[20px]'>2.82 ETH</p>
                                                        </div>
                                                        <p className='2xl:text-[16px] text-[12px] font-normal leading-[20px] text-[#A3AED0]'>1m ago</p>
                                                    </div>
                                                </div>
                                                <div className='rounded-[16px] px-[16px] py-[12px] history-box'>
                                                    <div className='flex justify-between items-center'>
                                                        <div className='flex items-center gap-[12px]'>
                                                            <Image src='https://dummyimage.com/50x50/E0E5F2/040405' alt='avatar' className='w-[46px] h-[46px] rounded-[12px] overflow-auto' />
                                                            <div>
                                                                <div className='text-[16px] leading-[28px] font-bold '>Mesh Gradients</div>
                                                                <div className='text-[12px] leading-[20px] font-medium text-[#A3AED0]'>By Will Smith</div>
                                                            </div>
                                                        </div>
                                                        <div className='flex gap-[7px] items-center'>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                                                                    <path d="M4.46604 11.2312L0 8.5125L4.46543 15L8.93511 8.5125L4.46422 11.2312H4.46604ZM4.53396 0L0.0667117 7.63937L4.53336 10.3606L9 7.64188L4.53396 0Z" fill="#2B3674" />
                                                                </svg>
                                                            </div>
                                                            <p className='2xl:text-[16px] text-[14px] font-bold leading-[20px]'>0.56 ETH</p>
                                                        </div>
                                                        <p className='2xl:text-[16px] text-[12px] font-normal leading-[20px] text-[#A3AED0]'>2m ago</p>
                                                    </div>
                                                </div>
                                                <div className='rounded-[16px] px-[16px] py-[12px] history-box'>
                                                    <div className='flex justify-between items-center'>
                                                        <div className='flex items-center gap-[12px]'>
                                                            <Image src='https://dummyimage.com/50x50/E0E5F2/040405' alt='avatar' className='w-[46px] h-[46px] rounded-[12px] overflow-auto' />
                                                            <div>
                                                                <div className='text-[16px] leading-[28px] font-bold '>3D Cubes Art</div>
                                                                <div className='text-[12px] leading-[20px] font-medium text-[#A3AED0]'>By Manny Gates</div>
                                                            </div>
                                                        </div>
                                                        <div className='flex gap-[7px] items-center'>
                                                            <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                                                                    <path d="M4.46604 11.2312L0 8.5125L4.46543 15L8.93511 8.5125L4.46422 11.2312H4.46604ZM4.53396 0L0.0667117 7.63937L4.53336 10.3606L9 7.64188L4.53396 0Z" fill="#2B3674" />
                                                                </svg>
                                                            </div>
                                                            <p className='2xl:text-[16px] text-[14px] font-bold leading-[20px]'>6.58 ETH</p>
                                                        </div>
                                                        <p className='2xl:text-[16px] text-[12px] font-normal leading-[20px] text-[#A3AED0]'>3m ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFT
