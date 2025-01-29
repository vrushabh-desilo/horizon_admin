import React, { useRef, useState } from "react";
import { useDrag } from "react-dnd";
import { Image } from 'primereact/image';
import { Menu } from "primereact/menu";

const Item = ({ item, sourceColumnId }) => {
    // console.log('item', item)
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "ITEM",
        item: { item, sourceColumnId },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));
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
        <div
            ref={drag}
            className={`p-[20px]  rounded-[15px] shadow-[0px_18px_40px_0px_rgba(112,144,176,0.12)] cursor-pointer ${isDragging ? "bg-gray-300" : "bg-white"}`}
            style={{ opacity: isDragging ? 0.5 : 1 }}
        >
            <div className="flex justify-between items-center gap-[10px]">
                <h3 className="font-bold text-[18px] leading-[28px] ">{item.title}</h3>
                <div className="cursor-pointer" label="Show Left" icon="pi pi-align-left" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup>
                    <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <g clip-path="url(#clip0_101_9459)">
                            <path d="M2.12488 12.3675V14.5208C2.12488 14.7192 2.28071 14.875 2.47904 14.875H4.63238C4.72446 14.875 4.81654 14.8396 4.88029 14.7688L12.6153 7.04083L9.95905 4.38458L2.23113 12.1125C2.16029 12.1833 2.12488 12.2683 2.12488 12.3675ZM14.6695 4.98667C14.9457 4.71042 14.9457 4.26417 14.6695 3.98792L13.012 2.33042C12.7357 2.05417 12.2895 2.05417 12.0132 2.33042L10.717 3.62667L13.3732 6.28292L14.6695 4.98667Z" fill="#A3AED0" />
                        </g>
                        <defs>
                            <clipPath id="clip0_101_9459">
                                <rect width="17" height="17" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            {/* if image null then not display */}
            {item.image && item.image !== 'null' && (
                <div className="my-[20px] rounded-[15px] overflow-auto ">
                    <img src={item.image} alt="item" className="w-full" unoptimized />
                </div>
            )}
            <p className="text-[16px] leading-[26px] font-normal text-[#A3AED0]">{item.desc}</p>
            <div className="flex justify-between items-center gap-[16px] pt-[30px]">
                <div className='flex items-center'>
                    <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full'></div>
                    <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                    <div className='w-[28px] h-[28px] border-[2px] border-white bg-[#E0E5F2] rounded-full ms-[-12px]'></div>
                </div>
                <div>
                    <div className='text-[10px] leading-[15px] font-bold text-white rounded-[16px] px-[25px] py-[6.5px] bg-[#3965FF] cursor-pointer hover:bg-[#868CFF] transition-all duration-300'>
                        UPDATES
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
