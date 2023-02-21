/* eslint-disable react/jsx-key */
import DropArea from "./DropArea";
import { useState, useEffect, useContext } from "react";
import MoreModal from "./MoreModal";
import axios from "axios";
import DataContext from "../Context/FormContext";

export default function StandardCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  let cardWidth = window.innerWidth / 3;
  const formattedDescription = props.description.split('\n').map(str => <p>{str}</p>);
  const formattedContext = props.context_of_the_standard.split('\n').map(str => <p>{str}</p>);
  

  return (
    <div>
      {isOpen && <MoreModal setIsOpen={setIsOpen} standard_id = {props.standard_id} description = {formattedDescription} context_of_the_standard = {formattedContext}/>}
        <div>
          <div className="overflow-hidden bg-white shadow sm:rounded-3xl ml-10 mb-5"  style={{ width: cardWidth} }>
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
              <div className="bg-gray-50 px-4 py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Context of The Standard:
                </dt>
              </div>
              <div className="bg-white px-4 py-5 sm:gap-4 sm:px-6 mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 overflow-auto overflow-ellipsis box-border h-32">
                {formattedContext}
              </div>
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
          <DropArea standard_id = {props.standard_id}/>
        </div>
      
    </div>
  );
}
