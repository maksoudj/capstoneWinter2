import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Description } from "@mui/icons-material";
export default function MoreModal({ setIsOpen, standard_id,context_of_the_standard,description }) {
  const [questions, setQuestions] = useState();
  const [skills, setSkills] = useState();
  const [vocab, setVocab] = useState();
  useEffect(() => {
    const getEssentials = async () =>{
      await axios.post("http://localhost:3000/api/StandardEssentials", {
        standard_id: standard_id,
      }).then((response) => {
        setQuestions(response.data[0].map((question,index) =>  { return <li key={index}>{question.question}</li>}))
        setSkills(response.data[1].map((skill,index) =>  { return <li key={index}>{skill.description}</li>}))
        setVocab(response.data[2].map((vocab,index) =>  { return <li key={index}>{vocab.vocab}</li>}))
        
      })
    }
    getEssentials()
  },[standard_id]);

  
  console.log(skills);
  console.log(questions);
  console.log(vocab)
  
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-30 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto  ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[90vw] h-[70vh]">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{standard_id}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto overflow-y-auto">
            <h3 className="text-xl font-semibold">Description:</h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
              {description}
              </p>
              <h3 className="text-xl font-semibold">Context of the standard:</h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
              {context_of_the_standard}
              </p>
              <h3 className="text-xl font-semibold">Essential Skills:</h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
              {skills || <div>None</div>}
              </p>
              <h3 className="text-xl font-semibold">Essential Questions:</h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
              {questions || <div>None</div>}
              </p>
              <h3 className="text-xl font-semibold">Essential Vocabulary:</h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                
              {vocab ?? <div>None</div>}
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-20 bg-black"></div>
    </>
  );
}
