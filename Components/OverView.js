import React from "react";
import { Box } from "@mui/material";
import LinkButton from "./LinkButton";
import OverViewAccordian from "./OverViewAccordian";
import { useContext,useEffect } from "react";
import DataContext from "../Context/FormContext";
function OverView({ page, setPage }) {
  const { matching, setMatching, gradeStandards } = useContext(DataContext);
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
  console.log(gradeStandards);

  const listOfAccordions = Object.keys(matching).map((standard) => {
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
  });
 
  console.log(listOfAccordions);
  console.log(matching);
  return (
    <div>
      <div className="flex pt-5 flex-col items-center ">{listOfAccordions}</div>

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
