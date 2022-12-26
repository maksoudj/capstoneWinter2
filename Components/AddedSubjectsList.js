import React from "react";

function AddedSubjectsList( subjects ) {
  console.log(subjects)
  return (subjects.map((subject) => (
    <div
      key={subject.id}
      className=" mr-5 relative flex items-center justify-center rounded-full w-[70px] h-[70px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md"
      id={subject.id}
    >
      <p class="text-white text-sm text-center">{subject.subject}</p>
    </div>
  )));
}
  

export default AddedSubjectsList;
