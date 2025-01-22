import React, { useState } from "react";
import Column from "./Column";


const initialData = [
    {
        id: 1,
        name: "Backlog",
        items: [
            {
                id: 1,
                title: 'Option to "use local/server version" feature',
                desc: "It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.",
            },
            {
                id: 2,
                title: "Add/modify your own CSS-Selectors",
                desc: "Website Design: The ability to add/modify your own CSS-Selectors like its done in Venus.",
            },
            {
                id: 3,
                title: "Shortcode for templates to display correctly",
                desc: "When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.",
            },
        ],
    },
    {
        id: 2,
        name: "In Progress",
        items: [
            {
                id: 1,
                title: "General ideas to improve 'Edit' workflow",
                desc: "Currently, I have a few templates in the Local Library and when I want to add them I'm always presented (by default).",
            },
            {
                id: 2,
                title: "Shortcode for templates to display correctly",
                desc: "When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.",
            },
            {
                id: 3,
                title: "[UX Design] - Set the default Library tab",
                desc: "I want to be able to set the default Library tab (or a way to remember the last active tab), especially when I already...",
            },
        ],
    },
    {
        id: 3,
        name: "Done",
        items: [
            {
                id: 1,
                title: "Copy/Paste elements between pages",
                desc: "We can only copy/paste elements (or group of elements) in the same page, which is quite limited.",
            },
            {
                id: 2,
                title: "Remove Extra DIV for each container added",
                desc: "I still hope there won't have an extra div for each container we added. It should be something for better styling...",
            },
            {
                id: 3,
                title: "Add Figma files for the Library design blocks",
                desc: "I want to present my clients the Figma files first, so it would be great if you add those as well, more manual downloads...",
            },
        ],
    },
];

const KanbanBoard = () => {
    const [columns, setColumns] = useState(initialData);
    console.log('columns', columns)
    // const handleDrop = (sourceColumnId, targetColumnId, item) => {
    //     setColumns((prevColumns) => {
    //         const sourceColumn = prevColumns.find((col) => col.id === sourceColumnId);
    //         const targetColumn = prevColumns.find((col) => col.id === targetColumnId);

    //         sourceColumn.items = sourceColumn.items.filter((i) => i !== item);
    //         targetColumn.items.push(item);

    //         return [...prevColumns];
    //     });
    // };
    const handleDrop = (sourceColumnId, targetColumnId, item) => {
        setColumns((prevColumns) => {
            return prevColumns.map((col) => {
                if (col.id === sourceColumnId) {
                    return {
                        ...col,
                        items: col.items.filter((i) => i.title !== item.title),
                    };
                }
                if (col.id === targetColumnId) {
                    return {
                        ...col,
                        items: [...col.items, item],
                    };
                }
                return col;
            });
        });
    };



    return (
        <div className="grid grid-cols-3 gap-[24px]">
            {columns.map((col) => (
                <Column
                    key={col.id}
                    id={col.id}
                    name={col.name}
                    items={col.items}
                    onDrop={handleDrop}
                />
            ))}
        </div>
    );
};

export default KanbanBoard;
