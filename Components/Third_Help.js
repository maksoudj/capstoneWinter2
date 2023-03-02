import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Description } from "@mui/icons-material";
import DropArea from "./DropArea";
import DnD from "./DnD";
import DataContext from "../Context/FormContext";

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
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[40vw] h-[45vh]">
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
            <div className="relative p-6 flex-auto overflow-y-auto">
              <h3 className="text-xl font-semibold"></h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
              </p>
              <h3 className="text-lg font-semibold list-item">
                This is the Matching page. Each Standard Of Learning is displayed for the grade level chosen, along with the description, and context of the Standard.
              </h3>
              <h3 className="text-lg font-semibold list-item">
                By clicking the "more" button in the bottom right corner of each Standard box, the Essential skills, Essential questions, and Vocabulary will also show for each Standard.</h3>
              <h3 className="text-lg font-semibold list-item">For each standard, you will have four subject options to match it to. Multiple subjects can be matched to one Standard, and multiple standards can have the same subject. Match the best set of subjects to the given standard. </h3>
              <h3 className="text-lg font-semibold list-item">Once a subject has been added to a Standard, hovering over the subject matched with the standard will reveal two things, a "remove" button to remove the standard, and an "add note" feature that allows two notes to be added: what part of the core Standard this CS Standard should be added to, and any additional notes for any other details about why this core subject and core Standard was picked for this CS Standard.</h3>
              <h3 className="text-lg font-semibold list-item">New subjects can be added by clicking the + icon in the bottom bar by the subjects, and any subject can be removed by draggining it and droping it into the trash can. </h3>
              <h3 className="text-lg font-semibold list-item">As the Standards get matched, the progress bar will get filled up until all Standards are matched to at least one subject. Once all Standards are matched to all the subjects to satisfaction, Continue on with the "next" button in the bottom right. </h3>
            
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-50 bg-black"></div>
      
    </>
  );
}
