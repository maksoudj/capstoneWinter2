import React, { forwardRef } from 'react'


 const ComponentToPrint = forwardRef((props, ref) => {
    return (
      <div ref={ref} className='bg-white'>
        <div className='h-full w-[170px] fixed bg-blue-gray-500'></div>
        <div className='ml-[180px]'>
        <h2>Attendance</h2>
        <table>
          <thead>
            
            <th>S/N</th>
            <th>Name</th>
            <th>Email</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Njoku Samson</td>
              <td>samson@yahoo.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ebere Plenty</td>
              <td>ebere@gmail.com</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Undefined</td>
              <td>No Email</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    );
  });

  ComponentToPrint.displayName = "ComponentToPrint"
  export default ComponentToPrint;