/* eslint-disable react/jsx-key */
import React, { forwardRef, useContext } from "react";
import DataContext from "../Context/FormContext";


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
    console.log(standardInfo);

    const formattedDescription = standardInfo.description
      .split("\n")
      .map((str) => <p>{str}</p>);
    const formattedContext = standardInfo.context_of_the_standard
      .split("\n")
      .map((str) => <p>{str}</p>);
    console.log(formattedDescription[0]);
    return (
      <div className="font-serif">
        <div className="px-9">
          <div className="font-bold text-lg pt-5">CS {standard_id}</div>
          <div className="font-semibold ">Description:</div>
          {formattedDescription}
          <div className="font-semibold">Context of The Standard:</div>
          {formattedContext}
          <div className="font-semibold">Skills</div>
          <div>{fSkills}</div>
          <div className="font-semibold">Questions</div>
          <div>{fQuestions}</div>
          <div className="font-semibold">Vocabulary</div>
          <div className="pb-5">{fVocab}</div>
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

  console.log(standardsPerSubject);

  const PDFData = [];
  standardsPerSubject.forEach((subjectMatch) => {
    console.log(subjectMatch);
    PDFData.push(
      <div className="pl-9 pr-9">
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
            console.log(standard_id);

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
  console.log(matching);
  return (
    <div ref={ref} className="bg-white p-9">
      <div className="float-right pr-3">{dateTime}</div>
      <div className="pt-9">{PDFData}</div>

      <div className="break-before-page">
        <div className="text-center pt-5 text-2xl font-semibold font-serif ">
          CS Standards
        </div>
        <div className="break-inside-avoid">
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
