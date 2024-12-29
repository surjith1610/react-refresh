import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../slices/EmployeeSlice";
import customerReducer from "../slices/customerSlice";


export const store = configureStore({
    reducer: {
        employeeInfo: employeeReducer,
        customerInfo: customerReducer,
    },
});

export default store;