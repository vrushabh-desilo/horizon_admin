import React from "react";
import { useDrop } from "react-dnd";
import Item from "./item";

const Column = ({ id, name, items, onDrop }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "ITEM",
        drop: (draggedItem) => onDrop(draggedItem.sourceColumnId, id, draggedItem.name),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            className={`p-[25px] rounded-[15px] ${isOver ? "bg-blue-100" : "bg-white"
                }`}
        >
            <h2 className="text-lg font-bold mb-2">{name}</h2>
            <div className="space-y-2">
                {items.map((item) => (
                    <Item key={item} item={item} sourceColumnId={id} />
                ))}
            </div>
        </div>
    );
};

export default Column;
