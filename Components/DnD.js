import React from "react";
import SubjectCircle from "./SubjectCircle";
import { useState, useEffect } from "react";
import { useContext } from "react";
import DataContext from "../Context/FormContext";
import PopoverButton  from "./Popover";
function DnD() {
  const [addedSubjects, setAddedSubjects] = useState([]);
  const { subjectList, setSubjectList } = useContext(DataContext);
  const [openSubject, setOpenSubject] = useState(false);

  useEffect(() => {
      
    setAddedSubjects(() => {return subjectList.map((subject) => {
      return (
        <SubjectCircle
          subject={subject.subject_name}
          key={subject.subject_id}
          id={subject.subject_id}
        />
      );
    })});
  });
  

  return (
    <>
      <div className="mx-auto  w-[780px] rounded-full bg-slate-500 font-serif shadow-xl outline outline-1 z-20">
        <div className="flex justify-between p-4">
           {addedSubjects}
            <PopoverButton/>
        </div>
      </div>
    </>
  );
}

export default DnD;
