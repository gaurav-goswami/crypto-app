import { combineReducers } from "@reduxjs/toolkit";
import { fetchReducer } from "./fetchReducer";
import { currencyTypeReducer } from "./currencyTypeReducer";

const rootReducer = combineReducers({
    fetchReducer,
    currencyTypeReducer,
})

export default rootReducer;