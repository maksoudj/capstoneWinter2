import React from "react";
import { useDrop } from "react-dnd";
import DataContext from "../Context/FormContext";
import { useContext,useState } from "react";
import Image from "next/image";
import TrashIcon from './trash.svg'

function SubjectTrash() {
  const { subjectList, setSubjectList } = useContext(DataContext);
  const { matching, setMatching } = useContext(DataContext);
  
  const [subjectToDrop, drop] = useDrop(
    () => ({
      accept: "subject",
      drop: (item) => removeSubjects(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      })
    })
    ,[matching,subjectList]
  );
  

  const removeSubjects = (id) => {
    setMatching((matching) => {
      return { ...matching };
    });
    console.log(id);
    const subjectToRemove = subjectList.findIndex(
      (subject) => id == subject.subject_id
    );

    if (
      Object.keys(matching).filter((standard_id) => {
        return matching[standard_id].find((subject) => {
          return subject.subject_id == id;
        });
      }).length > 0
    ) {
      alert(
        "Error! Subject is present in standards " +
          Object.keys(matching)
            .filter((standard_id) => {
              return matching[standard_id].find((subject) => {
                return subject.subject_id == id;
              });
            })
            .toString()
      );
    } else if (subjectList.find((subject) => id === subject.subject_id != null)) {
      console.log(subjectList.findIndex(
        (subject) => id == subject.subject_id
      ))
      console.log(subjectList);
      const temp = subjectList;
      setSubjectList( temp.splice(temp.findIndex(
        (subject) => id == subject.subject_id
      ),1));
      console.log(subjectList);
    }
  };
  console.log(subjectList);

    return (
    <div className="flex m-2 pb-10" ref={drop}
    >
      <div
        className=" w-[70px] h-[70px] center "
      >
          <Image  src={TrashIcon} alt="aaa" className=" content-center m-5"/>
      </div>
    </div>
  );
}

export default SubjectTrash;
