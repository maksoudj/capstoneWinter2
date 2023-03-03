import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Description } from "@mui/icons-material";
import DropArea from "./DropArea";
import DnD from "./DnD";
import DataContext from "../Context/FormContext";

export default function Fourth_help({
  setIsOpen,
}) {

  return (
    <>
      <div className="justify-center items-center flex-col flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] outline-none focus:outline-none">
        <div className="relative my-6 mx-auto  ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[90vw] h-[70vh]">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold"></h3>
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
              <h3 className="text-xl font-semibold"></h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
              </p>
              <h3 className="text-xl font-semibold list-item"></h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
              </p>
              <h3 className="text-xl font-semibold"></h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
              </p>
              <h3 className="text-xl font-semibold"></h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
              </p>
              <h3 className="text-xl font-semibold"></h3>
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-50 bg-black"></div>
    </>
  );
}
