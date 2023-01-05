import logo from "../images/image4.svg";
import classes from "./Start.module.css";
import DropDown from "./DropDown";
import LinkButton from "./LinkButton";
import Box from "@mui/material/Box";
//import { FormControl } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useContext } from "react";
import DataContext from "../Context/FormContext";

function Start(props) {
  const {formData, setFormData} = useContext(DataContext)
  console.log(props)
  const [schools, setSchools] = useState([]);
  const divisions = props.schoolsAndDivisions.divisions.map(
    (division) => division.division_name
  );
  const grades = props.schoolsAndDivisions.grades.map(
    (grade) => grade.grade_level
    );
 // const [school, setSchool] = useState();
  useEffect(() => {
    const getSchools = async () => {
      console.log(formData.selectedDivision + "aaaa");
      const response = await axios.post("http://localhost:3000/api/Schools", 
        {selectedDivision: formData.selectedDivision}
      );
      const schoolList = response.data[0].map((school) => school.school_name);
      setSchools(schoolList);
    };
    getSchools();
  }, [formData.selectedDivision]);

  console.log(props);
  return (
    <div>
        <div className={classes.inputBox}>
          <DropDown
            id="select-Division"
            label="Select Division"
            value={formData.selectedDivision}
            onChange={(event, value) => setFormData({...formData, selectedDivision: value})}
            options={divisions}
          />
          <DropDown
            id="select-School-Name"
            label="Select School Name"
            value={formData.selectedSchool}
            onChange={(event, value) => setFormData({...formData, selectedSchool: value})}
            options={schools}
          />
          <DropDown
            id="Select-Grade-Level"
            label="Select Grade Level"
            options={grades}
            value={formData.selectedGrade}
            onChange={(event, value) => setFormData({...formData, selectedGrade: value})}


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
              disabled={!Boolean(formData.selectedSchool)}
              onClick= {() => {{props.setPage( props.page + 1)}}} 
              text="Next"
            />
          </Box>
        </footer>
    </div>
  );
}


export default Start;
