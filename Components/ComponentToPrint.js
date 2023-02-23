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
      <div className="pl-9 pr-9">
        <div className=" text-center flex justify-center pb-3">
          <div className=" text-2xl font-serif pt-9 font-bold">
            {subjectMatch.subject_name}
          </div>
        </div>
        <div className="grid grid-cols-3 text-center text-lg font-semibold">
          <div >Standard Id</div>
          <div>Core Standard</div>
          <div>Note</div>
        </div>
        <div className="text-center">
          {subjectMatch.standards.map((standard_id) => {
            console.log(standard_id);

            return (
              <div className="grid grid-cols-3 pb-3 gap-3" key={standard_id}>
                <div className="bg-blue-gray-100 rounded-md p-2">{standard_id}</div>
                <div className="bg-blue-gray-100 rounded-md p-2">
                  {
                    matching[standard_id].find((subject) => {
                      return subject.subject_name == subjectMatch.subject_name;
                    })["section"] ?? "None"
                  }
                </div>
                <div className="bg-blue-gray-100 rounded-md p-2">
                  {
                    matching[standard_id].find((subject) => {
                      return subject.subject_name == subjectMatch.subject_name;
                    })["note"] ?? "None"
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
  return (
    <div ref={ref} className="bg-white">
      <div className="float-right pr-3">{dateTime}</div>

      <div className = "pt-9">{PDFData}</div>
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
      <div className="flex justify-center">
        <div className="grid grid-cols-4 w-[70vw] place-items-center  gap-2">
          <div>subject</div>
          <div>CS Standard</div>
          <div>Core Standard</div>
          <div>Note</div>
        </div>
      </div>
    </div>
  );
});

ComponentToPrint.displayName = "ComponentToPrint";
export default ComponentToPrint;
