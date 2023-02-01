/* eslint-disable react/jsx-key */
import {  useState, useContext } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";
import DataContext from "../Context/FormContext";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function OverViewAccordian({
  standard_id,
  listOfSubjects,
  standardInfo,
}) {
  const [open, setOpen] = useState(0);
  const {questions, setQuestions} = useContext(DataContext);
  const {skills, setSkills} = useContext(DataContext);
  const {vocab, setVocab} = useContext(DataContext);
  

  console.log(skills);
  console.log(questions);
  console.log(vocab);

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
  const formattedDescription = standardInfo[0].description.split('\n').map(str => <p>{str}</p>);
  const formattedContext = standardInfo[0].context_of_the_standard.split('\n').map(str => <p>{str}</p>);


  console.log(standardInfo);
  console.log(listOfSubjects);
  console.log(standard_id);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="pb-5">
      <Accordion
        open={open === 1}
        className="bg-white w-[66vw] rounded-lg py-1 px-4"
        icon={<Icon id={1} open={open} />}
      >
        <AccordionHeader onClick={() => handleOpen(1)}>
          <div className="justify-between flex flex-grow border-none pl-3 text-2xl">
            {standard_id}
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="pl-3">
            <div className="text-lg  font-semibold">
              Discription:
            </div>
            <div className="text-base pb-3">
              {formattedDescription}
            </div>
            <div className="text-lg  font-semibold">
              Context of The Standard:
            </div>
            <div className="text-base pb-3 pr-5">
              {formattedContext}
            </div>
            <div className="text-lg  font-semibold">
              Essential Skills:
            </div>
            <div className="text-base pb-3 pr-5 pl-4 list-disc">
              {fSkills}
            </div>
            <div className="text-lg  font-semibold">
              Essential Questions:
            </div>
            <div className="text-base pb-3 pr-5 pl-4 list-disc">
              {fQuestions}
            </div>
            <div className="text-lg  font-semibold">
              Essential Vocabulary:
            </div>
            <div className="text-base pb-3 pr-5 pl-4 list-disc">
              {fVocab}
            </div>
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
}