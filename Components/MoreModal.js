import React from "react";
import { useState, useEffect, useContext } from "react";
import DropArea from "./DropArea";
import DnD from "./DnD";
import DataContext from "../Context/FormContext";
/**************************************************************************************
Component: MoreModal
Function: This component displays more details about a particular standard. It contains a modal that appears when a user clicks on a specific standard. The modal shows the description, context, essential skills, essential questions, and essential vocabulary of the standard. Users can also drag and drop files onto the modal.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Parameters -
  setIsOpen: a function that sets the visibility of the modal
  standard_id: the ID of the standard that the modal displays information for
  context_of_the_standard: the context of the standard
  description: the description of the standard
Output:
  A modal that displays information about the selected standard
  A drop area where users can drag and drop files
**************************************************************************************/
export default function MoreModal({
  setIsOpen,
  standard_id,
  context_of_the_standard,
  description,
}) {
  const { setScrollVisibility } = useContext(DataContext);
  setScrollVisibility("hidden");
  const {questions, setQuestions} = useContext(DataContext);
  const {skills, setSkills} = useContext(DataContext);
  const {vocab, setVocab } = useContext(DataContext);
  useEffect(()=> {

  },[])

 

  if (vocab.filter(vocab => vocab.standard_id === standard_id).length === 0){
    var fVocab = <div>None</div>
  }
  else{
    var fVocab = vocab.filter(vocab => vocab.standard_id === standard_id).map((vocab, index) => {
      return <li key={index}>{vocab.vocab}</li>;
    })
  }

  if (skills.filter(skills => skills.standard_id === standard_id).length === 0){
    var fSkills = <div>None</div>
  }
  else{
    var fSkills = skills.filter(skills => skills.standard_id === standard_id).map((skill, index) => {
      return <li key={index}>{skill.description}</li>;
    })
  }

  if (questions.filter(questions => questions.standard_id === standard_id).length === 0){
    var fQuestions = <div>None</div>
  }
  else{
    var fQuestions = questions.filter(questions => questions.standard_id === standard_id).map((question, index) => {
      return <li key={index}>{question.question}</li>;
    })
  }

  return (
    <>
      <div className="justify-center items-center flex-col flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] outline-none focus:outline-none">
        <div className="relative my-6 mx-auto  ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[90vw] h-[70vh]">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{standard_id}</h3>
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
              <h3 className="text-xl font-semibold">Description:</h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {description}
              </p>
              <h3 className="text-xl font-semibold">
                Context of the standard:
              </h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {context_of_the_standard}
              </p>
              <h3 className="text-xl font-semibold">Essential Skills:</h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
              {fSkills}
              </p>
              <h3 className="text-xl font-semibold">Essential Questions:</h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
              {fQuestions}
              </p>
              <h3 className="text-xl font-semibold">Essential Vocabulary:</h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
              {fVocab}
              </p>
            </div>
            {/*footer*/}

            <div className="flex items-center justify-center p-3 border-t border-solid border-slate-200 rounded-b z-[100]">
              <DropArea standard_id={standard_id} />
            </div>
          </div>
        </div>
        <div className="z-[50]">
          <DnD />
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-50 bg-black"></div>
    </>
  );
}
