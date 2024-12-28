import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../slices/EmployeeSlice";

export const store = configureStore({
    reducer: {
        employeeInfo: employeeReducer
    },
});

export default store;