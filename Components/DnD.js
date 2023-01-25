import React from "react";
import SubjectCircle from "./SubjectCircle";
import { useState } from "react";
import { useContext } from "react";
import DataContext from "../Context/FormContext";

function DnD() {
  const [addedSubjects, setAddedSubjects] = useState([]);
  const { subjectList, setSubjectList } = useContext(DataContext);


  return (
    <>
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
      
               <button className="relative flex items-center justify-center rounded-full w-[70px] h-[70px] transform transition-all bg-gray-50 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md z-0" >
                <div className="text-5xl">
                 +
                </div>
               </button>
        </div>
      </div>
    </>
  );
}

export default DnD;
