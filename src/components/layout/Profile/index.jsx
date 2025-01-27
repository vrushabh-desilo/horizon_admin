import React, { useRef, useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Image } from 'primereact/image'
import userProfile from '../../../assets/images/Elipse 5.png';
import { Menu } from 'primereact/menu';
import { Slider } from "primereact/slider";
import { InputSwitch } from "primereact/inputswitch";



const Profile = () => {
    const [value, setValue] = useState('');
    const [gbRange, setGbRange] = useState('');
    const [checked, setChecked] = useState(true);
    const [switches, setSwitches] = useState([
        { label: "Item update notifications", value: true },
        { label: "Buyer review notifications", value: false },
        { label: "Item comment notifications", value: true },
        { label: "Rating reminders notifications", value: false },
        { label: "Meetups near you notifications", value: false },
        { label: "Company news notifications", value: true },
        { label: "New launches and projects", value: true },
        { label: "Monthly product changes", value: false },
        { label: "Subscribe to newsletter", value: false },
        { label: "Email me when someone follows me", value: true },
    ]);

    const handleSwitchChange = (index, newValue) => {
        // Update the switch value
        const updatedSwitches = switches.map((item, i) =>
            i === index ? { ...item, value: newValue } : item
        );
        setSwitches(updatedSwitches);
    };

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
    return (
        <div>
            <div>
                <div className="">
                    <div className=" flex justify-between items-center sticky top-0 bg-[#F4F7FE]">
                        <div className="">
                            <div className="flex items-center text-[#707EAE] gap-[5px]">
                                <p>Pages</p>
                                <span>/</span>
                                <p>Profile</p>
                            </div>
                            <h1 className="font-bold text-[34px] leading-[42px]">
                                Profile
                            </h1>
                        </div>
                        <div className="bg-white p-[10px] rounded-[30px] flex items-center gap-[20px]">
                            <div className="flex items-center gap-[10px] rounded-[49px]  px-[20px] py-[10px] bg-[#F4F7FE]">
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
                            <div className='cursor-pointer' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup >
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
                            <div className='cursor-pointer' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
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
                            <div className='cursor-pointer' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
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
                            <div className="max-w-[50px] rounded-full overflow-auto">
                                <Image
                                    width={300}
                                    height={300}
                                    className=""
                                    src={userProfile}
                                    alt="Image"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className='h-[calc(100vh_-_150px)] my-[20px] overflow-auto'>
                            <div>
                                <div className='flex flex-row gap-[20px]'>
                                    <div className='w-[552px] rounded-[20px] bg-white p-[17px]'>
                                        <div className='pb-[20px] relative'>
                                            <div className='rounded-[16px] overflow-auto'>
                                                <div className=' '>
                                                    <Image
                                                        className=""
                                                        src='https://dummyimage.com/600x131/d9e4fc/fff'
                                                        alt="Image" unoptimized
                                                    />
                                                    <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-auto border-[4px] border-white'>
                                                        <Image
                                                            className=""
                                                            src='https://dummyimage.com/80x80/222/fff'
                                                            alt="Image" unoptimized
                                                        />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center flex-col pt-[40px]'>
                                            <p className='text-[20px] leading-[32px] font-bold'>Adela Parkson</p>
                                            <p className='text-[14px] leading-[24px] font-medium text-[#A3AED0]'>Product Designer</p>
                                            <div className='flex items-center justify-between gap-[45px] pt-[26px]'>
                                                <div>
                                                    <p className='text-[20px] leading-[32px] font-bold'>17</p>
                                                    <p className='text-[14px] leading-[24px] font-medium text-[#A3AED0]'>Posts</p>
                                                </div>
                                                <div>
                                                    <p className='text-[20px] leading-[32px] font-bold'>9.7k</p>
                                                    <p className='text-[14px] leading-[24px] font-medium text-[#A3AED0]'>Followers</p>
                                                </div>
                                                <div>
                                                    <p className='text-[20px] leading-[32px] font-bold'>274</p>
                                                    <p className='text-[14px] leading-[24px] font-medium text-[#A3AED0]'>Followers</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[381px] rounded-[20px] bg-white p-[17px]'>
                                        <div className='flex justify-end'>
                                            <div className='rounded-[10px] bg-[#F4F7FE] p-[7px] cursor-pointer'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <g clip-path="url(#clip0_101_9124)">
                                                        <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#4318FF" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_101_9124">
                                                            <rect width="24" height="24" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center justify-between h-[calc(100%_-_38px)]'>
                                            <div className='flex flex-col items-center'>
                                                <div className='rounded-full bg-[#F4F7FE] p-[27px]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                                        <g clip-path="url(#clip0_101_9116)">
                                                            <path d="M37.0875 19.2434C35.7842 12.6309 29.9767 7.66669 23 7.66669C17.4608 7.66669 12.65 10.81 10.2542 15.41C4.485 16.0234 0 20.9109 0 26.8334C0 33.1775 5.15583 38.3334 11.5 38.3334H36.4167C41.7067 38.3334 46 34.04 46 28.75C46 23.69 42.0708 19.5884 37.0875 19.2434ZM36.4167 34.5H11.5C7.26417 34.5 3.83333 31.0692 3.83333 26.8334C3.83333 22.9042 6.76583 19.6267 10.6567 19.2242L12.7075 19.0134L13.6658 17.1925C15.4867 13.685 19.0517 11.5 23 11.5C28.0217 11.5 32.3533 15.065 33.3308 19.9909L33.9058 22.8659L36.8383 23.0767C39.8283 23.2684 42.1667 25.7792 42.1667 28.75C42.1667 31.9125 39.5792 34.5 36.4167 34.5ZM19.1667 27.1784L15.1608 23.1725L12.4583 25.875L19.1667 32.5834L30.6858 21.0642L27.9833 18.3617L19.1667 27.1784Z" fill="#4318FF" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_101_9116">
                                                                <rect width="46" height="46" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <p className='text-[20px] leading-[32px] font-bold pt-[14px]'>Your storage</p>
                                                <p className='text-[16px] leading-[26px] font-normal pt-[6px] w-[200px] text-[#A3AED0] text-center'>Supervise your drive space in the easiest way</p>
                                            </div>
                                            <div className='w-full'>
                                                <div className='flex items-center justify-between pb-[11px]'>
                                                    <span className='text-[#A3AED0] font-medium text-[14px] leading-[24px]'>25.6 Gb</span>
                                                    <span className='text-[#A3AED0] font-medium text-[14px] leading-[24px]'>50 Gb</span>
                                                </div>
                                                <Slider value={gbRange} onChange={(e) => setGbRange(e.value)} className="w-full rounded-[21px] slider-range h-[10px]"
                                                    step={1} min={25.6 * 2} max={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[617px] rounded-[20px] bg-white p-[27px]'>
                                        <div className='flex gap-[36px] items-center h-full'>
                                            <div className='rounded-[13px] bg-[#FAFCFE] border border-dashed border-[#E0E5F2] h-full px-[26px]'>
                                                <label for="myfile" className='h-full'>
                                                    <div className='flex flex-col gap-[12px] items-center justify-center h-full'>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                                                <g clip-path="url(#clip0_101_9133)">
                                                                    <path d="M33.3334 53.3333H46.6668C48.5001 53.3333 50.0001 51.8333 50.0001 50V33.3333H55.3001C58.2668 33.3333 59.7668 29.7333 57.6668 27.6333L42.3668 12.3333C41.0668 11.0333 38.9668 11.0333 37.6668 12.3333L22.3667 27.6333C20.2667 29.7333 21.7334 33.3333 24.7001 33.3333H30.0001V50C30.0001 51.8333 31.5001 53.3333 33.3334 53.3333ZM20.0001 60H60.0001C61.8334 60 63.3334 61.5 63.3334 63.3333C63.3334 65.1667 61.8334 66.6667 60.0001 66.6667H20.0001C18.1667 66.6667 16.6667 65.1667 16.6667 63.3333C16.6667 61.5 18.1667 60 20.0001 60Z" fill="#4318FF" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_101_9133">
                                                                        <rect width="80" height="80" fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <p className='text-[20px] leading-[32px] font-bold text-[#4318FF]'>Upload Files</p>
                                                        <p className='text-[12px] leading-[20px] font-medium text-[#8F9BBA]'>PNG, JPG and GIF files are allowed</p>
                                                    </div>
                                                </label>
                                                <input type="file" id="myfile" name="myfile" className='hidden' />
                                            </div>
                                            <div className='w-[250px] text-center'>
                                                <div>
                                                    <p className='text-[#2B3674] font-medium text-[24px] leading-[32px]'>Complete your profile</p>
                                                    <p className='text-[#A3AED0] font-normal text-[16px] leading-[26px]'>Stay on the pulse of distributed projects with an anline whiteboard to plan, coordinate and discuss</p>
                                                </div>
                                                <div className='text-[14px] leading-[24px] font-normal w-fit text-white rounded-[16px] px-[25px] py-[8px] bg-[#4318FF] cursor-pointer hover:bg-[#868CFF] transition-all duration-300 mt-[74px]'>
                                                    Publish now
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-[20px] pt-[20px]'>
                                    <div className="w-[512px] p-[31px] !pt-[23px] bg-white rounded-[20px] date-section">
                                        <div className=''>
                                            <p className='text-[18px] leading-[32px] font-bold'>All Projects</p>
                                            <p className='text-[16px] leading-[26px] font-normal text-[#A3AED0] pt-[15px]'>Here you can find more details about your projects. Keep you user engaged by providing meaningful information.</p>
                                        </div>
                                        <div className='pt-[20px] flex flex-col gap-[16px]'>
                                            <div className='rounded-[16px] shadow-[0px_18px_40px_0px_rgba(112,144,176,0.12)] px-[16px] py-[14px]'>
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex items-center gap-[12px] justify-between'>
                                                        <Image src='https://dummyimage.com/80x80/E0E5F2/040405' alt='avatar' className='w-[80px] h-[80px] rounded-[8px] overflow-auto' />
                                                        <div>
                                                            <div className='text-[16px] leading-[28px] font-bold '>Technology behind the Blockchain</div>
                                                            <div className='text-[14px] leading-[20px] font-medium text-[#A3AED0]'>Project #1 • <span><a href="#" className='text-[#4318FF] text-[14px] font-medium leading-[20px]'>See project details</a></span></div>
                                                        </div>
                                                        <div className='cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                <g clip-path="url(#clip0_101_9154)">
                                                                    <path d="M2.25 13.095V15.375C2.25 15.585 2.415 15.75 2.625 15.75H4.905C5.0025 15.75 5.1 15.7125 5.1675 15.6375L13.3575 7.455L10.545 4.6425L2.3625 12.825C2.2875 12.9 2.25 12.99 2.25 13.095ZM15.5325 5.28C15.825 4.9875 15.825 4.515 15.5325 4.2225L13.7775 2.4675C13.485 2.175 13.0125 2.175 12.72 2.4675L11.3475 3.84L14.16 6.6525L15.5325 5.28Z" fill="#8F9BBA" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_101_9154">
                                                                        <rect width="18" height="18" fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='rounded-[16px] shadow-[0px_18px_40px_0px_rgba(112,144,176,0.12)] px-[16px] py-[14px]'>
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex items-center gap-[12px] justify-between'>
                                                        <Image src='https://dummyimage.com/80x80/E0E5F2/040405' alt='avatar' className='w-[80px] h-[80px] rounded-[8px] overflow-auto' />
                                                        <div>
                                                            <div className='text-[16px] leading-[28px] font-bold '>Greatest way to a good Economy</div>
                                                            <div className='text-[14px] leading-[20px] font-medium text-[#A3AED0]'>Project #2 • <span><a href="#" className='text-[#4318FF] text-[14px] font-medium leading-[20px]'>See project details</a></span></div>
                                                        </div>
                                                        <div className='cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                <g clip-path="url(#clip0_101_9154)">
                                                                    <path d="M2.25 13.095V15.375C2.25 15.585 2.415 15.75 2.625 15.75H4.905C5.0025 15.75 5.1 15.7125 5.1675 15.6375L13.3575 7.455L10.545 4.6425L2.3625 12.825C2.2875 12.9 2.25 12.99 2.25 13.095ZM15.5325 5.28C15.825 4.9875 15.825 4.515 15.5325 4.2225L13.7775 2.4675C13.485 2.175 13.0125 2.175 12.72 2.4675L11.3475 3.84L14.16 6.6525L15.5325 5.28Z" fill="#8F9BBA" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_101_9154">
                                                                        <rect width="18" height="18" fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='rounded-[16px] shadow-[0px_18px_40px_0px_rgba(112,144,176,0.12)] px-[16px] py-[14px]'>
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex items-center gap-[12px] justify-between'>
                                                        <Image src='https://dummyimage.com/80x80/E0E5F2/040405' alt='avatar' className='w-[80px] h-[80px] rounded-[8px] overflow-auto' />
                                                        <div>
                                                            <div className='text-[16px] leading-[28px] font-bold '>Most essential tips for Burnout</div>
                                                            <div className='text-[14px] leading-[20px] font-medium text-[#A3AED0]'>Project #3 • <span><a href="#" className='text-[#4318FF] text-[14px] font-medium leading-[20px]'>See project details</a></span></div>
                                                        </div>
                                                        <div className='cursor-pointer'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                <g clip-path="url(#clip0_101_9154)">
                                                                    <path d="M2.25 13.095V15.375C2.25 15.585 2.415 15.75 2.625 15.75H4.905C5.0025 15.75 5.1 15.7125 5.1675 15.6375L13.3575 7.455L10.545 4.6425L2.3625 12.825C2.2875 12.9 2.25 12.99 2.25 13.095ZM15.5325 5.28C15.825 4.9875 15.825 4.515 15.5325 4.2225L13.7775 2.4675C13.485 2.175 13.0125 2.175 12.72 2.4675L11.3475 3.84L14.16 6.6525L15.5325 5.28Z" fill="#8F9BBA" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_101_9154">
                                                                        <rect width="18" height="18" fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[617px] p-[31px] !pt-[23px] bg-white rounded-[20px] date-section">
                                        <div className=''>
                                            <p className='text-[18px] leading-[32px] font-bold'>General Information</p>
                                            <p className='text-[16px] leading-[26px] font-normal text-[#A3AED0] pt-[15px]'>As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all...</p>
                                        </div>
                                        <div className='pt-[20px] flex flex-col gap-[16px]'>
                                            <div className=''>
                                                <div className='grid grid-cols-2 gap-[18px]'>
                                                    <div className='rounded-[16px] shadow-[0px_18px_40px_0px_rgba(112,144,176,0.12)] p-[23px]'>
                                                        <div className='text-[14px] leading-[20px] font-medium text-[#A3AED0]'>Education</div>
                                                        <div className='text-[16px] leading-[16px] font-normal pt-[3px]'>Stanford University</div>
                                                    </div>
                                                    <div className='rounded-[16px] shadow-[0px_18px_40px_0px_rgba(112,144,176,0.12)] p-[23px]'>
                                                        <div className='text-[14px] leading-[20px] font-medium text-[#A3AED0]'>Education</div>
                                                        <div className='text-[16px] leading-[16px] font-normal pt-[3px]'>English, Spanish, Italian</div>
                                                    </div>
                                                    <div className='rounded-[16px] shadow-[0px_18px_40px_0px_rgba(112,144,176,0.12)] p-[23px]'>
                                                        <div className='text-[14px] leading-[20px] font-medium text-[#A3AED0]'>Department</div>
                                                        <div className='text-[16px] leading-[16px] font-normal pt-[3px]'>Product Design</div>
                                                    </div>
                                                    <div className='rounded-[16px] shadow-[0px_18px_40px_0px_rgba(112,144,176,0.12)] p-[23px]'>
                                                        <div className='text-[14px] leading-[20px] font-medium text-[#A3AED0]'>Work History</div>
                                                        <div className='text-[16px] leading-[16px] font-normal pt-[3px]'>Google, Facebook</div>
                                                    </div>
                                                    <div className='rounded-[16px] shadow-[0px_18px_40px_0px_rgba(112,144,176,0.12)] p-[23px]'>
                                                        <div className='text-[14px] leading-[20px] font-medium text-[#A3AED0]'>Organization</div>
                                                        <div className='text-[16px] leading-[16px] font-normal pt-[3px]'>Simmmple Web LLC</div>
                                                    </div>
                                                    <div className='rounded-[16px] shadow-[0px_18px_40px_0px_rgba(112,144,176,0.12)] p-[23px]'>
                                                        <div className='text-[14px] leading-[20px] font-medium text-[#A3AED0]'>Birthday</div>
                                                        <div className='text-[16px] leading-[16px] font-normal pt-[3px]'>20 July 1986</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[421px] p-[31px] !pt-[23px] bg-white rounded-[20px]'>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-[18px] leading-[32px] font-bold'>Notifications</p>
                                            <div className='p-[6px] rounded-[10px] bg-[#F4F7FE] cursor-pointer' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <g clip-path="url(#clip0_101_9204)">
                                                        <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#4318FF" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_101_9204">
                                                            <rect width="24" height="24" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='pt-[33px]'>
                                            {switches.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex gap-[15px] items-center mb-[22px]"
                                                >
                                                    <InputSwitch
                                                        id={`switch-${index}`}
                                                        checked={item.value}
                                                        onChange={(e) =>
                                                            handleSwitchChange(index, e.value)
                                                        }
                                                        className='h-[18px] profile-custome-switch'
                                                    />
                                                    <span className="text-[#2B3674] text-[14px] font-medium leading-[24px]">
                                                        {item.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Profile
