import React from "react";
import { Box } from "@mui/material";
import LinkButton from "./LinkButton";
import OverViewAccordian from "./OverViewAccordian";
import { useContext,useEffect } from "react";
import DataContext from "../Context/FormContext";
function OverView({ page, setPage }) {
  const { matching, setMatching, gradeStandards, subjectList} = useContext(DataContext);
  useEffect(() => {
    const sortedMatching = Object.keys(matching).sort((a,b) => {
      if (a.substring(2) < b.substring(2)) {
        return -1;
      }
      if (a.substring(2) > b.substring(2)) {
        return 1;
      }
      return 0;
    }).reduce((obj,key) => {
      obj[key] = matching[key]
      return obj
    },{})
    console.log(sortedMatching)
    console.log(matching)
    setMatching(sortedMatching)
  },[])
  const standardsPerSubject = []
  subjectList.forEach(subject => {
    standardsPerSubject.push({subject_name: subject.subject_name, standards: Object.keys(matching).filter(standard_id => matching[standard_id].find(match => match.subject_id == subject.subject_id))})
    console.log(subject.subject_id)
    console.log(standardsPerSubject)
  });
  
  const overviewAccordionsData = []
 standardsPerSubject.forEach(subject => {
   if (subject.standards.length != 0){
     console.log(subject)
      overviewAccordionsData.push(
     <div >
      <div className=" text-center flex justify-center pb-3">
       <div className=" text-3xl py-2 bg-blue-gray-600 font-serif text-white px-8  rounded-xl">
       {subject.subject_name}
       </div>
       </div>
       {subject.standards.map((standard) => {
         return (
           <ul key={standard}>
             <OverViewAccordian
               standard_id={standard}
               listOfSubjects={matching[standard]}
               standardInfo={gradeStandards.filter(
                 (standards) => standards.standard_id == standard
               )}
             />
           </ul>
         );
       })}
       </div>)
    }
 })
  
 
  return (
    <div>
      <div className="flex pt-5 flex-col items-center ">{overviewAccordionsData}</div>

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
                setPage(page + 1);
              }
            }}
            text="Next"
          />
        </Box>
      </footer>
    </div>
  );
}

export default OverView;
