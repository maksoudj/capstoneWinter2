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
    return (
        <DataContext.Provider value = {{
            users, setUsers, formData,setFormData,gradeStandards,setGradeStandards
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;