import React, { useRef, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import KanbanBoard from '../DND/KanbanBoard'
import { InputText } from 'primereact/inputtext'
import { Image } from 'primereact/image'
import userProfile from '../../../assets/images/Elipse 5.png';
import { Menu } from 'primereact/menu'



const Kanban = () => {
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
    return (
        <div>
            <div>
                <div className="">
                    <div className=" flex justify-between items-center sticky top-0 pt-[40px] bg-[#F4F7FE]">
                        <div className="">
                            <div className="flex items-center text-[#707EAE] gap-[5px]">
                                <p>Pages</p>
                                <span>/</span>
                                <p>Tables</p>
                            </div>
                            <h1 className="font-bold text-[34px] leading-[42px]">
                                Tables
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
                            <div className='cursor-pointer' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup >
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
                            <div className='cursor-pointer' label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup >
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
                            <div className="max-w-[50px] rounded-full overflow-auto cursor-pointer" label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup >
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
                            <DndProvider backend={HTML5Backend}>
                                <KanbanBoard />
                            </DndProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kanban
