import React from "react";

function MoreModal() {
  return (
    <div className="relative">
      <div className="inset-0 z-10 w-full h-screen overflow-y-auto">
        <div className="absolute inset-0 w-full h-full bg-gray-500 opacity-75"></div>
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          ></span>
          <div
            className="relative inline-block overflow-hidden transition-all transform sm:align-middle sm:max-w-lg"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div>
              <div className="rounded-lg p-8 bg-white shadow">
                <div className="absolute right-4 top-4">
                  <button className="bg-transparent border border-transparent"></button>
                </div>
                <div className="p-4">
                  <div className="mb-4 text-center opacity-90">
                    <a href="#" className="relative block"></a>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                      Charlie
                    </p>
                    <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                      Lead dev
                    </p>
                    <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400"></p>
                  </div>
                  <div className="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreModal;
