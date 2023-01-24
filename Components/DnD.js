import React from 'react'
import SubjectCircle from './SubjectCircle'
import { useState } from 'react'
import { useContext } from "react";
import DataContext from "../Context/FormContext";


function DnD() {
    const [addedSubjects,setAddedSubjects] = useState([])
    const {subjectList} = useContext(DataContext)
    
  return (
    <>
    <div className="mx-auto  w-[780px] rounded-full bg-slate-500 font-serif shadow-xl outline outline-1">
    <div className = "flex justify-between p-4"> {subjectList.map((subject) => {return <SubjectCircle subject = {subject.subject_name} key = {subject.subject_id} id = {subject.subject_id}/>})}</div>
    </div>
    </>
  )
}

export default DnD