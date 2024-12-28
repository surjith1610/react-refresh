import React from 'react'
import { useSelector } from 'react-redux'
import { deleteEmployee } from '../slices/EmployeeSlice';
import { useDispatch } from 'react-redux';

function Employee() {
  const employees = useSelector((state) => state.employeeInfo.employees);
  const dispatch = useDispatch(
    deleteEmployee
  );

  const deleteEmployeeInfo = (index) => {
    console.log('Employee deleted');
    dispatch(deleteEmployee(index));
  }
  console.log(employees);
  return (
    <>
     <div>Employee</div>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <p>{employee.name} 
            {employee.age}
            {employee.email}
            <button onClick={()=> deleteEmployeeInfo(index)}>Delete</button></p>
            </li>
        ))}
      </ul>
    </>
   
  )
}

export default Employee