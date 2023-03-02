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

function Parent(props) {
  const { setGradeStandards } = useContext(DataContext);
  const { subjectList, setSubjectList, formData, setMatching } =useContext(DataContext);
  const {questions, setQuestions} = useContext(DataContext);
  const {skills, setSkills} = useContext(DataContext);
  const {vocab, setVocab} = useContext(DataContext);
  setSubjectList(props.schoolsAndDivisions.subjectList);
  console.log(subjectList);
  const [page, setPage] = useState(0);

  
  if (formData.selectedGrade != null && formData.selectedGrade.length > 0) {
  let selectedGrade = formData.selectedGrade;
  var firstCharOfGrade = selectedGrade[0];
  console.log(selectedGrade);
  console.log(formData);
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
