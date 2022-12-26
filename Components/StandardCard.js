
import DropArea from "./DropArea";
function moreHandler(){
}

export default function StandardCard() {
  return (
    <div>
    <div className="overflow-hidden bg-white shadow sm:rounded-lg ml-10">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          standard Id
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">description</p>
      </div>
      <div className="border-t border-gray-200">
          <div className="bg-gray-50 px-4 py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              context of the standard:
            </dt>
          </div>
          <div className="bg-white px-4 py-5 sm:gap-4 sm:px-6 mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              actual context
          </div>
          <div className = 'mb-2 mr-2 float-right'>
            <button
              onClick={moreHandler()}
              className="font-medium text-indigo-600 hover:text-indigo-500 "
            >
              More
            </button>
            </div>
      </div>
      
      </div>
      <DropArea/>
    </div>
  );
}
