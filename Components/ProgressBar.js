import React from "react";
import DataContext from "../Context/FormContext";
import { useContext } from "react";
/**************************************************************************************
Component: ProgressBar
Function: This component displays a progress bar showing the completion status of a form matching process. 
The progress bar includes a status message and a percentage value.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Parameters - None
Context -
  gradeStandards: an array of grade standards
  matching: an object containing matched form values
Output:
Return - Returns JSX for rendering the progress bar UI.
**************************************************************************************/

export default function ProgressBar() {
  
  const {gradeStandards, matching} = useContext(DataContext);


  const Progress = Math.round((Object.keys(matching).length / gradeStandards.length) * 100).toString().concat("%");

  
  let progressStatus = "";
  if(Progress == '100%'){
    progressStatus = "Matching Completed!"
  }
  else{
    progressStatus = "Matching in progress"
  }

  return (
    <div className="relative pt-2 w-[50vw]">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-codeVa-darkGreen bg-codeVa-green">
            {progressStatus}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-codeVa-green">
           {Progress}
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-codeVa-green">
        <div
          style={{ width: Progress }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-codeVa-darkGreen"
        ></div>
      </div>
    </div>
  );
}
