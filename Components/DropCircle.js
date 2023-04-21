import React from "react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import AddedSubjectButton from "./AddedSubjectButton";
import { useContext} from "react";
import DataContext from "../Context/FormContext";
/**************************************************************************************
Component: DropCircle
Function: This component is responsible for displaying a circle that can be used to add subjects. 
It allows users to drag and drop a subject onto it, and then adds the subject to the corresponding standard.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Parameters - { standard_id }: An integer representing the ID of the standard to which the subject is being added.
Output: This component returns a JSX element representing a div that displays the added subjects and the circle where subjects can be dropped.
Return – JSX Element
**************************************************************************************/


function DropCircle({ standard_id }) {
  const {matching, setMatching} = useContext(DataContext);
  const {subjectList} = useContext(DataContext)
  
    const [{ isOver }, drop] = useDrop(() => ({
    accept: "subject",
    drop: (item) => addSubjects(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })
  ,[matching,subjectList]);
  const [ready, setReady] = useState(() => {
    if (matching.hasOwnProperty('map')){
      return true
    }
    return false
  });
  const addSubjects = (id) => {
    const subjectToAdd = subjectList.filter((subject) => id === subject.subject_id);
    setMatching((matching) => {
      if (standard_id in matching && matching[standard_id].filter((subject) => id === subject.subject_id).length > 0){
        return matching
      }
      if (standard_id in matching){
        const temp = [...matching[standard_id] , subjectToAdd[0]];
        return { ...matching, [standard_id]: temp };
      }
      return {...matching, [standard_id]: [subjectToAdd[0]]}
    });
    setReady(true);
  };
  
  let matches = <div></div>
try{
 matches =  matching[standard_id].map((subject) => (
      <AddedSubjectButton subject={subject} key={subject.id} standard_id = {standard_id} />
    ))
}
catch(error){
   matches = <div></div>
}
  return (
    <div className="flex flex-row m-2 ">
      {
        matches}
      <div
        ref={drop}
        className="relative flex items-center justify-center rounded-full w-[70px] h-[70px] transform transition-all outline-dashed"
      >
        <p className="text-white text-sm text-center">Add a Subject</p>
      </div>
    </div>
  );
}

export default DropCircle;
