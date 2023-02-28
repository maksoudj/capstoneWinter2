import React from "react";
import SubjectCircle from "./SubjectCircle";
import { useState, useEffect } from "react";
import { useContext } from "react";
import DataContext from "../Context/FormContext";
import PopoverButton  from "./Popover";
import SubjectTrash from "./SubjectTrash";

function DnD() {
  const { subjectList, setSubjectList} = useContext(DataContext);
 
  const addedSubjects = subjectList.map((subject) => {
    return (
      <SubjectCircle
        subject={subject.subject_name}
        key={subject.subject_id}
        id={subject.subject_id}
      />
    );
  })
  
  
  return (
    <>
    <div>
      <div className="mx-auto  w-[780px] rounded-full bg-slate-500 font-serif shadow-xl outline outline-1 z-20">
        <div className="flex justify-between p-4">
           {addedSubjects}
            <PopoverButton/>
        </div>
      </div>
          <SubjectTrash/>
      </div>
    </>
  );
}

export default DnD;
