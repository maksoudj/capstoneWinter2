import React from "react";

import { useDrag } from "react-dnd";
function SubjectCircle(props) {
    const [{isDragging},drag] = useDrag(() => ({
        type: "subject",
        item: {id: props.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))
  return (
    <div className="relative flex items-center justify-center rounded-full w-[70px] h-[70px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md" id = {props.id} ref = {drag} >
        <p class="text-white text-sm text-center">{props.subject}</p>
    </div>
  );
}

export default SubjectCircle;
