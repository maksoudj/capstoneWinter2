import DropCircle from "./DropCircle"
export default function DropArea({standard_id}) {
    
  return (
    <div className= " overflow-auto ml-10 rounded-full bg-slate-500 font-serif text-black shadow-xl outline outline-1 ">

            <DropCircle standard_id={standard_id}/>
    </div>

  )
}
