import React from "react";
import { TextField } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import DataContext from "../Context/FormContext";
import AddButton from "./AddButton";
import { Alert } from "@material-tailwind/react";
/**************************************************************************************
Component: Note
Function: Renders a form to add or change a note for a specific subject in a standard.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Parameters - {subject, standard_id, setIsNoteOpen, setIsNoteAdded}
  subject: an object containing information about the subject (e.g. subject name, subject id).
  standard_id: the id of the standard to which the subject belongs.
  setIsNoteOpen: a function that sets whether the Note component is open or not.
  setIsNoteAdded: a function that sets whether a note has been added to the subject or not.
Output:
Return – A React component that renders a form to add or change a note for a specific subject in a standard.
**************************************************************************************/

function Note({ subject, standard_id, setIsNoteOpen, setIsNoteAdded }) {
  const { setScrollVisibility, matching, setMatching } =
    useContext(DataContext);
  setScrollVisibility("hidden");
  var buttonText = "Add Note"
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [showAlert]);
  function handleSubmit(event) {
    event.preventDefault();
    if(event.target.Section_Note.value && event.target.Add_Note.value){
    const Note = {
      ...subject,
      section: event.target.Section_Note.value,
      note: event.target.Add_Note.value,
    };

    const index = matching[standard_id].findIndex((subject2) => {
      return subject2.subject_id == subject.subject_id;
    });
    let edited_matching = matching[standard_id].filter(
      (subject2) => subject2.subject_id != subject.subject_id
    );
    edited_matching.splice(index, 0, Note);
    setMatching({ ...matching, [standard_id]: edited_matching });
    setShowAlert(true);
    }else{ alert('Please add both Section Note and Add Note before submitting.');}
  }
  let defSection = "";
  let defNote = "";
  
    defSection = matching[standard_id].filter((subject2) => {
      return subject2.subject_id == subject.subject_id;
    })[0]["section"];
    defNote = matching[standard_id].filter((subject2) => {
      return subject2.subject_id == subject.subject_id;
    })[0]["note"];
    if (defSection && defNote ){
      buttonText = "Change Note"
      setIsNoteAdded("See Note")
    }
    else{
      setIsNoteAdded("Add Note")
    }
    let subName = subject.subject_name + ' Standard'
    
  

  return (
    <>
      <div className="justify-center items-center flex-col flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1000] outline-none focus:outline-none">
        <div className="relative my-6 mx-auto z-[1000] ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[30vw] h-[45vh] z-[1000]">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                CS {standard_id}: {subject.subject_name}
              </h3>
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
              <div className="top-0 ">
                <div className="flex justify-center">
                  <TextField
                    className="w-[90%]"
                    id="Section_Note"
                    label= {subName}
                    variant="filled"
                    margin="normal"
                    size="small"
                    defaultValue={defSection}
                    required={false}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") e.preventDefault();
                    }}
                  />
                </div>
                <div className="flex justify-center">
                  <TextField
                    className="w-[90%] "
                    id="Add_Note"
                    label="Add Note"
                    variant="filled"
                    margin="normal"
                    size="small"
                    defaultValue={defNote}
                    fullwidth
                    multiline
                    rows={3}
                    required={false}
                  />
                </div>

                <div className="float-right pr-6">
                  <AddButton text = {buttonText}/>
                </div>
              </div>
            </form>
            {/*body*/}
            <div className="relative p-6 flex-auto overflow-y-auto"></div>
            <div className=" z-[9999]">
              <Alert
                show={showAlert}
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 80 },
                }}
                dismissible={{
                  onClose: () => setShowAlert(false),
                }}
              >
                Note Added
              </Alert>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 bg-black z-30"></div>
    </>
  );
}

export default Note;
