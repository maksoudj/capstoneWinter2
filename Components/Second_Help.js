import React from "react";
/**************************************************************************************
Component: Second_help
Function: This component renders a help modal for the second page of a form. 
It displays instructions for users on how to proceed to the next page and how to return to the previous page.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Parameters -
  setIsOpen: A function that sets the state of whether the modal is open or not.
Output:
Return – This component returns the JSX for the Second_help modal. 
The modal contains a header, body, and two buttons - one for closing the modal and another for navigating to the previous page.
**************************************************************************************/
export default function Second_help({
  setIsOpen,
}) {

  return (
    <>
      <div className="justify-center items-center flex-col flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] outline-none focus:outline-none">
        <div className="relative my-6 mx-auto  ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[40vw] h-[45vh]">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Second Page Help:</h3>
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
              <h3 className="text-lg font-semibold">
              To continue, each member who is participating should provide their complete name, email address, and specify their role within the school. Click the "next" button located at the bottom right corner to proceed. If you need to return to the first page, you can use the "prev" button situated in the bottom left corner.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-50 bg-black"></div>
      
    </>
  );
}
