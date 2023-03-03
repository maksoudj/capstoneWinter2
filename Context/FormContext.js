import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [users,setUsers] = useState([])
    const [formData, setFormData] = useState({
        selectedDivision: null,
        selectedSchool: null,
        selectedGrade: null,
      });
      const [gradeStandards,setGradeStandards] = useState({})
      const [matching, setMatching] = useState({})
      const [subjectList,setSubjectList] = useState([])
      const [scrollVisibility,setScrollVisibility] = useState("visible")
      const [questions, setQuestions] = useState();
      const [skills, setSkills] = useState();
      const [vocab, setVocab] = useState();
      const [page, setPage] = useState(0);
      const [trashVisibility, setTrashVisibility] = useState(false)


    return (
        <DataContext.Provider value = {{
            users, setUsers, formData, setFormData,gradeStandards,setGradeStandards,matching,setMatching,subjectList,setSubjectList,scrollVisibility,setScrollVisibility,questions, setQuestions,skills,setSkills,vocab, setVocab,page,setPage,trashVisibility,setTrashVisibility
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;