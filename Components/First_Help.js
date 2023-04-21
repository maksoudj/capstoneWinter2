import React from "react";

/**************************************************************************************
Component: First_help
Function: This component displays help information for the first page of the application. 
It provides a brief description of how to select the school division, school name, and grade level options from the dropdown menus and proceed to the next page.
It also provides a link to visit the CodeVA website.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Props -
setIsOpen: A function that sets the state of whether the help modal is open or closed.
Output:
Return - This component returns a React component that displays the help information for the first page of the application in a modal window.
**************************************************************************************/

export default function First_help({
  setIsOpen,
}) {

  return (
    <>
      <div className="justify-center items-center flex-col flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] outline-none focus:outline-none">
        <div className="relative my-6 mx-auto  ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[40vw] h-[45vh] text-xl font-semibold">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">First Page Help:</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <div className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  X
                </div>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto overflow-y-auto">
              <h3 className="text-lg font-semibold ">
              Select the School Division, School Name, and Grade Level options available in the drop-down menus. After making your selections, click on the "next" button located at the bottom right corner. To visit the CodeVA website, you can click on the "About Us" button situated in the bottom left corner.</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-50 bg-black"></div>
    </>
  );
}
