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

function Parent(props) {
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    selectedDivision: null,
    selectedSchool: null,
    selectedGrade: null,
  });
  const pageDisplay = () => {
    if (page === 0) {
      return (
        <Start
          schoolsAndDivisions={props.schoolsAndDivisions}
          page={page}
          setPage={setPage}
          formData={formData}
          setFormData={setFormData}
        />
      );
    }
    if (page === 1) {
      return (
        <UserInputs
          page={page}
          setPage={setPage}
          users={users}
          setUsers={setUsers}
        />
      );
    }
    if (page === 2){
      return (<Matching
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
