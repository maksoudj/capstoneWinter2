import React from "react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import SubjectCircle from "./SubjectCircle";
import AddedSubjectButton from "./AddedSubjectButton";
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
        subjectToAdd[0]
      ];
      return [
        ...new Map(temp.map((subject) => [subject.id, subject])).values(),
      ];
    });
  };



  return (
    <div className="flex flex-row m-2">
      {addedSubjects.map((subject) => AddedSubjectButton(subject))}
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
