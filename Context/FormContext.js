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
    return (
        <DataContext.Provider value = {{
            users, setUsers, formData,setFormData,gradeStandards,setGradeStandards,matching,setMatching,subjectList,setSubjectList
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;