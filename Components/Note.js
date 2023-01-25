import React from "react";
import { useContext } from "react";
import DataContext from "../Context/FormContext";

function Note({ subject, standard_id, setIsNoteOpen }) {
  const { setScrollVisibility } = useContext(DataContext);
  setScrollVisibility("hidden");
  return (
    <>
      <div className="justify-center items-center flex-col flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1000] outline-none focus:outline-none">
        <div className="relative my-6 mx-auto z-[1000] ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[50vw] h-[70vh] z-[1000]">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{standard_id}</h3>
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
