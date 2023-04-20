import React from "react";
import { useContext } from "react";
import DataContext from "../Context/FormContext";
import { useDrag } from "react-dnd";
function SubjectCircle(props) {
  const {setTrashVisibility} = useContext(DataContext)
    const [{isDragging},drag] = useDrag(() => ({
        type: "subject",
        item: {id: props.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            
        }),
        
    }))
    
  return (
    <div className="relative flex items-center justify-center rounded-full w-[70px] h-[70px] transform transition-all bg-codeVa-vDarkBlue ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md" id = {props.id} ref = {drag} >
        <p className="text-white text-sm text-center">{props.subject}</p>
    </div>
  );
}

export default SubjectCircle;
