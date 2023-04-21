import ListOfStandards from "./ListOfStandards";
import DnD from "./DnD";
import Box from "@mui/material/Box";
import LinkButton from "./LinkButton";
import { useContext,useState } from "react";
import DataContext from "../Context/FormContext";
import axios from "axios";
import ProgressBar from "./ProgressBar";
/**************************************************************************************
Component: Matching
Function:
This component is responsible for rendering the matching activity screen. 
It displays a list of standards for a particular grade level, a drag-and-drop activity, 
and navigation buttons to move between pages of the activity.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Props -
  page: an integer representing the current page of the activity
  setPage: a function used to update the current page of the activity
Context -
  questions: an array of question objects
  setQuestions: a function used to update the questions array
  skills: an array of skill objects
  setSkills: a function used to update the skills array
  vocab: an array of vocabulary objects
  setVocab: a function used to update the vocabulary array
  gradeStandards: an array of standard objects for a specific grade level
  formData: an object containing form data collected from previous screens
  setGradeStandards: a function used to update the gradeStandards array
Output:
This component does not return any value. It renders the matching activity screen with appropriate components.
Return –
This component does not have a return statement.
**************************************************************************************/
export default function Matching({page, setPage}) {
  const {questions, setQuestions} = useContext(DataContext);
  const {skills, setSkills} = useContext(DataContext);
  const {vocab, setVocab,gradeStandards} = useContext(DataContext);
  async function getStandards (){
    let result =  await axios.post("http://localhost:3000/api/Standard_info",{
      firstCharOfGrade
    })
    return result
  }
    const {formData} = useContext(DataContext)
    const {setGradeStandards} = useContext(DataContext)

    let selectedGrade = formData.selectedGrade
    const firstCharOfGrade = selectedGrade[0]
    const [data, setData] = useState([]);
   

     

  return (
    <div>
      <ListOfStandards data = {gradeStandards}/>
      <DnD/>
      <footer style={{ display: "block" }}>
        <Box
          sx={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "fixed",
            bottom: "0",
            width: "100%",
            alignItems: "flex-end"
          }}
        >
          <LinkButton
            disabled={false}
            onClick={() => {
              {
                setPage(page - 1);

              }
            }}
            text="Prev"
          />
          <ProgressBar />
          <LinkButton
            disabled={false}
            onClick={() => {
              {
                setPage(page + 1);
              }
            }}
            text="Next"
          />
        </Box>
      </footer>
    </div>
  );
}
