import { Box } from "@mui/system";
import LinkButton from "../Components/LinkButton";
import Start from "../Components/Start";
import logo from "../images/image4.svg";
//import { FormControl } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import UserInputs from "../Components/User-Inputs";
import Matching from "../Components/Matching";
import OverView from "../Components/OverView";
import { useContext } from "react";
import DataContext from "../Context/FormContext";
/**************************************************************************************
Component: Index
Function: This component serves as the main component of the application. 
It contains the logic for rendering different pages based on the user's inputs and interactions with the application.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Props -
  schoolsAndDivisions: Data containing a list of schools and their corresponding divisions.
Context -
  formData: Data containing the user's input values.
  setMatching: Function for setting the user's matching results.
  setGradeStandards: Function for setting the standard information for the selected grade.
  setQuestions: Function for setting the questions for the selected grade.
  setSkills: Function for setting the skills for the selected grade.
  setVocab: Function for setting the vocabulary for the selected grade.
  setSubjectList: Function for setting the list of subjects for the selected school.
  page: Data containing the current page number.
  setPage: Function for setting the current page number.
Output:
Returns the rendered page based on the user's interactions with the application.
Return – None
**************************************************************************************/

function Parent(props) {
  const { setGradeStandards } = useContext(DataContext);
  const { subjectList, setSubjectList, formData, setMatching } =useContext(DataContext);
  const {questions, setQuestions} = useContext(DataContext);
  const {skills, setSkills} = useContext(DataContext);
  const {vocab, setVocab} = useContext(DataContext);
  setSubjectList(props.schoolsAndDivisions.subjectList);
  const {page, setPage} = useContext(DataContext);

  
  if (formData.selectedGrade != null && formData.selectedGrade.length > 0) {
  let selectedGrade = formData.selectedGrade;
  var firstCharOfGrade = selectedGrade[0];
  }
  useEffect(() => {
    
    const fetchData = async () => {
       return await axios.post("http://localhost:3000/api/Standard_info", {
        firstCharOfGrade,
      });
    };
    if (formData.selectedGrade != null){
    fetchData().then((result) => {
      setGradeStandards(result.data[0][0])
      setQuestions(result.data[1][0])
      setSkills(result.data[2][0])
      setVocab(result.data[3][0])
    })
    }
  }, [formData]);

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <Start
          schoolsAndDivisions={props.schoolsAndDivisions}
          page={page}
          setPage={setPage}
        />
      );
    }
    if (page === 1) {
      return <UserInputs page={page} setPage={setPage} />;
    }
    if (page === 2) {
      return <Matching page={page} setPage={setPage} />;
    }
    if (page === 3) {
      return <OverView page={page} setPage={setPage} />;
    }
  };

  return <div>{pageDisplay()}</div>;
}
export async function getServerSideProps() {
  const { data: schoolsAndDivisions } = await axios.get(
    "http://localhost:3000/api/Schools"
  );

  return {
    props: {
      schoolsAndDivisions,
    },
  };
}
export default Parent;
