import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import Item from "./item";
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';


const Column = ({ id, name, items, image, onDrop }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "ITEM",
        drop: (draggedItem) => onDrop(draggedItem.sourceColumnId, id, draggedItem),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));
    const menuLeft = useRef(null);
    const lists = [
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
            ref={drop}
            className={`p-[25px] rounded-[15px] min-w-[450px] w-full overflow-auto ${isOver ? "bg-blue-100" : "bg-white"
                }`}
        >
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold mb-2">{name}</h2>
                <div
                    className="bg-[#F4F7FE] px-[33px] py-[9px] rounded-[12px] cursor-pointer"
                    label="Show Left"
                    icon="pi pi-align-left"
                    onClick={(event) => menuLeft.current.toggle(event)}
                    aria-controls="popup_menu_left"
                    aria-haspopup>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                        <path d="M9.32703 3.71619V13.2787" stroke="#4318FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.3896 8.49744H4.26459" stroke="#4318FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <Menu model={lists} popup ref={menuLeft} id="popup_menu_left" />
            </div>
            <div className="flex flex-col gap-[20px] pt-[44px]">
                {items.map((item) => (
                    <Item key={item.id} item={item} sourceColumnId={id} />
                ))}
            </div>
        </div>
    );
};

export default Column;
