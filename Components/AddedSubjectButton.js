import React from "react";
import { useState } from "react";
import { useContext } from "react";
import DataContext from "../Context/FormContext";
import Note from "./note";

function AddedSubjectButton({ subject, standard_id }) {
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const { matching, setMatching } = useContext(DataContext);
  function handleRemove() {
    const newSubjects = matching[standard_id].filter(
      (subjects) => subjects.subject_id != subject.subject_id
    );
    if (newSubjects.length == 0) {
      const matchingCopy = { ...matching };
      delete matchingCopy[standard_id];
      setMatching(matchingCopy);
      console.log(matching);
    } else {
      setMatching({ ...matching, [standard_id]: newSubjects });
      console.log(matching);
    }
  }
  console.log(subject);
  console.log(matching);
  console.log(standard_id);
  return (
    <div>
      {isNoteOpen && (
        <Note
          subject={subject}
          standard_id={standard_id}
          setIsNoteOpen={setIsNoteOpen}
        />
      )}
      <div
        key={subject.subject_id}
        className=" group mr-5 relative flex items-center justify-center rounded-full w-[70px] h-[70px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200"
        id={subject.subject_id}
      >
        <div className="text-white text-sm text-center group-hover:opacity-0 duration-200">
          {subject.subject_name}
        </div>
        <div className="text-white text-xs text-center opacity-0 group-hover:opacity-100 fixed group-hover:hover:transition-all duration-200">
          <button onClick={() => setIsNoteOpen(true)}>Add Note</button>
          <div className="mb-2">______</div>
          <button
            onClick={() => {
              handleRemove();
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddedSubjectButton;
