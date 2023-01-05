import DropArea from "./DropArea";
import { useState } from "react";
import MoreModal from "./MoreModal";

function moreHandler() {

}

export default function StandardCard(props) {
  const [isOpen, setIsOpen] = useState(false)
  console.log(props);
  return (
    
    <div>
      {isOpen && <MoreModal/>}
      <div className="overflow-hidden bg-white shadow sm:rounded-lg ml-10 ">
        <div className="px-4 pt-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {props.standard_id}
          </h3>
        </div>
        <div className="mt-1 px-4 max-w-2xl text-sm text-gray-500 overflow-auto box-border h-20">
        description: <br/>
          {props.description}
        </div>
        <div className="border-t border-gray-200">
          <div className="bg-gray-50 px-4 py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              context of the standard:
            </dt>
          </div>
          <div className="bg-white px-4 py-5 sm:gap-4 sm:px-6 mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 overflow-auto overflow-ellipsis box-border h-32">
            {props.context_of_the_standard}
          </div>
          <div className="mb-2 mr-2 float-right">
            <button
              onClick={() => {setIsOpen(true)}}
              className="font-medium text-indigo-600 hover:text-indigo-500 "
            >
              More
            </button>
          </div>
        </div>
      </div>
      <DropArea />
    </div>
  );
}
