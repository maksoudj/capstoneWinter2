/* eslint-disable react/jsx-key */
import React, { forwardRef, useContext } from "react";
import DataContext from "../Context/FormContext";
const ComponentToPrint = forwardRef(({ standardsPerSubject }, ref) => {
  const { questions, setQuestions } = useContext(DataContext);
  const { skills, setSkills } = useContext(DataContext);
  const { vocab, setVocab, matching, gradeStandards } = useContext(DataContext);
  function GetStandardInfo(subject_name, standard_id) {
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
      <div>
        {standard_id}
        Description:
        {formattedDescription[0]}
        Context of The Standard:
        {formattedContext[0]}
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
      <div>
        <div className=" text-center flex justify-center pb-3">
          <div className=" text-2xl font-serif">
            {subjectMatch.subject_name}
          </div>
        </div>
        {subjectMatch.standards.map((standard_id) => {
          console.log(standard_id);

          return (
            <ul key={standard_id}>
              {GetStandardInfo(subjectMatch.subject_name, standard_id)}
            </ul>
          );
        })}
      </div>
    );
  });
  return (
    <div ref={ref} className="bg-white pl-6">
      <div className="float-right pr-3">{dateTime}</div>

      {PDFData}
      <div className="ml-[180px]">
        <h2>Attendance</h2>
        <table>
          <thead>
            <th>S/N</th>
            <th>Name</th>
            <th>Email</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Njoku Samson</td>
              <td>samson@yahoo.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ebere Plenty</td>
              <td>ebere@gmail.com</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Undefined</td>
              <td>No Email</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
});

ComponentToPrint.displayName = "ComponentToPrint";
export default ComponentToPrint;
