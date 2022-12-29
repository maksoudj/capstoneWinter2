import React from "react";
import { useState } from "react";


function AddedSubjectButton({subject}) {
  const [note,setNote] = useState(<div>a</div>)
  return (
    <button
      onClick={() => {alert(note.valueOf())}}
      key={subject.id}
      className=" mr-5 relative flex items-center justify-center rounded-full w-[70px] h-[70px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md"
      id={subject.id}
    >
      <p className="text-white text-sm text-center">{subject.subject}</p>
    </button>
  );
}

export default AddedSubjectButton;
