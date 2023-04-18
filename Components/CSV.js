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
import { CSVLink, CSVDownload } from "react-csv";

// this function will take the data in the matching context and make a CSV in the form of: standardID, descriptionOfStandard, subjectMatch, subjectSection, subjectNote
function CSV ({ page, setPage }){
    const { matching, gradeStandards, users, formData, setMatching} = useContext(DataContext);
    console.log(users);
    console.log(formData);
    let CSVdata = [
        ["Standard ID", "Description Of Standard", "Subject Match", "Subject Section", "Subject Note", "Names", "School Name"]
    ];
    //create one string of all the fullNames in the users array
    let names = users.map(user => user.fullName).join(", ");
    //get the keys of the matching object
    let keys = Object.keys(matching);
    console.log(matching);
    //loop through the keys and get the data for each key
    for (let i = 0; i < keys.length; i++){
        const standardID = keys[i];
        const desc = gradeStandards.find(standard => standard.standard_id === standardID).description;
        //get the data from the matching object
        let data = matching[standardID].map((match) => {
            let matchValues = Object.values(match);
            console.log(matchValues.length);
            if (matchValues.length === 2){
                matchValues.push('No Note Added');
                matchValues.push("No Note Added");
            }
            matchValues.shift();
            matchValues.unshift(desc);
            matchValues.unshift(standardID);
            matchValues.push(names);
            matchValues.push(formData.selectedSchool);
            console.log(matchValues);
            return matchValues;
        });
        console.log(data);
        //push the data to the CSVdata array

        data.forEach(match=>{CSVdata.push(match)});
    }
    CSVdata = [
        CSVdata[0],
        ...CSVdata.slice(1).sort((a, b) => {
          if (parseInt(a[0].substring(2)) < parseInt(b[0].substring(2))) {
            return -1;
          }
          if (parseInt(a[0].substring(2)) > parseInt(b[0].substring(2))) {
            return 1;
          }
          return 0;
        }),
      ];
    for(let i = 0; i<CSVdata.length;i++){
        CSVdata[i][0] = "'" + CSVdata[i][0] + "'" 
    }
    console.log(CSVdata);
    return <CSVLink data={CSVdata} ><LinkButton
    disabled={false}
    onClick={() => {
      {
        setPage(0);
      }
    }}
    text="Submit"
  /></CSVLink>;
}

export default CSV;