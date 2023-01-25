import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Description } from "@mui/icons-material";
import DropArea from "./DropArea";
import DnD from "./DnD";
import DataContext from "../Context/FormContext";

export default function MoreModal({
  setIsOpen,
  standard_id,
  context_of_the_standard,
  description,
}) {
  const { setScrollVisibility } = useContext(DataContext);
  setScrollVisibility("hidden");
  const [questions, setQuestions] = useState(<div>None</div>);
  const [skills, setSkills] = useState(<div>None</div>);
  const [vocab, setVocab] = useState(<div>None</div>);
  useEffect(() => {
    const getEssentials = async () => {
      await axios
        .post("http://localhost:3000/api/StandardEssentials", {
          standard_id: standard_id,
        })
        .then((response) => {
          if (response.data[0].length > 0) {
            setQuestions(
              response.data[0].map((question, index) => {
                return <li key={index}>{question.question}</li>;
              })
            );
          }
          if (response.data[1].length > 0) {
            setSkills(
              response.data[1].map((skill, index) => {
                return <li key={index}>{skill.description}</li>;
              })
            );
          }
          if (response.data[2].length > 0) {
            setVocab(
              response.data[2].map((vocab, index) => {
                return <li key={index}>{vocab.vocab}</li>;
              })
            );
          }
        });
    };
    getEssentials();
  }, [standard_id]);

  console.log(skills);
  console.log(questions);
  console.log(vocab);

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
                {skills}
              </p>
              <h3 className="text-xl font-semibold">Essential Questions:</h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {questions}
              </p>
              <h3 className="text-xl font-semibold">Essential Vocabulary:</h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {vocab}
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
