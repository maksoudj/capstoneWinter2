import React from "react";
import DataContext from "../Context/FormContext";
import { useContext } from "react";
import { color } from "@mui/system";


export default function ProgressBar() {
  
  const {gradeStandards, matching} = useContext(DataContext);
  
  console.log(Object.keys(matching).length)
  console.log(gradeStandards.length);

  const Progress = Math.round((Object.keys(matching).length / gradeStandards.length) * 100).toString().concat("%");

  console.log(Progress);
  
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
