/* eslint-disable react/jsx-key */
import React, { forwardRef, useContext } from "react";
import DataContext from "../Context/FormContext";
/**************************************************************************************

Component: ComponentToPrint
Function:
  Renders the printable component for the PDF generation, which includes CS standards,
  core standards, notes, descriptions, context of the standard, skills, questions, and vocabulary
  related to each standard.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Props:
  standardsPerSubject: an array of objects that contains the standards, core standards,
  and notes for each subject to be printed in the PDF.
ref: a reference to the printable component.
Context:
  questions: an array of objects that contains the questions related to the CS standards.
  setQuestions: a function to update the questions in the context.
  skills: an array of objects that contains the skills related to the CS standards.
  setSkills: a function to update the skills in the context.
  vocab: an array of objects that contains the vocabulary related to the CS standards.
  setVocab: a function to update the vocabulary in the context.
  matching: an object that maps the CS standards to their corresponding core standards and notes.
  gradeStandards: an array of objects that contains the descriptions and contexts of each CS standard.
Output:
Return – a printable component for the PDF generation that includes the CS standards, core standards,
notes, descriptions, context of the standard, skills, questions, and vocabulary related to each standard.
**************************************************************************************/

const ComponentToPrint = forwardRef(({ standardsPerSubject }, ref) => {
  const { questions, setQuestions } = useContext(DataContext);
  const { skills, setSkills } = useContext(DataContext);
  const { vocab, setVocab, matching, gradeStandards } = useContext(DataContext);
  function GetStandardInfo(standard_id) {
    if (
      vocab.filter((vocab) => vocab.standard_id === standard_id).length === 0
    ) {
      var fVocab = <div>None</div>;
    } else {
      var fVocab = vocab
        .filter((vocab) => vocab.standard_id === standard_id)
        .map((vocab, index) => {
          return <li key={index}>{vocab.vocab}</li>;
        });
    }

    if (
      skills.filter((skills) => skills.standard_id === standard_id).length === 0
    ) {
      var fSkills = <div>None</div>;
    } else {
      var fSkills = skills
        .filter((skills) => skills.standard_id === standard_id)
        .map((skill, index) => {
          return <li key={index}>{skill.description}</li>;
        });
    }

    if (
      questions.filter((questions) => questions.standard_id === standard_id)
        .length === 0
    ) {
      var fQuestions = <div>None</div>;
    } else {
      var fQuestions = questions
        .filter((questions) => questions.standard_id === standard_id)
        .map((question, index) => {
          return <li key={index}>{question.question}</li>;
        });
    }
    const standardInfo = gradeStandards.find(
      (standards) => standards.standard_id == standard_id
    );
      
    const formattedDescription = standardInfo.description
      .split("\n")
      .map((str) => <p>{str}</p>);
    const formattedContext = standardInfo.context_of_the_standard
      .split("\n")
      .map((str) => <p>{str}</p>);
    return (
      <div className="font-serif break-after-page" style={{margin: '2em 0' }}>
        <div className="px-9">
          <div className="font-bold text-lg ">CS {standard_id}</div>
          <div className="break-inside-avoid">
            <div className="font-semibold ">Description:</div>
            <div>{formattedDescription}</div>
          </div>
          <div className="break-inside-avoid">
            <div className="font-semibold">Context of The Standard:</div>
            <div>{formattedContext}</div>
          </div>
          <div className="break-inside-avoid">
            <div className="font-semibold">Skills</div>
            <div>{fSkills}</div>
          </div>
          <div className="break-inside-avoid">
            <div className="font-semibold">Questions</div>
            <div>{fQuestions}</div>
          </div>
          <div className="break-inside-avoid">
            <div className="font-semibold">Vocabulary</div>
            <div className="pb-5">{fVocab}</div>
          </div>
        </div>
      </div>
    );
  }

  var currentDate = new Date();
  var dateTime =
    currentDate.getMonth() +
    1 +
    "/" +
    currentDate.getDate() +
    "/" +
    currentDate.getFullYear();


  const PDFData = [];
  standardsPerSubject.forEach((subjectMatch) => {
    PDFData.push(
      <div className="pl-9 pr-9"  style={{ pageBreakAfter: 'always'}}>
        <div className=" text-center flex justify-center pb-3">
          <div className=" text-2xl font-serif pt-9 font-bold underline ">
            {subjectMatch.subject_name}
          </div>
        </div>
        <div className="grid grid-cols-3 text-center text-lg font-semibold">
          <div>CS Standard</div>
          <div>Core Standard</div>
          <div>Note</div> 
        </div>
        <div className="text-center">
          {subjectMatch.standards.map((standard_id) => {

            return (
              <div className="grid grid-cols-3 pb-3 gap-3" key={standard_id}>
                <div className="bg-blue-gray-100 rounded-md p-2">
                  {standard_id}
                </div>
                <div className="bg-blue-gray-100 rounded-md p-2">
                  {matching[standard_id].find((subject) => {
                    return subject.subject_name == subjectMatch.subject_name;
                  })["section"] ?? "None"}
                </div>
                <div className="bg-blue-gray-100 rounded-md p-2">
                  {matching[standard_id].find((subject) => {
                    return subject.subject_name == subjectMatch.subject_name;
                  })["note"] ?? "None"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
  return (
    <div ref={ref} className="bg-white p-9">
      <div className="float-right pr-3">{dateTime}</div>
      <div className="pt-9">{PDFData}</div>

      <div className="break-before-page">
        <div className="text-center pt-5 text-2xl font-semibold font-serif ">
          CS Standards
        </div>
        <div className="page-break-after">
          {Object.keys(matching).map((id) => {
            return GetStandardInfo(id);
          })}
        </div>
      </div>
    </div>
  );
});

ComponentToPrint.displayName = "ComponentToPrint";
export default ComponentToPrint;
