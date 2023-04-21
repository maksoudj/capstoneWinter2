/* eslint-disable react/jsx-key */
import DropArea from "./DropArea";
import { useState, useContext } from "react";
import MoreModal from "./MoreModal";
import DataContext from "../Context/FormContext";
/**************************************************************************************
Component: StandardCard
Function: This component renders a card with information about a particular standard, and notes associated with that standard. 
It also allows the user to view more information about the standard in a modal,
and provides a drop area for the user to drag and drop files related to the standard.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Props -
  standard_id: The unique ID of the standard being displayed.
  description: A string containing the description of the standard.
  context_of_the_standard: A string containing the context of the standard.
Output:
Returns a JSX element that displays a card containing information about the standard and notes associated with it.
**************************************************************************************/
export default function StandardCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { matching } = useContext(DataContext);
  let cardWidth = window.innerWidth / 3;
  const formattedDescription = props.description
    .split("\n")
    .map((str) => <p>{str}</p>);
  const formattedContext = props.context_of_the_standard
    .split("\n")
    .map((str) => <p>{str}</p>);
  const standard_id = props.standard_id;
  let notes = <div></div>;
  try {
    notes = matching[standard_id].map((subject) => {
      if (subject.note && subject.section){
      return (
        <div>
          <div className="font-bold">{subject.subject_name}</div>
          <div className="list-item ml-4 font-semibold">{ subject.section.split("\n")
    .map((str) => <p>{str}</p>)}</div>
          <div className="mb-4 ml-8 list-item">{subject.note.split("\n")
    .map((str) => <p>{str}</p>)}</div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="font-bold">{subject.subject_name}</div>
          <div className="list-item ml-4 font-semibold mb-4">Section And/Or Note Not Added</div>
          
        </div>
      );
    }});
  } catch (e) {
    notes = <div></div>;
  }

  return (
    <div>
      {isOpen && (
        <MoreModal
          setIsOpen={setIsOpen}
          standard_id={props.standard_id}
          description={formattedDescription}
          context_of_the_standard={formattedContext}
        />
      )}
      <div className="grid grid-rows-2">
        <div
          className="overflow-hidden bg-white shadow sm:rounded-3xl ml-10 mb-5"
          style={{ width: cardWidth }}
        >
          <div className="px-4 pt-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              CS {props.standard_id}
            </h3>
          </div>
          <div className="mt-1 px-4 max-w-2xl text-sm text-gray-900 overflow-auto box-border h-20">
            Description: <br />
            {formattedDescription}
          </div>
          <div className="border-t border-gray-200">
            <div className="mb-2 mr-2 float-right">
              <button
                onClick={() => {
                  setIsOpen(true);
                }}
                className="font-medium text-indigo-600 hover:text-indigo-500 "
              >
                More
              </button>
            </div>
          </div>
        </div>
        <div
          className="overflow-hidden bg-white shadow sm:rounded-3xl ml-10 mb-5"
          style={{ width: cardWidth }}
        >
          <div className="px-4 pt-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              CS {props.standard_id} Notes
            </h3>
          </div>
          <div className="mt-1 px-4 max-w-2xl text-sm text-gray-900 overflow-auto box-border h-24">
            {notes}
          </div>
        </div>
        <DropArea standard_id={props.standard_id} />
      </div>
    </div>
  );
}
