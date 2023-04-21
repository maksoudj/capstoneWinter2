import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState, useContext} from "react";
import AddButton from "./AddButton";
import DataContext from "../Context/FormContext";
/**************************************************************************************
Component: PopoverButton
Function: This component is responsible for rendering a button that opens a popover when clicked. 
The popover contains a form where the user can add a new subject. 
The new subject is then added to the list of subjects that are displayed elsewhere in the application.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Parameters - None
Props - None
Context - The DataContext is used to access the subjectList and setSubjectList variables.
Output:
Return – This component returns a button that opens a popover.
**************************************************************************************/
export default function PopoverButton() {
  const {subjectList, setSubjectList} = useContext(DataContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject_id = Math.max(...subjectList.map(subject => subject.subject_id)) + 1
    const subject_name = event.target.subjectToAdd.value;
    const newSubjectList = subjectList;
    newSubjectList.push({subject_id, subject_name});
    setSubjectList((subjectList) => {return [...subjectList,{subject_id,subject_name}]});
  };
  

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        className="relative flex items-center justify-center rounded-full w-[70px] h-[70px] transform transition-all bg-codeVa-vDarkBlue ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md z-0"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <div className="text-5xl">+</div>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Typography sx={{ p: 2 }}>
          <form onSubmit={(event) => {handleSubmit(event)}}>
            <label className="pr-2">
              Enter Subject:
              <input id = "subjectToAdd" type="text" value={value} onChange={handleChange} />
            </label>
            <AddButton
              disabled={false}
            />
          </form>
        </Typography>
      </Popover>
    </div>
  );
}
