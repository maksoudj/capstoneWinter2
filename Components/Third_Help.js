import React from "react";
import {useContext } from "react";
import DataContext from "../Context/FormContext";
/**************************************************************************************
Component: Third_help
Function: This component represents the help section for the third page of the application.
It provides an explanation of the functionality and usage instructions for the user.
*-----------------------------------------------------------------------------------------
Input:
Props -
  setIsOpen: a function to toggle the visibility of the help section
Context -
  setScrollVisibility: a function to set the visibility of the scroll bar in the main page context
Output:
Return – A JSX element that renders the help section for the third page of the application.
**************************************************************************************/

export default function Third_help({
  setIsOpen,
}) {
    const { setScrollVisibility } = useContext(DataContext);
    setScrollVisibility("hidden");

  return (
    <>
      <div className="justify-center items-center flex-col flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] outline-none focus:outline-none">
        <div className="relative my-6 mx-auto  ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[40vw] h-[45vh]  ml-10 mb-5">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Third Page Help:</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => {
                  setIsOpen(false);
                  setScrollVisibility("visible");
                }}
              >
                <div className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </div>
              </button>
            </div>
            {/*body*/}
            
            <div className="relative p-6 flex-auto overflow-y-scroll mb-5">
              <h3 className="text-lg font-semibold">
              <ul>
              <li>- Welcome to the Matching page where you can match Standards of Learning for the chosen grade level with their respective descriptions and contexts. Each Standard box has a "more" button in the bottom right corner that, when clicked, reveals Essential skills, Essential Questions, and Vocabulary for that Standard.</li>
              <li>- You will be presented with four subject options for each Standard, and you can match multiple subjects to one Standard, and vice versa. Your task is to select the most appropriate set of subjects that match each Standard.</li>
              <li>- After matching a subject to a Standard, you can hover over the matched subject to reveal a "remove" button that removes the match and an "add note" feature where you can add two notes. The first note is about which part of the core Standard the CS Standard should be added to, and the second note should be used for your specific lesson ideas for CS integration. </li>
              <li>- You can add new subjects by clicking the + icon on the bottom bar by the subjects, and any subject can be removed by dragging and dropping it into the trash can. As you match the Standards, the progress bar will fill up, and once all Standards are matched to at least one subject to satisfaction, click the "next" button in the bottom right to continue. </li>
              </ul>
              </h3>
              
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-50 bg-black"></div>
      
    </>
  );
}
