import React from "react";
import { TextField } from "@mui/material";
import { useContext } from "react";
import DataContext from "../Context/FormContext";
import { width } from "@mui/system";
import AddButton from "./AddButton";

function Note({ subject, standard_id, setIsNoteOpen }) {
  const { setScrollVisibility, matching, setMatching } = useContext(DataContext);
  setScrollVisibility("hidden");
  
  function handleSubmit(event) {
  event.preventDefault();


  const Note = {
    ...subject,
    Section_Note: event.target.Section_Note.value,
    Add_Note: event.target.Add_Note.value,
  };
  const ID1 = standard_id
  const ID2 = subject.subject_name
  const index = matching[standard_id].findIndex((subject2) => {return subject2.subject_id == subject.subject_id})
  let edited_matching = matching[ID1].filter((subject2)=>subject2.subject_id != subject.subject_id)
  edited_matching.splice(index, 0, Note)
  setMatching({...matching, [standard_id]:edited_matching})


  console.log(Section_Note)
  console.log(Add_Note)
  console.log(matching)
  console.log(Note)
  console.log(ID1)
  console.log(ID2)
  console.log(edited_matching)
  console.log(index)  
}
  return (
    <>
      <div className="justify-center items-center flex-col flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1000] outline-none focus:outline-none">
        <div className="relative my-6 mx-auto z-[1000] ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[30vw] h-[45vh] z-[1000]">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{standard_id}: {subject.subject_name}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => {
                  setIsNoteOpen(false);
                  setScrollVisibility("visible");
                }}
              >
                <div className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </div>
              </button>
            </div>
            <form
          onSubmit={(event) => {
          handleSubmit(event);
        }}
            >
              <div className = "top-0 " >

              <div className = "flex justify-center">
              <TextField
              className = "w-[90%]"
              id="Section_Note"
              label="Section"
              variant="filled"
              margin="normal"
              size="small"
              required={false}
              onKeyPress = {e=>{
                if (e.key==="Enter") e.preventDefault()
              }}
            />
            </div>
            <div className = "flex justify-center">
            <TextField
              className = "w-[90%] "
              id="Add_Note"
              label="Add Note"
              variant="filled"
              margin="normal"
              size="small"
              fullwidth
              multiline
              rows = {3}
              required={false}
            />
            </div>
            <div className = "float-right pr-6">
              <AddButton/>
            </div>
            </div>
            </form>
            {/*body*/}
            <div className="relative p-6 flex-auto overflow-y-auto"></div>
            {/*footer*/}
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 bg-black z-30"></div>
    </>
  );
}

export default Note;
