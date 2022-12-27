import React from 'react'
import SubjectCircle from './SubjectCircle'
import { useState } from 'react'
const subjectList = [
    {
        id: 1,
        subject: "Math",
    },
    {
        id: 2,
        subject: "Science",
    },
    {
        id: 3,
        subject: "English",
    },
    {
        id: 4,
        subject: "Social Studies",
    },
]

function DnD() {
    const [addedSubjects,setAddedSubjects] = useState([])
  return (
    <>
    <div className="mx-auto  w-[780px] rounded-lg bg-slate-500 font-serif text-black shadow-xl">
    <div className = "flex justify-between p-4"> {subjectList.map((subject) => {return <SubjectCircle subject = {subject.subject} key = {subject.id} id = {subject.id}/>})}</div>
    </div>
    </>
  )
}

export default DnD