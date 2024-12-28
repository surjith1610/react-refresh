import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';

const initialState = {
    employees: []
}

export const employeeSlice = createSlice(
    {
        name: 'employee',
        initialState,
        reducers: {
           setEmployee: (state, action) => {
                state.employees = [...state.employees, action.payload]
           },
           deleteEmployee: (state, action) => {
               state.employees = state.employees.filter(
                (employee, index) => index !== action.payload
               );
           }
       }
   }
);

export const { setEmployee, deleteEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;