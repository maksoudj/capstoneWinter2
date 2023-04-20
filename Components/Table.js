/**************************************************************************************

Component: Table
Function: This component is used to display a table with data, including columns for full name, email and role of users. 
It also includes an 'Edit' button for each row.
*----------------------------------------------------------------------------------------------------------------------------------------
Input:
Parameters - N/A
Output:
Return - This component returns a JSX element that displays a table with data. The data is hardcoded and doesn't come from an API or a database.
**************************************************************************************/
export default function Table(){
    
    return(
    <div className="container max-w-3xl px-4 mx-auto sm:px-8">
    <div className="py-8">
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-3xl shadow">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Full Name
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Email
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Role
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <div className="flex items-center">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Marcus c
                                        </p>
                                </div>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    Designer
                                </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    01/10/2012
                                </p>
                            </td>
                            
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <div className="flex items-center">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Ecric marc
                                        </p>
                                </div>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    Developer
                                </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    02/10/2018
                                </p>
                            </td>
                           
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <div className="flex items-center">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            Julien Huger
                                        </p>
                                </div>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    User
                                </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    23/09/2010
                                </p>
                            </td>
                            
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                    Edit
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                    <div className="flex items-center">
                        <button type="button" className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
                            <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                        <button type="button" className="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 ">
                            1
                        </button>
                        <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                            2
                        </button>
                        <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100">
                            3
                        </button>
                        <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                            4
                        </button>
                        <button type="button" className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
                            <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}