import ListOfStandards from "./ListOfStandards";
import DnD from "./DnD";
import Box from "@mui/material/Box";
import LinkButton from "./LinkButton";
import { useContext,useState, useEffect } from "react";
import DataContext from "../Context/FormContext";
import axios from "axios";



export default function Matching({page, setPage}) {
  const {questions, setQuestions} = useContext(DataContext);
  const {skills, setSkills} = useContext(DataContext);
  const {vocab, setVocab, setUpdateSubjects} = useContext(DataContext);
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
    console.log(selectedGrade)
    console.log(formData);
    const [data, setData] = useState([]);
   
     useEffect(() => {
       const fetchData = async () => {
         const result = await getStandards()
         setData(result.data);
       };
       fetchData()

     },[]);
     if (data.length === 0){
      return <div></div>
     }
     else{
      console.log(data)

      setGradeStandards(data[0][0])
      setQuestions(data[1][0])
      setSkills(data[2][0])
      setVocab(data[3][0])
     }

  return (
    <div>
      <ListOfStandards data = {data[0][0]}/>
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
          }}
        >
          <LinkButton
            disabled={false}
            onClick={() => {
              {
                setPage(page - 1);
                setUpdateSubjects(true)

              }
            }}
            text="Prev"
          />
          
          <LinkButton
            disabled={false}
            onClick={() => {
              {
                setPage(page + 1);
                setUpdateSubjects(true)
              }
            }}
            text="Next"
          />
        </Box>
      </footer>
    </div>
  );
}
