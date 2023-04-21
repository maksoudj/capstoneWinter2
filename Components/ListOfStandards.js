import StandardCard from "./StandardCard";
import { useContext } from "react";
import DataContext from "../Context/FormContext";
import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
/**************************************************************************************
Component: List
Function: This component is responsible for rendering a list of StandardCards by mapping through the input data passed as a prop. 
It also renders a scrollbar using the SimpleBarReact component and handles the scrollVisibility state from the FormContext.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Parameters -
data: An array of objects representing the data to be displayed in the list.
Output:
Return – A JSX element representing a list of StandardCards with a scrollbar.
**************************************************************************************/
export default function List({ data }) {
  const {scrollVisibility} = useContext(DataContext)
  const cardsList = data.map((standard) => {
    return (
      <StandardCard
        key={standard.standard_id}
        standard_id={standard.standard_id}
        description={standard.description}
        context_of_the_standard={standard.context_of_the_standard}
      />
    );
  });


  return (
    <div className="mt-6">
        <SimpleBarReact style={{zIndex : 5 , overflow : scrollVisibility}}
        className="h-[66vh]"
        
        >
        <div className="flex flex-row z-0 ">
        {cardsList}
        </div>
        </SimpleBarReact>
    </div>
  );
}
