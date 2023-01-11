import ListOfStandards from "./ListOfStandards";
import DnD from "./DnD";
import Box from "@mui/material/Box";
import LinkButton from "./LinkButton";
import { useContext,useState, useEffect } from "react";
import DataContext from "../Context/FormContext";
import axios from "axios";



export default function Matching({page, setPage}) {
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
         console.log(result);
         setData(result.data[0]);
       };
       fetchData()
     },[]);
     if (data.length === 0){
      return <div></div>
     }
     else{
      setGradeStandards(data)
     }
  return (
    <div>
      <ListOfStandards data = {data}/>
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
              }
            }}
            text="Prev"
          />
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
