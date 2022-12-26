import React from "react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import SubjectCircle from "./SubjectCircle";
import AddedSubjectsList from "./AddedSubjectsList";
import { useMemo, useCallback } from "react";
const subjectList = [
  {
    id: 1,
    subject: "Math",
  },
  {
    id: 2,
    subject: "Science",
  },
  {
    id: 3,
    subject: "English",
  },
  {
    id: 4,
    subject: "Social Studies",
  },
];
function DropCircle() {
  const [addedSubjects, setAddedSubjects] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "subject",
    drop: (item) => addSubjects(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addSubjects = (id) => {
    console.log(id);
    const subjectToAdd = subjectList.filter((subject) => id === subject.id);
    console.log(subjectToAdd);
    setAddedSubjects((addedSubjects) => {
      const temp = [
        ...addedSubjects,
        <div
          key={subjectToAdd[0].id}
          className=" mr-5 relative flex items-center justify-center rounded-full w-[70px] h-[70px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md"
          id={subjectToAdd[0].id}
        >
          <p className="text-white text-sm text-center">
            {subjectToAdd[0].subject}
          </p>
        </div>,
      ];
      return [
        ...new Map(temp.map((subject) => [subject.key, subject])).values(),
      ];
    });
  };



  return (
    <div className="flex flex-row m-2">
      {addedSubjects}
      <div
        ref={drop}
        className="relative flex items-center justify-center rounded-full w-[70px] h-[70px] transform transition-all outline-dashed"
      >
        <p className="text-white text-xs text-center">Add a Subject</p>
      </div>
    </div>
  );
}

export default DropCircle;
