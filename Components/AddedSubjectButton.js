import React from "react";
import { useState } from "react";
import { useContext } from "react";
import DataContext from "../Context/FormContext";
import Note from "./Note";
/***************************************************************************************
Component: AddedSubjectButton
Function:
This component is used to render a button that represents a subject added by the user.
It handles the removal of the subject and rendering of a note component.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Props:
  subject: An object representing the subject added by the user, containing subject_id and subject_name.
  standard_id: A string representing the ID of the standard the subject belongs to.
Output:
Returns the JSX code for rendering the button and the note component.
Return - None
**************************************************************************************/
function AddedSubjectButton({ subject, standard_id }) {
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [isNoteAdded,setIsNoteAdded] = useState("Add Note")
  const { matching, setMatching } = useContext(DataContext);

  function handleRemove() {
    const newSubjects = matching[standard_id].filter(
      (subjects) => subjects.subject_id != subject.subject_id
    );
    if (newSubjects.length == 0) {
      const matchingCopy = { ...matching };
      delete matchingCopy[standard_id]; 
      setMatching(matchingCopy);
    } else {
      setMatching({ ...matching, [standard_id]: newSubjects });
    }
  }
  return (
    <div>
      {isNoteOpen && (
        <Note
          subject={subject}
          standard_id={standard_id}
          setIsNoteOpen={setIsNoteOpen}
          setIsNoteAdded={setIsNoteAdded}
        />
      )}
      <div
        key={subject.subject_id}
        className=" group mr-5 relative flex items-center justify-center rounded-full w-[70px] h-[70px] transform transition-all bg-codeVa-vDarkBlue ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200"
        id={subject.subject_id}
      >
        <div className="text-white text-sm text-center group-hover:opacity-0 duration-200">
          {subject.subject_name}
        </div>
        <div className="text-white text-xs text-center opacity-0 group-hover:opacity-100 fixed group-hover:hover:transition-all duration-200">
          <button className=" z-[100]"onClick={() => setIsNoteOpen(true)}>{isNoteAdded}</button>
          <div className=" mt-[-15%] mb-[5%] cursor-default z-[-1] select-none">______</div>
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
