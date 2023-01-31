import { Box } from "@mui/system";
import LinkButton from "../Components/LinkButton";
import Start from "../Components/start";
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
  const {subjectList, setSubjectList } = useContext(DataContext)
  setSubjectList(props.schoolsAndDivisions.subjectList)
  console.log(subjectList)
  const [page, setPage] = useState(0);
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
      return (
        <UserInputs
          page={page}
          setPage={setPage}
        />
      );
    }
    if (page === 2){
      return (<Matching
        page={page}
        setPage={setPage}/>);
    }
    if (page === 3){
      return (<OverView
        page={page}
        setPage={setPage}/>);
    }
  };

  return <div>{pageDisplay()}</div>;
}
export async function getStaticProps() {
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
