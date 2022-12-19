import logo from "../images/image4.svg";
import classes from "./Start.module.css";
import DropDown from "./DropDown";
import LinkButton from "./LinkButton";
import Box from "@mui/material/Box";
//import { FormControl } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

function Start(props) {
  console.log(props)
  const [schools, setSchools] = useState([]);
  const divisions = props.schoolsAndDivisions.divisions.map(
    (division) => division.division_name
  );
 // const [school, setSchool] = useState();
  useEffect(() => {
    const getSchools = async () => {
      console.log(props.formData.selectedDivision + "aaaa");
      const response = await axios.post("http://localhost:3000/api/Schools", 
        {selectedDivision: props.formData.selectedDivision}
      );
      const schoolList = response.data[0].map((school) => school.school_name);
      setSchools(schoolList);
    };
    getSchools();
  }, [props.formData.selectedDivision]);

  console.log(props);
  return (
    <div>
        <div className={classes.inputBox}>
          <DropDown
            id="select-Division"
            label="Select Division"
            value={props.formData.selectedDivision}
            onChange={(event, value) => props.setFormData({...props.formData, selectedDivision: value})}
            options={divisions}
          />
          <DropDown
            id="select-School-Name"
            label="Select School Name"
            value={props.formData.selectedSchool}
            onChange={(event, value) => props.setFormData({...props.formData, selectedSchool: value})}
            options={schools}
          />
          <DropDown
            id="Select-Grade-Level"
            label="Select Grade Level"
            options={[
              "1st Grade",
              "2nd Grade",
              "3rd Grade",
              "4th Grade",
              "5th Grade",
              "6th Grade",
              "7th Grade",
              "8th Grade",
              "9th Grade",
              "10th Grade",
              "11th Grade",
              "12th Grade",
            ]}
          />
        </div>
        <div>
          <Image className={classes.logo} src={logo} alt="aaa" />
        </div>
        <footer>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              position: "fixed",
              bottom: "0",
              width: "100%",
            }}
          >
            <LinkButton text="About us" action="/User-Inputs" />
            <LinkButton
              disabled={!Boolean(props.formData.selectedSchool)}
              onClick= {() => {{props.setPage( props.page + 1)}}} 
              text="Next"
            />
          </Box>
        </footer>
    </div>
  );
}


export default Start;
