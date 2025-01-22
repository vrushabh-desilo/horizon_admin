import React from "react";
import { useDrag } from "react-dnd";

const Item = ({ item, sourceColumnId }) => {
    console.log('item', item)
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "ITEM",
        item: { item, sourceColumnId },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className={`p-2 border rounded shadow ${isDragging ? "bg-gray-300" : "bg-white"}`}
            style={{ opacity: isDragging ? 0.5 : 1 }}
        >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
    );
};

export default Item;
