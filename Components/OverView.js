import React from "react";
import { Box } from "@mui/material";
import LinkButton from "./LinkButton";
import OverViewAccordian from "./OverViewAccordian";
import { useContext, useEffect, useState } from "react";
import DataContext from "../Context/FormContext";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";
import CSV from "./CSV.js";
/**************************************************************************************
Component: OverView
Function: This component generates the overview of the matching results between the standards and subjects. 
It displays the list of subjects and their matching standards in accordion format.
It also provides options to print or download the overview as a CSV file.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Props -
page: current page number of the application
  setPage: function to set the page number in the application
*----------------------------------------------------------------------------------------------------------------------------------------
Output:
Return – Returns the JSX elements of the OverView component, which includes:
  ComponentToPrint: a component that renders the printable version of the overview
  LinkButton: a reusable component to generate a link button with custom text
  OverViewAccordian: a component that generates an accordion element to display the matching details of a standard and a subject
  CSV: a component that generates a download link for the overview in CSV format
  JSX elements for the subject-wise matching details, generated using the OverViewAccordian component
**************************************************************************************/
function OverView({ page, setPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const { matching, setMatching, gradeStandards, subjectList } =
    useContext(DataContext);
  useEffect(() => {
    const sortedMatching = Object.keys(matching)
      .sort((a, b) => {
        if (a.substring(2) < b.substring(2)) {
          return -1;
        }
        if (a.substring(2) > b.substring(2)) {
          return 1;
        }
        return 0;
      })
      .reduce((obj, key) => {
        obj[key] = matching[key];
        return obj;
      }, {});
    setMatching(sortedMatching);
  }, []);
  let standardsPerSubject = [];
  subjectList.forEach((subject) => {
    standardsPerSubject.push({
      subject_name: subject.subject_name,
      standards: Object.keys(matching).filter((standard_id) =>
        matching[standard_id].find(
          (match) => match.subject_id == subject.subject_id
        )
      ),
    });
  });
  standardsPerSubject = standardsPerSubject.filter(
    (subjectBindings) => subjectBindings.standards.length != 0
  );

  const overviewAccordionsData = [];
  standardsPerSubject.forEach((subjectMatch) => {
    overviewAccordionsData.push(
      <div>
        <div className=" text-center flex justify-center pb-3">
          <div className=" text-3xl py-2 bg-codeVa-vDarkBlue font-serif text-white px-8 rounded-xl">
            {subjectMatch.subject_name}
          </div>
        </div>
        {subjectMatch.standards.map((standard) => {
          return (
            <ul key={standard}>
              <OverViewAccordian
                standard_id={standard}
                standardInfo={gradeStandards.filter(
                  (standards) => standards.standard_id == standard
                )}
                subject_name = {subjectMatch.subject_name}
                
              />
            </ul>
          );
        })}
      </div>
    );
  });

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div>
        <div className="hidden p-7">
          <ComponentToPrint
            standardsPerSubject={standardsPerSubject}
            
            ref={componentRef}
          />
        </div>
        <div className="right-0 absolute">
          <LinkButton
            disabled={false}
            onClick={() => {
              {
                handlePrint();
              }
            }}
            text="Print / Download"
          />
        </div>
      </div>
      <div className="flex pt-5 flex-col items-center ">
        {overviewAccordionsData}
      </div>

      <footer style={{ display: "block" }}>
        <Box
          sx={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "fixed",
            bottom: "0",
            width: "100%",
          }}
        >
          <LinkButton
            disabled={false}
            onClick={() => {
              {
                setPage(page - 1);
              }
            }}
            text="Prev"
          />
          <CSV page={page} setPage={setPage} />
        </Box>
      </footer>
    </div>
  );
}

export default OverView;
