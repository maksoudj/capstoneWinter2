import logo from "../images/image4.svg";
import classes from "./Start.module.css";
import DropDown from "./DropDown";
import LinkButton from "./LinkButton";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useContext } from "react";
import DataContext from "../Context/FormContext";
import { Button } from "@mui/material";
/**************************************************************************************
Component: Start
Function: This is a functional component that displays the initial page of the application.
It renders three dropdown menus for selecting a division, school, and grade level. 
It also displays a logo image and two buttons for navigating to the next page and the About Us page.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Parameters - props: an object that contains the following properties:
- schoolsAndDivisions: an object that contains the divisions, schools, grades, and subjects for the application.
- setPage: a function to update the current page.
Output:
Return – The function returns the JSX code for rendering the Start component.
**************************************************************************************/
function Start(props) {
  const {formData, setFormData, setMatching,setSubjectList} = useContext(DataContext)
  const [schools, setSchools] = useState([]);
  const divisions = props.schoolsAndDivisions.divisions.map(
    (division) => division.division_name
  );
  const grades = props.schoolsAndDivisions.grades.map(
    (grade) => grade.grade_level
    );
    
  
  useEffect(() => {
    const getSchools = async () => {
      const response = await axios.post("http://localhost:3000/api/Schools", 
        {selectedDivision: formData.selectedDivision}
      );
      const schoolList = response.data[0].map((school) => school.school_name);
      setSchools(schoolList);
    };
    getSchools();
  }, [formData.selectedDivision]);
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
            onChange={(event, value) => {setFormData({...formData, selectedGrade: value});
            setSubjectList(props.schoolsAndDivisions.subjectList);
            setMatching({})
            }}
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
            <Button className="pl-3 text-black" onClick={() => window.open("https://www.codevirginia.org/educators/", "_blank", "noopener noreferrer")}>About us</Button>
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
