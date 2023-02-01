import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState, useContext, useEffect } from "react";
import AddButton from "./AddButton";
import DataContext from "../Context/FormContext";



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
    setSubjectList(newSubjectList);
    console.log(newSubjectList);
    console.log(subject_name);
    console.log(subject_id);
    console.log(event.target.subjectToAdd.value);
    console.log(subjectList);
  };
  

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        className="relative flex items-center justify-center rounded-full w-[70px] h-[70px] transform transition-al bg-gray-800 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md z-0"
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