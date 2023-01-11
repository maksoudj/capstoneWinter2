import DropCircle from "./DropCircle"
import AddedSubjectButton from "./AddedSubjectButton"
export default function DropArea({standard_id}) {
    
  return (
    <div className= " flex flex-row overflow-auto ml-10 rounded-lg bg-slate-500 font-serif text-black shadow-xl">

            <DropCircle standard_id={standard_id}/>
    </div>

  )
}
