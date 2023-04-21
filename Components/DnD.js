import React from "react";
import SubjectCircle from "./SubjectCircle";
import { useContext } from "react";
import DataContext from "../Context/FormContext";
import PopoverButton from "./Popover";
import SubjectTrash from "./SubjectTrash";
/**************************************************************************************
Component: DnD (Drag and Drop)
Function: This is a functional React component that displays subject circles and a trash bin.
The component uses data from a context provider (FormContext) to render the circles dynamically.
*------------------------------------------------------------------------------------------------
Input:
Parameters - None
Context -
  subjectList: An array of subject objects that contains information about each subject, such as subject name and ID.
  setSubjectList: A function to update the subjectList array in the context.
  trashVisibility: A boolean value that determines whether the trash bin is visible or not.
Output:
Return – The component returns JSX that displays the subject circles and the trash bin.
**************************************************************************************/

function DnD() {
  const { subjectList, setSubjectList} = useContext(DataContext);
  const {trashVisibility} = useContext(DataContext);

  
  return (
    <>
      <div>
      
        <div className="mx-auto  w-[780px] rounded-full bg-slate-500 font-serif shadow-xl outline outline-1 z-20">
          <div className="flex justify-between p-4">
            {subjectList.map((subject) => {
              return (
                <SubjectCircle
                  subject={subject.subject_name}
                  key={subject.subject_id}
                  id={subject.subject_id}
                />
              );
            })}
            <PopoverButton />
            <div className="absolute left-[15vw]">
        <SubjectTrash />
        </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default DnD;
