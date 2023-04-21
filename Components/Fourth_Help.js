import React from "react";
/**************************************************************************************
Component: Fourth_help
Function: This component represents the help dialog for the fourth page of the application. 
It displays the instructions and information for the user on how to use this page.
*----------------------------------------------------------------------------------------------------------
Input:
Parameters -
setIsOpen: A function that sets the state of the help dialog box to open or closed.
Output: 
Return – The component returns a JSX structure that represents the help dialog box containing instructions 
and information for the user on how to use the fourth page of the application.
**************************************************************************************/

export default function Fourth_help({
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
              <h3 className="text-3xl font-semibold">Fourth Page Help:</h3>
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
            <div className="relative p-6 flex-auto overflow-y-auto mb-5">
              <h3 className="text-xl font-semibold ">
              On this page, you can get an overview of all the matched Standards. The Standards are grouped by the subject they are matched to, and it shows the CS standard and both notes added to the matching. Clicking on each matched Standard will display all the information for that particular Standard. Clicking the submit button will download a CSV file and take you back to the start. You can also print or download the displayed information by clicking the "print/download" button.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-50 bg-black"></div>
    </>
  );
}
