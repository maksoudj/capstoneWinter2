import React from "react";
import { Box } from "@mui/material";
import LinkButton from "./LinkButton";
import OverViewAccordian from "./OverViewAccordian";
import { useContext, useEffect, useState } from "react";
import DataContext from "../Context/FormContext";
import OverViewModal from "./OverViewModal";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";

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
    console.log(sortedMatching);
    console.log(matching);
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
    console.log(subject.subject_id);
  });
  standardsPerSubject = standardsPerSubject.filter(
    (subjectBindings) => subjectBindings.standards.length != 0
  );
  console.log(standardsPerSubject);

  const overviewAccordionsData = [];
  console.log(standardsPerSubject)
  standardsPerSubject.forEach((subjectMatch) => {
    console.log(subjectMatch);
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
        <div className=" hidden ">
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
          <LinkButton
            disabled={false}
            onClick={() => {
              {
                setPage(0);
              }
            }}
            text="Back To Start"
          />
        </Box>
      </footer>
    </div>
  );
}

export default OverView;
