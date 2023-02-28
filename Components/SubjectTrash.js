import React from "react";
import { useDrop } from "react-dnd";
import DataContext from "../Context/FormContext";
import { useContext } from "react";

function SubjectTrash() {
  const { subjectList, setSubjectList } = useContext(DataContext);
  const { matching, setMatching} = useContext(DataContext);
  const {setUpdateSubjects} = useContext(DataContext);
  const [subjectToDrop, drop] = useDrop(() => ({
    accept: "subject",
    drop: (item) => removeSubjects(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }),[matching, subjectList]);
 
  const deleteSubject = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setSubjectList((subjectList) => subjectList.filter((subject) => id !== subject.subject_id));
      });
    },
    [setSubjectList]
  );

  const removeSubjects = (id) => {
       
        setMatching((matching) => {return {...matching}} );
        console.log(id);
        const subjectToRemove = subjectList.find(
          (subject) => id === subject.subject_id
        );
      
      
        
       
      
       if(Object.keys(matching).filter((standard_id) => {return matching[standard_id].find((subject) => {return subject.subject_id == id} )}).length > 0){
            alert("Error! Subject is present in standards " + Object.keys(matching).filter((standard_id) => {return matching[standard_id].find((subject) => {return subject.subject_id == id} )}).toString())
       }
       else if(subjectList.find(
        (subject) => id === subject.subject_id
      )){
          console.log(subjectList);
          //setSubjectList((subjectList) => {return subjectList.filter((subject) => id != subject.subject_id)});
          //deleteSubject(id);
                    
          setUpdateSubjects(true); 
          console.log(subjectList);
       }
      
       
  };

  return (
    <div className="flex flex-row m-2">
     {}
      <div
        ref={drop}
        className="relative flex items-center justify-center rounded-full w-[70px] h-[70px] transform transition-all outline-dashed"
      >
        <p className="text-white text-sm text-center">Remove a Subject</p>
      </div>
    </div>
  );
}

export default SubjectTrash;
