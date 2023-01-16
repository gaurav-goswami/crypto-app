import { combineReducers } from "@reduxjs/toolkit";
import { fetchReducer } from "./fetchReducer";
import { currencyTypeReducer } from "./currencyTypeReducer";
import chartPriceReducer from "./chartPriceReducer";

const rootReducer = combineReducers({
    fetchReducer,
    currencyTypeReducer,
    chartPriceReducer
})

export default rootReducer;